import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Steps from "./components/Steps/Steps";
import Footer from "./components/Footer/Footer";
import Classes from "./components/Classes/Classes";
import About from "./components/About/About";
import Testemonials from "./components/Testemonials/Testemonial";
import PicturesGrid from "./components/PicturesGrid/PicturesGrid";
import PricingTag from "./components/PricingTag/PricingTag";
import PriceTable from "./components/PriceTable/PriceTable";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Steps />
      <PicturesGrid />
      <Classes />
      <About />
      {/* <PricingTag /> */}
      <PriceTable />
      <Testemonials />
      <Footer />
    </div>
  );
}

export default App;
