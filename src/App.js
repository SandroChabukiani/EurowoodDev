import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Footer from "./components/footer";
import Main from "./pages/main";
import Catalog from "./pages/catalog/catalog";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import { AboutUs } from "./pages/AboutUs";
import Panel from "./pages/panel/panel";
import Header from './components/Header/Navbar';
import PlywoodTwo from "./pages/plywood/plywoodtwo";
import PlywoodOne from "./pages/plywood/plywoodone";
import PlywoodThree from "./pages/plywood/plywoodthree";
import Not from "./pages/notavaliable/not";
import LaminatedPlywood from "./pages/plywood/laminatedplywood";
import LaminatedFloor from "./pages/laminate/laminatedFloor";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/panel" element={<Panel />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/catalog/:id" element={<SingleProduct />} />
            <Route path="/sales/:id" element={<SingleProduct />} />
            <Route path="/catalog/ფანერა 1/2 ხარისხი" element={ <PlywoodOne /> }/>
            <Route path="/catalog/ფანერა 2/3 ხარისხი" element={ <PlywoodTwo /> }/>
            <Route path="/catalog/ფანერა 3/4 ხარისხი" element={ <PlywoodThree /> }/>
            <Route path="/catalog/ლამინატი" element={  <LaminatedFloor /> }/>
            <Route path="/catalog/ლამინირებული ფანერა" element={ <LaminatedPlywood /> }/>
            <Route path="/aboutus" element={ <AboutUs /> }/>
            <Route path="/catalog/პროდუქტი მალე დაემატება" element={ <Not /> } />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
