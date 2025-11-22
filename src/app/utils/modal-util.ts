export const validateDaySelection = (
  selectedDay: number,
  completedDay: number
): {
  isValid: boolean;
  message?: string;
} => {
  if (selectedDay <= completedDay) {
    return {
      isValid: false,
      message: `Day ${selectedDay} is already completed`,
    };
  }

  if (selectedDay > completedDay + 1) {
    return {
      isValid: false,
      message: `Cannot skip to day ${selectedDay}. Complete day ${completedDay + 1} first.`,
    };
  }

  return { isValid: true };
};
