import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import MainMavigation from "./components/main-navigation/MainMavigation";


function App() {
  return (
    <div className="atrix">
      <Header />

      <div className="main__content">

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </div>
      <MainMavigation />
      <Footer />

    </div>
  );
}

export default App;
