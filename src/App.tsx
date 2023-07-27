import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Calendar from "./components/Calendar";
import { mainStyle } from "./stylesComponents";
import Container from "./components/Container";
import { toJpeg } from "html-to-image";
import { useRef, useCallback } from "react";

const App : React.FC = () => {

  const ref = useRef<HTMLDivElement>(null);
  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toJpeg(ref?.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'calendar.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  return (
    <>
      <Header onClick={onButtonClick}/>
      <Container>
        <main css={mainStyle}>
          <Sidebar/>
          <Calendar refLink={ref}/>
        </main>
      </Container>
    </>
  )
}

export default App
