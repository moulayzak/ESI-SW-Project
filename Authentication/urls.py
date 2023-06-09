from django.urls import path
from . import views



# /auth/users/

# /auth/users/me/

# /auth/users/confirm/

# /auth/users/resend_activation/

# /auth/users/set_password/

# /auth/users/reset_password/

# /auth/users/reset_password_confirm/

# /auth/users/set_username/

# /auth/users/reset_username/

# /auth/users/reset_username_confirm/

# /token/login/ (Token Based Authentication)

# /token/logout/ (Token Based Authentication)

# /jwt/create/ (JSON Web Token Authentication)

# /jwt/refresh/ (JSON Web Token Authentication)

# /jwt/verify/ (JSON Web Token Authentication)

urlpatterns = [
    path('api/auth/login/', views.login, name='login'),
    path('home/', views.homePage, name='home'),
    path('home-0/', views.HomeView.as_view(), name ='home-0'),
    path('logout/',views.logoutUser,name='logout'),
    path('logout-0/', views.LogoutView.as_view(), name ='logout-0'),
    path('user-page/',views.userPage,name='user'),
    #------------------User_urls---------------------------
    
    path('user/',views.UserList,name='user-list'),
    path('user/details/<str:pk>/',views.UserDetail,name='user-detail'),
    path('user/create/',views.UserCreate,name='user-create'),
    path('user/update/<str:pk>/',views.UserUpdate,name='user-update'),
    path('user/delete/<str:pk>/',views.UserDelete,name='user-delete'),

    #------------------Fund_urls---------------------------
    
    path('fund/',views.FundList,name='fund-list'),
    path('increase-total-budget/', views.increase_total_budget, name='increase-total-budget'),
    path('fund/details/<str:pk>/',views.FundDetail,name='fund-detail'),
    path('fund/create/',views.FundCreate,name='fund-create'),
    path('fund/update/<str:pk>/',views.FundUpdate,name='fund-update'),
    path('fund/delete/<str:pk>/',views.FundDelete,name='fund-delete'),

    #------------------chapter_urls---------------------------
    
    path('chapter/',views.ChapterList,name='chapter-list'),
    
    path('chapter/details/<str:pk>/',views.ChapterDetail,name='chapter-detail'),
    path('chapter/create/',views.ChapterCreate,name='chapter-create'),
    path('chapter/update/<str:pk>/',views.ChapterUpdate,name='chapter-update'),
    path('chapter/delete/<str:pk>/',views.ChapterDelete,name='chapter-delete'),  
    
    #------------------article_urls---------------------------
    
    path('article/',views.ArticleList,name='article-list'),
    path('article/details/<str:pk>/',views.ArticleDetail,name='article-detail'),
    path('api/move_allocated_amount/', views.move_allocated_amount, name='move_allocated_amount'),
    path('article/create/',views.ArticleCreate,name='article-create'),
    path('article/update/<str:pk>/',views.ArticleUpdate,name='article-update'),
    path('article/delete/<str:pk>/',views.ArticleDelete,name='article-delete'),  
              
    #------------------Program_urls---------------------------
    
    path('program/',views.ProgramList,name='program-list'),
    path('program/details/<str:pk>/',views.ProgramDetail,name='program-detail'),
    path('program/create/',views.ProgramCreate,name='program-create'),
    path('program/update/<str:pk>/',views.ProgramUpdate,name='program-update'),
    path('program/delete/<str:pk>/',views.ProgramDelete,name='program-delete'),  
            
    #------------------Request_urls---------------------------
    
    path('request/',views.RequestList,name='request-list'),
    path('request/details/<str:pk>/',views.RequestDetail,name='request-detail'),
    path('request/create/',views.RequestCreate,name='request-create'),
    path('request/update/<str:pk>/',views.RequestUpdate,name='request-update'),
    path('request/delete/<str:pk>/',views.RequestDelete,name='request-delete'),  
                        
 #------------------Transaction_urls---------------------------
    
    path('transaction/',views.TransactionList,name='transaction-list'),
    path('transaction/details/<str:pk>/',views.TransactionDetail,name='transaction-detail'),
    path('transaction/create/',views.TransactionCreate,name='transaction-create'),
    path('transaction/update/<str:pk>/',views.TransactionUpdate,name='transaction-update'),
    path('transaction/delete/<str:pk>/',views.TransactionDelete,name='transaction-delete'),  
                        
 #------------------Event_urls---------------------------
    
    path('event/',views.EventList,name='event-list'),
    path('event/details/<str:pk>/',views.EventDetail,name='event-detail'),
    path('event/create/',views.EventCreate,name='event-create'),
    path('event/update/<str:pk>/',views.EventUpdate,name='event-update'),
    path('event/delete/<str:pk>/',views.EventDelete,name='event-delete'),  

 #------------------Notification_urls---------------------------
    
    path('notification/',views.NotificationList,name='notification-list'),
    path('notification/details/<str:pk>/',views.NotificationDetail,name='notification-detail'),
    path('notification/create/',views.NotificationCreate,name='notification-create'),
    path('notification/update/<str:pk>/',views.NotificationUpdate,name='notification-update'),
    path('notification/delete/<str:pk>/',views.NotificationDelete,name='notification-delete'),  
   
]