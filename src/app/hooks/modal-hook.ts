import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { validateDaySelection } from '../utils/modal-util';
import { toast } from 'sonner';
type ModalActions = {
  openModal: (selectedDay: number) => void;
  closeModal: () => void;
  onCompletedDay: (completedDay: number) => void;
  completedCard: (day: number) => boolean;
};
type ModalProps = {
  isOpen: boolean;
  selectedDay: number;
  completedDay: number;
  actions: ModalActions;
};

const useModal = create<ModalProps>()(
  persist(
    (set, get) => ({
      isOpen: false,
      selectedDay: 0,
      completedDay: 0,
      actions: {
        openModal: (selectedDay): void => {
          const { completedDay } = get();
          const { isValid, message } = validateDaySelection(selectedDay, completedDay);
          if (!isValid) {
            toast.error(message ?? 'Invalid day selection', {
              style: { background: '#ff4d4f', color: '#fff' },
            });
            return;
          }
          set((state) => ({ ...state, selectedDay, isOpen: true }));
        },
        closeModal: (): void => {
          set((state) => ({ ...state, isOpen: false }));
        },
        onCompletedDay: (completedDay: number): void => {
          set((state) => ({ ...state, completedDay, isOpen: false }));
        },
        completedCard: (day: number): boolean => {
          return day <= get().completedDay;
        },
      },
    }),
    {
      name: 'modal-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        isOpen: state.isOpen,
        selectedDay: state.selectedDay,
        completedDay: state.completedDay,
      }),
    }
  )
);

export const useModalOpen = (): boolean => useModal((state) => state.isOpen);
export const useModalSelectedDay = (): number => useModal((state) => state.selectedDay);
export const useModalCompletedDay = (): number => useModal((state) => state.completedDay);
export const useModalActions = (): ModalActions => useModal((state) => state.actions);
export const useHasHydrated = (): boolean => useModal.persist.hasHydrated();
