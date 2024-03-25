import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import { NavBar } from "./componentes/NavBar"
import { Header } from "./componentes/Header"
import { About } from "./componentes/About"
import { FundamentosProgramacion } from "./componentes/Fundamentos_programacion/FundamentosProgramacion"
import { MatematicasDiscretas } from "./componentes/MatematicasDiscretas/MatematicasDiscretas"
import { FundamentosProvider } from "./Contexto/FundamentosContext"



function App() {
    return (
        <BrowserRouter>
          <Header/ >
          <NavBar/ >
            <FundamentosProvider>
              <Routes>
                <Route exact path="/About" element={<About />} />
                <Route exact path="Ingenieria en sistemas/fundamentos de programacion" element={<FundamentosProgramacion/>} />
                <Route exact path="Ingenieria en sistemas/matematicas discretas" element={<MatematicasDiscretas />} />
              </Routes>
            </FundamentosProvider>
        </BrowserRouter>
    )
}

export default App
