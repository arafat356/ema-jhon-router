import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Invertory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Shop></Shop>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/review" element={<OrderReview></OrderReview>}></Route>
          <Route path="/inventory" element={<Inventory></Inventory>}></Route>
          <Route path="/placeorder" element={<PlaceOrder></PlaceOrder>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
