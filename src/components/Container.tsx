import React, { ReactNode } from 'react'
import { containerStyle } from '../stylesComponents'

const Container: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div css={containerStyle}>{children}</div>
  )
}

export default Container