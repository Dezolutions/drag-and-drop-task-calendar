import { gridStyle, weekDayStyle } from "../stylesComponents"

const DayNames = () => {
  return (
    <div css={gridStyle}>
      <div css={weekDayStyle}>Sun</div>
      <div css={weekDayStyle}>Mon</div>
      <div css={weekDayStyle}>Tue</div>
      <div css={weekDayStyle}>Wed</div>
      <div css={weekDayStyle}>Thu</div>
      <div css={weekDayStyle}>Fri</div>
      <div css={weekDayStyle}>Sat</div>
    </div>
  )
}

export default DayNames