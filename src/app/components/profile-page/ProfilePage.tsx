/* eslint-disable */

// /* eslint-disable */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/explicit-function-return-type */
// /* eslint-disable react/jsx-no-bind */
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Save, ArrowLeft } from 'lucide-react';
// import {
//   Form,
//   Header,
//   Input,
//   Label,
//   ProfileContainer,
//   SaveButton,
//   Select,
//   Title,
// } from './ProfilePage.styles';

// const ProfilePage: React.FC = () => {
//   const navigate = useNavigate();

//   const [profile, setProfile] = useState({
//     language: '',
//     workplaceRegion: '',
//     department: '',
//     roleType: '',
//     relationshipStatus: '',
//     careResponsibility: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
//     const { name, value } = e.target;
//     setProfile((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent): void => {
//     e.preventDefault();
//     console.log('Saved profile:', profile);
//     //  send this data to the backend via API
//   };

//   return (
//     <ProfileContainer>
//       <Header>
//         <ArrowLeft size={20} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
//         <Title>Edit Profile</Title>
//       </Header>

//       <Form onSubmit={handleSubmit}>
//         <Label>Preferred Language</Label>
//         <Select name='language' value={profile.language} onChange={handleChange}>
//           <option value=''>Select language</option>
//           <option value='English'>English</option>
//           <option value='Zulu'>Zulu</option>
//           <option value='Xhosa'>Xhosa</option>
//           <option value='Afrikaans'>Afrikaans</option>
//         </Select>

//         <Label>Workplace Region</Label>
//         <Input name='workplaceRegion' value={profile.workplaceRegion} onChange={handleChange} />

//         <Label>Department / Category</Label>
//         <Input name='department' value={profile.department} onChange={handleChange} />

//         <Label>Role Type</Label>
//         <Input name='roleType' value={profile.roleType} onChange={handleChange} />

//         <Label>Relationship Status</Label>
//         <Select
//           name='relationshipStatus'
//           value={profile.relationshipStatus}
//           onChange={handleChange}
//         >
//           <option value=''>Select</option>
//           <option value='Single'>Single</option>
//           <option value='Married'>Married</option>
//           <option value='Divorced'>Divorced</option>
//           <option value='Other'>Other</option>
//         </Select>

//         <Label>Care Responsibility</Label>
//         <Select
//           name='careResponsibility'
//           value={profile.careResponsibility}
//           onChange={handleChange}
//         >
//           <option value=''>Select</option>
//           <option value='None'>None</option>
//           <option value='Children'>Children</option>
//           <option value='Elderly'>Elderly</option>
//           <option value='Both'>Both</option>
//         </Select>

//         <SaveButton type='submit'>
//           <Save size={18} /> Save Changes
//         </SaveButton>
//       </Form>
//     </ProfileContainer>
//   );
// };

// export default ProfilePage;

import React, { useState } from 'react';
import { addMessage, getMessages, getUser, clearUser } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  Header,
  Info,
  ProfileContainer,
  Avatar,
  SaveButton,
  Title,
  Section,
  MessageBox,
  MessageItem,
  MessageDate,
  NoUserContainer,
  DeleteButton,
  MessageInputWrapper,
  MessageInput,
  SignUpButton,
} from './ProfilePage.styles';
import { Save, ArrowLeft } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const user = getUser();
  const navigate = useNavigate();
  const [messages, setMessages] = useState(getMessages());
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent): void => {
    if (input.trim() === '') return;
    addMessage(input.trim());
    setMessages(getMessages());
    setInput('');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This cannot be undone.')) {
      clearUser();
      navigate('/guest-home');
    }
  };

  const handleSignUP = () => {
    navigate('/signup');
  };

  if (!user) {
    return (
      <NoUserContainer>
        <Header>
          <ArrowLeft size={20} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
          <Title>Edit Profile</Title>
        </Header>
        <Avatar
          as='svg'
          width='40'
          height='40'
          viewBox='0 0 24 24'
          className='rounded-full bg-gray-200 text-gray-400'
          xmlns='http://www.w3.org/2000/svg'
          style={{ cursor: 'pointer' }}
        >
          <circle cx='12' cy='8' r='4' fill='currentColor' />
          <path d='M4 20c0-4 4-6 8-6s8 2 8 6' fill='currentColor' />
        </Avatar>
        <Title>No user data found. Please sign up first.</Title>
        <SignUpButton onClick={handleSignUP}>Sign Up</SignUpButton>
      </NoUserContainer>
    );
  }

  return (
    <>
      <ProfileContainer>
        <Header>
          <ArrowLeft size={20} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
          <Title>Edit Profile</Title>
        </Header>

        <Avatar
          as='svg'
          width='40'
          height='40'
          viewBox='0 0 24 24'
          className='rounded-full bg-gray-200 text-gray-400'
          xmlns='http://www.w3.org/2000/svg'
          style={{ cursor: 'pointer' }}
        >
          <circle cx='12' cy='8' r='4' fill='currentColor' />
          <path d='M4 20c0-4 4-6 8-6s8 2 8 6' fill='currentColor' />
        </Avatar>

        <Form onSubmit={handleSubmit}>
          <Title>
            Name: <Info>{user.name}</Info>
          </Title>
          <Title>
            Email Address: <Info>{user.email}</Info>
          </Title>
          <Title>
            Country: <Info>{user.country}</Info>
          </Title>
          <Title>
            Age: <Info>{user.ageRange}</Info>
          </Title>
          <Title>
            Device: <Info>{user.deviceUsed}</Info>
          </Title>
          <Title>
            Healing Journey Stage: <Info>{user.survivorStage}</Info>
          </Title>

          <Section>
            <Title>Professional Feedback</Title>
            <MessageBox>
              {messages.length === 0 ? (
                <p style={{ color: '#888', textAlign: 'center' }}>No messages yet.</p>
              ) : (
                messages.map((msg) => (
                  <MessageItem key={msg.id}>
                    {msg.content}
                    <MessageDate>{msg.date}</MessageDate>
                  </MessageItem>
                ))
              )}
            </MessageBox>

            {/* <MessageInputWrapper>
      <MessageInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type feedback..."
      />
      <SaveButton type='submit'>
        <Save size={18} /> Save Changes
    </SaveButton>
    </MessageInputWrapper> */}
          </Section>

          <SaveButton type='submit'>
            <Save size={18} /> Save Changes
          </SaveButton>
        </Form>

        <DeleteButton onClick={handleDeleteAccount}>Delete Account</DeleteButton>
      </ProfileContainer>
    </>
  );
};

export default ProfilePage;
