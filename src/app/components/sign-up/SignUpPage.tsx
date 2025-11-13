/* eslint-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import {
  Container,
  RightPanel,
  FormTitle,
  Form,
  Label,
  TextInput,
  SelectInput,
  CountrySelectorButton,
  CountryDropdown,
  CountrySelectWrapper,
  CountryOption,
  PinkButton,
} from './SignUp.styles';
import { useNavigate } from 'react-router-dom';

type Country = { name: string; flag: string };
type StepData = {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  ageRange?: string;
  country?: string;
  deviceUsed?: string;
  survivorStage?: string;
};

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<StepData>({});
  const [countries, setCountries] = useState<Country[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleChange = (field: keyof StepData, value: string): void => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags')
      .then((res) => res.json())
      .then((data) => {
        const countryList: Country[] = data.map((c: any) => ({
          name: c.name.common,
          flag: c.flags?.png ?? '',
        }));
        countryList.sort((a, b) => a.name.localeCompare(b.name));
        setCountries(countryList);
      });
  }, []);

  return (
    <Container>
      <RightPanel>
        <FormTitle>Create Your Account</FormTitle>
        <Form>
          {step === 1 && (
            <>
              <Label>Full Name</Label>
              <TextInput
                value={formData.fullName || ''}
                onChange={(e) => handleChange('fullName', e.target.value)}
              />

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

          {step === 2 && (
            <>
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
              <CountrySelectWrapper>
                <CountrySelectorButton type='button' onClick={() => setShowDropdown(!showDropdown)}>
                  <span>
                    {formData.country ? (
                      <>
                        <img
                          src={countries.find((c) => c.name === formData.country)?.flag || ''}
                          alt={formData.country}
                        />{' '}
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
                    {countries.map((c) => (
                      <CountryOption
                        key={c.name}
                        onClick={() => {
                          handleChange('country', c.name);
                          setShowDropdown(false);
                        }}
                      >
                        <img src={c.flag} alt={c.name} />
                        {c.name}
                      </CountryOption>
                    ))}
                  </CountryDropdown>
                )}
              </CountrySelectWrapper>

              <Label>Device Used</Label>
              <SelectInput
                value={formData.deviceUsed || ''}
                onChange={(e) => handleChange('deviceUsed', e.target.value)}
              >
                <option value=''>Select</option>
                <option value='Mobile'>Mobile</option>
                <option value='Laptop'>Laptop</option>
              </SelectInput>

              <Label>Healing Journey Stage</Label>
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
            {step < 2 ? (
              <PinkButton type='button' onClick={nextStep}>
                Next
              </PinkButton>
            ) : (
              <PinkButton
                type='button'
                onClick={() => {
                  console.log('Collected Sign Up Data:', formData);
                  navigate('/home');
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
