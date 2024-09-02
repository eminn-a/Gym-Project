import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./context/authContext.jsx";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Toaster />
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
