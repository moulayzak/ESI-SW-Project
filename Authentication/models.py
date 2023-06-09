from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.translation import gettext_lazy as _
from phone_field import PhoneField
import uuid
from django.db.models import Sum

class UserManager(BaseUserManager):
    def create_user(self, email, address, phone_number, role, password=None):
            
        if not email:
            raise ValueError("Users must have an email address")

        user = self.model(
            email=self.normalize_email(email),
            address=address,
            phone_number=phone_number,
            role=role,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, address, phone_number, role, password=None):
        
        user = self.create_user(
            email,
            password=password,
            address=address,
            phone_number=phone_number,
            role=role
        )
        user.is_admin = True
        user.is_superuser=True
        user.save(using=self._db)
        return user

 
class User(AbstractBaseUser, PermissionsMixin):
    
    STATUS_CHOICES = (
        
        ('EMPLOYEE', 'Employee'),
        ('SOCIAL WORK COMITTEE', 'Social Work Comittee'),

    )
    email = models.EmailField( verbose_name="email address", max_length=255, unique=True)
    fullname = models.CharField( max_length=50, null = True,blank=True)
    address = models.CharField( max_length=50, null = True,blank=True)
    phone_number = PhoneField(blank=True, help_text='Contact phone number')
    creation_date = models.DateTimeField(null=True)
    role = models.CharField(max_length=20,choices = STATUS_CHOICES, default='EMPLOYEE')
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    @property
    def is_staff(self):
        return self.is_admin
    
    objects = UserManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['address','phone_number','role']
    
    def get_full_name(self):
        return self.email
    
    def get_short_name(self):
        return self.email
    
    def __str__(self):
        return self.email

class Fund(models.Model):
    total_budget = models.IntegerField(default=0)
    remaining_budget = models.IntegerField(default=0)

    def save(self, *args, **kwargs):
        # Calculate allocated_chapters_amount
        allocated_chapters_amount = Chapter.objects.aggregate(Sum('allocated_amount'))['allocated_amount__sum'] or 0
        
       
        
        super().save(*args, **kwargs)

    
        
class Chapter(models.Model):
    
    title = models.CharField(max_length=50)
    allocated_amount = models.IntegerField(default=0,null=True,blank=True)
    remaining_allocated_amount = models.IntegerField(default=0,null=True,blank=True)
    
    def __str__(self):
        return self.title
    

from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=50)   
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE, related_name='articles') 
    allocated_amount = models.IntegerField(default=0,null=True,blank=True)
    remaining_allocated_amount = models.IntegerField(default=0,null=True,blank=True)
    GRANT = models.IntegerField(null=True,blank=True)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        
        # Update allocated_amount of the associated Chapter
        self.chapter.allocated_amount = self.chapter.articles.aggregate(total_allocated_amount=models.Sum('allocated_amount')).get('total_allocated_amount') or 0
        self.chapter.remaining_allocated_amount = self.chapter.articles.aggregate(total_remaining_allocated_amount=models.Sum('remaining_allocated_amount')).get('total_remaining_allocated_amount') or 0
        self.chapter.save()

    def __str__(self):
        return self.title

    
class Program(models.Model):
    
    article = models.OneToOneField(Article, on_delete=models.CASCADE,null = True, related_name='programs')
    description = models.TextField(max_length=1000)
    
    def __str__(self):
        return self.article.title


class Request(models.Model):
    
    STATUS_CHOICES = (
        ('PENDING ', 'Pending'),
        ('ACCEPTED', 'accepted'),
        ('REJECTED', 'Rejected'),
        ('PAID','paid')
    )
    PAYMENT_TYPE = (
        ('CASH', 'cash'),
        ('BANK_TRANSFER', 'bank_transfer'),
        ('CHECK', 'check'),
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_requests')
    article = models.ForeignKey( Article , on_delete=models.CASCADE, related_name='requests',null=True)
    status = models.CharField(max_length=10,choices=STATUS_CHOICES, default='PENDING') 
    payment_method = models.CharField(max_length=50, choices=PAYMENT_TYPE,default='CASH')
    date = models.DateTimeField()
    note = models.CharField(max_length=1000,null=True,blank=True)
    files = models.FileField(upload_to=None,blank=True,null=True)
    
class Transaction(models.Model):
    
    TRANSACTION_TYPE = (
        ('ALLOCATION', 'allocation'),
        ('PAYOUT', 'payout'),
        ('TRANSFER', 'tranfer'),
        ('INCOME', 'income'),
    )
    PAYMENT_TYPE = (
        ('CASH', 'cash'),
        ('BANK_TRANSFER', 'bank_transfer'),
        ('CHECK', 'check'),
    )  
    article = models.ForeignKey(Article, on_delete=models.CASCADE,null = True,blank=True, related_name='transactions')
    request = models.ForeignKey(Request, on_delete=models.CASCADE,null = True,blank=True, related_name='transactions')
    budget = models.ForeignKey(Fund, on_delete=models.CASCADE,null = True,blank=True, related_name='transactions')
    type = models.CharField(max_length=10, choices=TRANSACTION_TYPE)
    payment_method = models.CharField(max_length=50,null = True,blank=True, choices=PAYMENT_TYPE)
    date = models.DateTimeField() 
    amount = models.IntegerField(default=0,null=True,blank=True)
    recipe_name = models.CharField(max_length=50,null=True,blank=True)
    
    def __str__(self):
        return self.id
    
class Event(models.Model):
    
    user = models.ForeignKey(User , on_delete=models.CASCADE, related_name='events')
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE,null=True, related_name='events')
    title = models.CharField(max_length=100,null=True)
    location = models.CharField(max_length=100,null=True)
    start_date = models.DateField( auto_now=False, auto_now_add=False,null=True)
    end_date = models.DateField(auto_now=False, auto_now_add=False)
    image = models.ImageField(upload_to=None,null=True)
    description = models.TextField()
    def __str__(self):
        return self.title    
    
class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications')
    request = models.ForeignKey(Request , on_delete=models.CASCADE,null=True, related_name='notifications')
    event = models.ForeignKey(Event , on_delete=models.CASCADE,null=True)
    description = models.TextField()
    date = models.DateTimeField()
    def __str__(self):
        return self.id    