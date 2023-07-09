import {css} from '@emotion/react';

export const headerStyle = css({
  color: 'white',
  display: 'flex',
  alignItems: 'baseline',
  backgroundColor: 'orange',
  paddingBottom: '20px',
});

export const gridStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '3px',
})

export const mainStyle = css({
  display: 'grid',
  gridTemplateColumns: '1fr 4fr',
});

export const dayStyle = (isCurrentDay: boolean, isPreviousMonthDay: boolean) => css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: ${isCurrentDay ? 'rgb(249, 186, 70)' : isPreviousMonthDay ? '#fafafa' : '#E2E6E9' };
  cursor: pointer;
  transition: all .2s ease;
  color: ${isCurrentDay ? 'white' : isPreviousMonthDay ? '#b8b8b8' : 'black' };
  &:hover {
    background-color: #eee;
  }`;

export const dayNumberStyle = css({
  position: 'absolute',
  top: '1px',
  right: '2px',
});

export const weekDayStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'uppercase',
  height: '30px',
  backgroundColor: '#b8b8b8',
  marginBottom: '3px',
});

export const modalStyle = css({
  position: 'relative',
  backgroundColor: 'white',
  width: '400px',
  height: '300px',
  zIndex: 100,
  boxShadow: '0px 0px 85px -28px rgba(0,0,0,0.75)',
});

export const modalBtnCloseStyle = css({
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
  border: 'none',
  backgroundColor: 'transparent',
  outline: 'none',
});

export const modalWrapperStyle = css({
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: 0,
  left: 0,
  zIndex: 99,
});