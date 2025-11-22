import React from 'react';
import * as S from './ProgressBar.styles';
import { useModalCompletedDay } from '../../hooks/modal-hook';
const ProgressBar: React.FC = () => {
  const completedDay = useModalCompletedDay();
  console.log('day', completedDay);
  const progress = (completedDay / 16) * 100;
  return (
    <S.ProgressBarContainer>
      <S.ProgressBarFill progress={progress} />
    </S.ProgressBarContainer>
  );
};

export default ProgressBar;
