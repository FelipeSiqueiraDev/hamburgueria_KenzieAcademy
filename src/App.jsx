import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((resp) => resp.json())
      .then((json) => setProducts(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header
        products={products}
        setFilteredProducts={setFilteredProducts}
        toast={toast}
        setToast={setToast}
      />
      <div className="mainContent">
        <ProductsList
          products={products}
          cartList={cartList}
          setCartList={setCartList}
          filteredProducts={filteredProducts}
          toast={toast}
          setToast={setToast}
        />
        <Cart cartList={cartList} setCartList={setCartList} />
      </div>
    </div>
  );
}

export default App;
