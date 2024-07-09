import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Steps from "./components/Steps/Steps";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Steps />
      <Footer />
    </div>
  );
}

export default App;
