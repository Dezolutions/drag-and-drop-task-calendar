import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  console.log(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, -1)).day();
  console.log(firstDayOfTheMonth);
  let currentMonthCount = 0 - firstDayOfTheMonth;

  const daysMatrix = new Array(5).fill([]).map(() => {

    return new Array(7).fill(null).map(() => {
      currentMonthCount++;

      return dayjs(new Date(year, month, currentMonthCount));
    });

  });

  return daysMatrix;
}