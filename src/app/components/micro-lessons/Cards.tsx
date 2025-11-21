/* eslint-disable react/jsx-no-bind */
import React, { useCallback } from 'react';
import * as S from './Cards.styles';
import { cards } from '../../utils/micro-learning-data';
import Modal from './Modal';
import { useModalActions, useModalOpen } from '../../hooks/modal-hook';

const Cards: React.FC = () => {
  const isModal = useModalOpen();
  const { openModal, completedCard } = useModalActions();
  const handleClick = useCallback(
    (day: number) => {
      console.log(`Card ${day} clicked`);
      openModal(day);
    },
    [openModal]
  );
  return (
    <>
      <S.CardGrid>
        {cards.map(({ day, topic, id }) => {
          console.log('completed card', completedCard(id));
          const completed = completedCard(id);
          return (
            <S.Card $completed={completed} onClick={() => handleClick(id)} key={id}>
              <h4>{day}</h4>
              <p>{topic}</p>
              {completed && <S.Dot />}
            </S.Card>
          );
        })}
      </S.CardGrid>
      {isModal && <Modal />}
    </>
  );
};

export default Cards;
