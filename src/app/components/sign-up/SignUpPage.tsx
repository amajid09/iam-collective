import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import {
  Container,
  LeftPanel,
  RightPanel,
  FormTitle,
  Form,
  Label,
  TextInput,
  SelectInput,
  SubmitButton,
  CountrySelectorButton,
  CountryDropdown,
  CountrySelectWrapper,
  CountryOption,
} from './SignUp.styles';
import { useNavigate } from 'react-router-dom';
import { PinkButton } from '../landing-page/LandingPage.styles';

type Country = {
  name: string;
  flag: string;
};

type StepData = {
  fullName?: string;
  ageRange?: string;
  country?: string;
  language?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  workplaceRegion?: string;
  department?: string;
  roleType?: string;
  relationshipStatus?: string;
  careResponsibilities?: string;
  deviceUsed?: string;
  gender?: string;
  survivorStage?: string;
};

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<StepData>({});
  const [countries, setCountries] = useState<Country[]>([]);

  const handleChange = (field: keyof StepData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags')
      .then((res) => res.json())
      .then((data) => {
        const countryList: Country[] = data.map((c: any) => ({
          name: c.name.common,
          flag: c.flags?.png || '',
        }));
        countryList.sort((a, b) => a.name.localeCompare(b.name));
        setCountries(countryList);
      })
      .catch((err) => console.error('Error fetching countries:', err));
  }, []);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=languages')
      .then((res) => res.json())
      .then((data: any[]) => {
        //  extract all language names
        const allLanguages: string[] = data.flatMap((country) =>
          country.languages ? (Object.values(country.languages) as string[]) : []
        );

        // Remove duplicates + sort alphabetically
        const uniqueLanguages: string[] = Array.from(new Set(allLanguages)).sort();

        setLanguages(uniqueLanguages);
      })
      .catch((err) => console.error('Error fetching languages:', err));
  }, []);

  return (
    <Container>
      <LeftPanel>
        <img src='/girl.jpg' alt='Welcome to IAM Collective' />
      </LeftPanel>

      <RightPanel>
        <FormTitle>Create Your Account</FormTitle>
        <Form>
          {step === 0 && (
            <>
              <Label>Email</Label>
              <TextInput
                type='email'
                value={formData.email || ''}
                onChange={(e) => handleChange('email', e.target.value)}
              />
              <Label>Password</Label>
              <TextInput
                type='password'
                value={formData.password || ''}
                onChange={(e) => handleChange('password', e.target.value)}
              />
              <Label>Confirm Password</Label>
              <TextInput
                type='password'
                value={formData.confirmPassword || ''}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
              />
            </>
          )}

          {step === 1 && (
            <>
              <Label>Full Name</Label>
              <TextInput
                value={formData.fullName || ''}
                onChange={(e) => handleChange('fullName', e.target.value)}
              />
              <Label>Age Range</Label>
              <SelectInput
                value={formData.ageRange || ''}
                onChange={(e) => handleChange('ageRange', e.target.value)}
              >
                <option value=''>Select</option>
                <option value='18-24'>18-24</option>
                <option value='25-34'>25-34</option>
                <option value='35-44'>35-44</option>
                <option value='45+'>45+</option>
              </SelectInput>
              <Label>Country</Label>
              {countries.length === 0 ? (
                <SelectInput disabled>
                  <option>Loading countries...</option>
                </SelectInput>
              ) : (
                <CountrySelectWrapper>
                  <CountrySelectorButton
                    type='button'
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <span>
                      {formData.country ? (
                        <>
                          <img
                            src={countries.find((c) => c.name === formData.country)?.flag || ''}
                            alt={formData.country}
                          />
                          {formData.country}
                        </>
                      ) : (
                        'Select Country'
                      )}
                    </span>
                    <span>▾</span>
                  </CountrySelectorButton>

                  {showDropdown && (
                    <CountryDropdown>
                      {countries.map((country) => (
                        <CountryOption
                          key={country.name}
                          onClick={() => {
                            handleChange('country', country.name);
                            setShowDropdown(false);
                          }}
                        >
                          <img src={country.flag} alt={country.name} />
                          {country.name}
                        </CountryOption>
                      ))}
                    </CountryDropdown>
                  )}
                </CountrySelectWrapper>
              )}

              <Label>Language Preference</Label>

              {languages.length === 0 ? (
                <SelectInput disabled>
                  <option>Loading languages...</option>
                </SelectInput>
              ) : (
                <SelectInput
                  value={formData.language || ''}
                  onChange={(e) => handleChange('language', e.target.value)}
                >
                  <option value=''>Select</option>
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </SelectInput>
              )}
            </>
          )}

          {step === 2 && (
            <>
              <Label>Workplace Region</Label>
              <TextInput
                type='text'
                placeholder='Enter your workplace region'
                value={formData.workplaceRegion || ''}
                onChange={(e) => handleChange('workplaceRegion', e.target.value)}
              />

              <Label>Department Category</Label>
              <SelectInput
                value={formData.department || ''}
                onChange={(e) => handleChange('department', e.target.value)}
              >
                <option value=''>Select</option>
                <option value='HR'>HR</option>
                <option value='Engineering'>Engineering</option>
              </SelectInput>

              <Label>Role Type</Label>
              <SelectInput
                value={formData.roleType || ''}
                onChange={(e) => handleChange('roleType', e.target.value)}
              >
                <option value=''>Select</option>
                <option value='Manager'>Manager</option>
                <option value='Staff'>Staff</option>
              </SelectInput>
            </>
          )}

          {step === 3 && (
            <>
              <Label>Relationship Status</Label>
              <SelectInput
                value={formData.relationshipStatus || ''}
                onChange={(e) => handleChange('relationshipStatus', e.target.value)}
              >
                <option value=''>Select</option>
                <option value='Single'>Single</option>
                <option value='Married'>Married</option>
              </SelectInput>

              <Label>Care Responsibilities</Label>
              <SelectInput
                value={formData.careResponsibilities || ''}
                onChange={(e) => handleChange('careResponsibilities', e.target.value)}
              >
                <option value=''>Select</option>
                <option value='None'>None</option>
                <option value='Children'>Children</option>
                <option value='Elders'>Elders</option>
                <option value='Prefer not to say'>Prefer not to say</option>
              </SelectInput>

              <Label>Device Used</Label>
              <SelectInput
                value={formData.deviceUsed || ''}
                onChange={(e) => handleChange('deviceUsed', e.target.value)}
              >
                <option value=''>Select</option>
                <option value='Mobile'>Mobile</option>
                <option value='Laptop'>Laptop</option>
              </SelectInput>
            </>
          )}

          {step === 4 && (
            <>
              <Label>Gender</Label>
              <SelectInput
                value={formData.gender || ''}
                onChange={(e) => handleChange('gender', e.target.value)}
              >
                <option value=''>Select</option>
                <option value='Female'>Female</option>
                <option value='Male'>Male</option>
                <option value='Non-binary'>Non-binary</option>
                <option value='Prefer not to say'>Prefer not to say</option>
              </SelectInput>

              <Label>Survivor Journey Stage</Label>
              <SelectInput
                value={formData.survivorStage || ''}
                onChange={(e) => handleChange('survivorStage', e.target.value)}
              >
                <option value=''>Select</option>
                <option value='I am here to learn'>I am here to learn</option>
                <option value='Healing'>Healing</option>
                <option value='Support someone'>Support someone</option>
                <option value='Prefer not to say'>Prefer not to say</option>
              </SelectInput>
            </>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
            {step > 1 && (
              <PinkButton type='button' onClick={prevStep}>
                Back
              </PinkButton>
            )}
            {step < 4 ? (
              <PinkButton type='button' onClick={nextStep}>
                Next
              </PinkButton>
            ) : (
              <PinkButton
                type='button'
                onClick={() => {
                  console.log('Collected Sign Up Data:', formData);
                  navigate('/home'); // redirect registered user to home
                }}
              >
                Complete Sign Up
              </PinkButton>
            )}
          </div>
        </Form>
      </RightPanel>
    </Container>
  );
}
