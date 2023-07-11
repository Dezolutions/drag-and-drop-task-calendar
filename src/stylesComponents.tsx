import {css} from '@emotion/react';

export const headerStyle = css({
  backgroundColor: 'orange',
});

export const headerContentStyle = css({
  color: 'white',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  alignItems: 'baseline',

});

export const headerTitleStyle = css({
  fontSize: '20px',
  lineHeight: '20px',
  margin: '0',
});
export const headerLeftStyle = css({
  display: 'flex',
  alignItems: 'baseline',
  flexDirection: 'column',
  gap: '2px',
  padding: '6px 0',
});

export const headerCenterStyle = css({
  justifySelf: 'center',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 6fr',
  alignItems: 'center',
  alignSelf: 'center',
  gap: '10px',
});

export const headerRightStyle = css({
  justifySelf: 'end',
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'center',
  gap: '10px',
});

export const downloadBtnStyle = css({
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  color: 'white',
  fontSize: '15px',
  lineHeight: '13px',
  textDecoration: 'underline',
  transition: 'all .2s ease',
  '&:hover': {
    color: 'black',
  }
});

export const switchMonthBtnStyle = css({
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  color: 'white',
  fontSize: '18px',
  lineHeight: '13px',
  '&:hover': {
    color: 'black',
  }
});
export const containerStyle = css({
  padding: '0 20px',
});
export const gridStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '3px',
})

export const mainStyle = css({
  display: 'grid',
  gridTemplateColumns: '265px 4fr',
});

export const dayStyle = (isCurrentDay: boolean, isPreviousMonthDay: boolean) => css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  background-color: ${isCurrentDay ? 'rgb(249, 186, 70, 0.5)' : isPreviousMonthDay ? '#fafafa' : '#E2E6E9' };
  cursor: pointer;
  border-radius: 3px;
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

//MODAL
export const modalStyle = css({
  position: 'relative',
  backgroundColor: 'white',
  width: '400px',
  height: 'auto',
  zIndex: 100,
  boxSizing: 'border-box',
  padding: '20px',
  borderRadius: '3px',
  boxShadow: '0px 0px 85px -28px rgba(0,0,0,0.75)',
});
export const modalLabelsInputStyle = css({
  width: '100%',
  height: '38px',
  outline: 'none',
  display: 'flex',
  gap: '5px',
  flexWrap: 'wrap',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
  padding: '5px',
  borderRadius: '3px',
});
export const modalInputStyle = css({
  width: '100%',
  height: '30px',
  margin: '20px 0 10px',
  boxSizing: 'border-box',
  padding: '5px',
  border: 'none',
  borderBottom: '1px solid #ccc',
  fontSize: '20px',
  outline: 'none',
});

export const LabelsPlaceholderStyle = css({
  color: '#ccc',
  fontSize: '14px',
  margin: '5px 0',
  fontWeight: 'normal',
});
export const modalDateStyle = css({
  margin: '10px 0',
  display: 'flex',
  gap: '5px',
  alignItems: 'top',
});
export const modalLabelBlockStyle = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '5px',
  margin: '10px 0 10px 30px',
});
export const modalLabelsStyle = css({
  display: 'flex',
  gap: '5px',
});

export const modalLabelStyle = (bgColor: string) => css`
  cursor: pointer;
  font-size: 12px;
  background-color: rgb(${bgColor});
  padding: 5px;
  outline: none;
  border: none;
  border-radius: 3px;
  height: 100%;
  color: white;
  transition: all .2s ease;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const addedLabelStyle = (bgColor:string) => css`
  display: flex;
  background-color: rgb(${bgColor});
  align-items: center;
  gap: 3px;
  border-radius: 3px;
  color: white;
  font-size: 12px;
  padding: 5px;
`;
export const addedLabelBtnStyle = css({
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  outline: 'none',
  padding: '0',
  margin: '0',
  height: '12px',
  color: 'white',
})
export const mainBtnStyle = css({
  width: '100%',
  height: '30px',
  backgroundColor: 'orange',
  border: 'none',
  borderRadius: '3px',
  color: 'white',
  cursor: 'pointer',
  outline: 'none',
  transition: 'all .2s ease',
  '&:hover': {
    opacity: 0.8,
  }
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

//Tasks
export const tasksBlockStyle = css({
  width: '100%',
  marginTop: '15px',

});
export const taskStyle = (color: string) => css`
  display: flex;
  align-items: center;
  margin: 1px 0;
  gap: 5px;
  font-size: 11px;
  width: 100%;
  background-color: rgba(${color}, 0.6);
  color: white;
  padding-left: 5px;
  box-sizing: border-box;
  border-radius: 3px;
  trasnistion: all .2s ease;
  &:hover {
    background-color: rgba(${color}, 1);
  }
`;

export const moreTasksMessageStyle = css({
  fontSize: '10px',
  margin: '5px 0 0 5px',
  color: 'darkBlue',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  }
});
//SIDEBAR
export const sidebarStyle = css({
  padding: '20px 10px 0 0',

});

export const sidebarLabelBlockStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  marginBottom: '20px',
});

export const sidebarLabelStyle =(readonly: boolean) => css`
  display: grid;
  grid-template-columns: ${readonly ? '20px 4fr 1fr' : '20px 3fr 1fr 1fr'};
  gap: 5px;
  margin: 5px 0;
  padding: 2px;
  border-radius: 3px;
  background-color: ${readonly ? 'transparent' : 'rgb(249, 186, 70, 0.5)'};
  &:hover {
    background-color: rgb(249, 186, 70, 0.5);
  }
`;
export const labelModalColorStyle = css({
  border: 'none',
  outline: 'none',
  background: 'transparent',
  width: '25px',
  height: '25px',
  borderRadius: '3px',
  cursor: 'pointer',
})
//Search

export const searchInputStyle = css({
  width: '100%',
  height: '30px',
  margin: '5px 0 15px',
  boxSizing: 'border-box',
  padding: '15px 5px',
  borderRadius: '3px',
  border: '1px solid #ccc',
  fontSize: '16px',
  outline: 'none',
});
export const sidebarLabelColorItemStyle = (readOnly: boolean) => css`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: none;
  outline: none;
  cursor: ${readOnly ? 'auto' : 'pointer'};

  background-color: transparent;
  `;
export const editBtnStyle = css({
  alignSelf: 'center',
  justifySelf: 'end',
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  margin: '0',
  height: '16px',
  marginRight: '5px',
})
export const sidebarLabelInputStyle = css({
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  fontSize: '15px',
  width: '160px'
});