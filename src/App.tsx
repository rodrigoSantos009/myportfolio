import { GlobalStyle } from "../styles/styles"
import { Footer } from "./components/Footer"
import { ScrollButton } from "./components/ScrollButton";
import { Home } from "./pages/Home"


function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <Footer />
      <ScrollButton />
    </>
  );
}

export default App
