import './App.css';
import LoginSignup from "./components/Login/LoginSignup"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginSignup />
      <Footer />
    </div>
  );
}

export default App;
