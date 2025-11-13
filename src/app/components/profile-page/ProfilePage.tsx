/* eslint-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, ArrowLeft } from 'lucide-react';
import {
  Form,
  Header,
  Input,
  Label,
  ProfileContainer,
  SaveButton,
  Select,
  Title,
} from './ProfilePage.styles';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    language: '',
    workplaceRegion: '',
    department: '',
    roleType: '',
    relationshipStatus: '',
    careResponsibility: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log('Saved profile:', profile);
    //  send this data to the backend via API
  };

  return (
    <ProfileContainer>
      <Header>
        <ArrowLeft size={20} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
        <Title>Edit Profile</Title>
      </Header>

      <Form onSubmit={handleSubmit}>
        <Label>Preferred Language</Label>
        <Select name='language' value={profile.language} onChange={handleChange}>
          <option value=''>Select language</option>
          <option value='English'>English</option>
          <option value='Zulu'>Zulu</option>
          <option value='Xhosa'>Xhosa</option>
          <option value='Afrikaans'>Afrikaans</option>
        </Select>

        <Label>Workplace Region</Label>
        <Input name='workplaceRegion' value={profile.workplaceRegion} onChange={handleChange} />

        <Label>Department / Category</Label>
        <Input name='department' value={profile.department} onChange={handleChange} />

        <Label>Role Type</Label>
        <Input name='roleType' value={profile.roleType} onChange={handleChange} />

        <Label>Relationship Status</Label>
        <Select
          name='relationshipStatus'
          value={profile.relationshipStatus}
          onChange={handleChange}
        >
          <option value=''>Select</option>
          <option value='Single'>Single</option>
          <option value='Married'>Married</option>
          <option value='Divorced'>Divorced</option>
          <option value='Other'>Other</option>
        </Select>

        <Label>Care Responsibility</Label>
        <Select
          name='careResponsibility'
          value={profile.careResponsibility}
          onChange={handleChange}
        >
          <option value=''>Select</option>
          <option value='None'>None</option>
          <option value='Children'>Children</option>
          <option value='Elderly'>Elderly</option>
          <option value='Both'>Both</option>
        </Select>

        <SaveButton type='submit'>
          <Save size={18} /> Save Changes
        </SaveButton>
      </Form>
    </ProfileContainer>
  );
};

export default ProfilePage;
