import React, { useState, useEffect } from 'react';
import FullName from './components_profile/FirstName';
import Email from './components_profile/Email';
import Adresse from './components_profile/Adresse';
import ContactNumber from './components_profile/ContactNumber';
import Password from './components_profile/Password';
import styles from './EditProfile.module.css';
const EditProfile = () => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAdresse] = useState('');
  const [phone_number, setContactNumber] = useState('');

  useEffect(() => {
    fetchProfileData();
  }, []);


  const fetchProfileData = async () => {
    try {
      const response = await fetch('');
      if (!response.ok) {
        throw new Error('Failed to fetch profile data');
      }
      console.log(response);
      const profileData = await response.json();
      setFullName(profileData.fullname);
      setEmail(profileData.email);
      setAdresse(profileData.address);
      setContactNumber(profileData.phone_number);
      console.log(profileData);

    } catch (error) {
      console.error(error);
    }
  };

  const handleFullNameChange = (value) => {
    setFullName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleAdresseChange = (value) => {
    setAdresse(value);
  };

  const handleContactNumberChange = (value) => {
    setContactNumber(value);
  };

  return (
    <div className={styles.editProfile}>
      <div className={styles.editprofilecontainer}>
        <div className={styles.profileInformations}>Profile Informations</div>
        <div className={styles.profileinformations}>
          <FullName fullname={fullname} onChange={handleFullNameChange} />
          <Email email={email} onChange={handleEmailChange} />
          <Adresse address={address} onChange={handleAdresseChange} />
          <ContactNumber phone_number={phone_number} onChange={handleContactNumberChange} />
          <Password />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;