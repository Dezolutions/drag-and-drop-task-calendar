import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import { mainStyle } from "./stylesComponents";
import Container from "./components/Container";

const App : React.FC = () => {
  const handleFileRead = (event: any) => {
    const content = event.target.result;
    console.log('File content:', content);
  };
  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = handleFileRead;
      reader.readAsText(file);
    }
  };
  return (
    <div>
      {/* <input type="file" onChange={handleFileUpload} /> */}
      <Header/>
      <Container>
        <main css={mainStyle}>
          <Sidebar/>
          <Month/>
        </main>
      </Container>
    </div>
  )
}

export default App
