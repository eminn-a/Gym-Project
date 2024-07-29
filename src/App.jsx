import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Steps from "./components/Steps/Steps";
import Footer from "./components/Footer/Footer";
import Classes from "./components/Classes/Classes";
import About from "./components/About/About";
import Testemonials from "./components/Testemonials/Testemonial";
import PicturesGrid from "./components/PicturesGrid/PicturesGrid";
import PriceTable from "./components/PriceTable/PriceTable";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Hero />
        <Steps />
        <PicturesGrid />
        <Classes />
        <About />
        <PriceTable />
        <Testemonials />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
