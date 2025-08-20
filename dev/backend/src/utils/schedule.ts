export const buildSchedule = (
  start: Date,
  duration: number
) => {
  const arr: { month: number; dueDate: Date; paid: boolean }[] = [];
  for (let i = 0; i < duration; i++) {
    const due = new Date(start);
    due.setMonth(start.getMonth() + i);
    arr.push({ month: i + 1, dueDate: due, paid: false });
  }
  return arr;
};


