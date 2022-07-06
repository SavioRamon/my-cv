import { Outlet } from "react-router-dom";
import { Container } from "./app.styles";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <Container>
      <GlobalStyle />
      
      <Outlet />
    </Container>
  );
}

export default App;
