import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./router";
import theme from "assets/styles/theme";
const queryClient = new QueryClient();
function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
