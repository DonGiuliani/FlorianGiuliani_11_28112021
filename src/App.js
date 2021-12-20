import { Switch, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import Accueil from "./pages/Accueil/Accueil";
import APropos from "./pages/aPropos/aPropos";
import Logement from "./pages/Logement/Logement";
import Erreur404 from "./pages/Erreur404/Erreur404"

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Banner />
      </header>
      <Switch>
        <Route path="/logement/:id" component={Logement} />
        <Route path="/a-propos" component={APropos} />
        <Route exact path="/" component={Accueil} />
        <Route component={Erreur404} />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;