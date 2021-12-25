import { Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Accueil from "./pages/Accueil/Accueil";
import APropos from "./pages/aPropos/aPropos";
import Logement from "./pages/Logement/Logement";
import Erreur404 from "./pages/Erreur404/Erreur404";
// import Data from "../src/pages/Accueil/data.json"

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Banner />
      </header>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}