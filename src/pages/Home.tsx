import { Header } from "../components/Header";
import { HomeContainer } from "../components/Home/styles";
import { Perfil } from "../components/Perfil";
import { Projects } from "../components/Projects";
import { Tecnologies } from "../components/Tecnologies";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Perfil />
      <Tecnologies />
      <Projects />
    </HomeContainer>
  )
}