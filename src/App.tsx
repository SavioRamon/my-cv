import { Outlet } from "react-router-dom";
import { DefaultTheme } from "styled-components";
import { ThemeProvider } from "styled-components";
import { Container } from "./app.styles";
import { GlobalStyle } from "./globalStyle";
import { colors } from "./styles/colors";
import { metrics } from "./styles/metrics";

function App() {

  const theme: DefaultTheme = {
    ...colors,
    ...metrics
  };

  return (
    <ThemeProvider theme={ theme }>
      <Container>
        <GlobalStyle />
        
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
