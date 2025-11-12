/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */

import React from 'react';
import {
  SuggestedWrapper,
  SuggestedTitle,
  CardText,
  CardHeading,
  CardDescription,
  LotusEmoji,
  Card,
} from '../home/HomePage.styled';

export default function AffirmationCards({ items }) {
  const defaultItems = [
    {
      id: 'a1',
      title: 'Daily Affirmation',
      description: 'I am worthy of good things, and today I welcome positivity into my life.',
      emoji: '🌸',
      href: '#',
    },
    {
      id: 'a2',
      title: 'Self-Love Reminder',
      description: 'I honor my progress, celebrate my strengths, and treat myself with kindness.',
      emoji: '💖',
      href: '#',
    },
  ];

  const list = Array.isArray(items) && items.length ? items : defaultItems;

  return (
    <SuggestedWrapper>
      <SuggestedTitle>Affirmations for you</SuggestedTitle>

      {defaultItems.map((item) => (
        <Card key={item.id}>
          <CardText>
            <CardHeading>{item.title}</CardHeading>
            <CardDescription>{item.description}</CardDescription>
            {/* <CardLink>Explore more</CardLink> */}
          </CardText>
          <LotusEmoji>{item.emoji}</LotusEmoji>
        </Card>
      ))}
    </SuggestedWrapper>
  );
}
