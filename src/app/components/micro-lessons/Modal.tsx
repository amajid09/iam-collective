import React, { useCallback, useEffect, useRef } from 'react';
import * as S from './Modal.styles';
import { modalData } from '../../utils/micro-learning-data';
import { toast } from 'sonner';
import { useModalActions, useModalOpen, useModalSelectedDay } from '../../hooks/modal-hook';

const Modal: React.FC = () => {
  const modalDay = useModalSelectedDay();
  const isModal = useModalOpen();
  const { closeModal, onCompletedDay } = useModalActions();
  const {
    day,
    theme,
    notification,
    microLearning,
    tryThis,
    grounding,
    reflectionPrompt,
    socialHook,
  } = modalData[modalDay - 1];
  const [loading, setLoading] = React.useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (!isModal) return;

    document.addEventListener('mousedown', handleClickOutside);
    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside, isModal]);

  const closeButton = useCallback(async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoading(false);
    onCompletedDay(day);
    toast.custom((t) => (
      <S.CustomToastWrapper $bgColor='#ff69b4' $textColor='#fff'>
        Day {day} completed!
      </S.CustomToastWrapper>
    ));
  }, [onCompletedDay, day]);

  return (
    <S.Modal active={isModal}>
      <S.ModalContainer>
        <S.ModalContent ref={modalRef}>
          <S.CloseButton onClick={closeModal}>×</S.CloseButton>
          <S.ModalHeader>
            <S.ModalDayNumber>Day {day}</S.ModalDayNumber>
            <S.ModalTheme>{theme}</S.ModalTheme>
            <S.ModalNotification>{notification}</S.ModalNotification>
          </S.ModalHeader>
          <S.Section>
            <S.SectionTitle>📚 Micro-Learning</S.SectionTitle>
            <S.SectionContent>{microLearning}</S.SectionContent>
          </S.Section>
          <S.Section id='try-this-section'>
            <S.SectionTitle>✨ Try This</S.SectionTitle>
            <S.SectionContent>{tryThis}</S.SectionContent>
          </S.Section>
          <S.Section>
            <S.SectionTitle>🧘 Grounding Exercise</S.SectionTitle>
            <S.SectionContent>{grounding}</S.SectionContent>
          </S.Section>
          <S.Section>
            <S.SectionTitle>📝 Reflection</S.SectionTitle>
            <S.SectionContent>{reflectionPrompt}</S.SectionContent>
            <S.ReflectionInput placeholder='Take your time... your thoughts are safe here' />
          </S.Section>
          <S.SocialHook>{socialHook}</S.SocialHook>
          <S.CompleteButton onClick={closeButton}>
            {loading ? 'Saving' : 'Complete Day'}
          </S.CompleteButton>
        </S.ModalContent>
      </S.ModalContainer>
    </S.Modal>
  );
};

export default Modal;
