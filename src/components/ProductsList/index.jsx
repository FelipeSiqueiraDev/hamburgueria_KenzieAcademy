import "./style.css";
import Card from "../Card";
import Toast from "../Toast";

const ProductsList = ({
  products,
  cartList,
  setCartList,
  filteredProducts,
  toast,
  setToast,
}) => {
  return (
    <>
      {toast ? <Toast /> : <div></div>}
      <ul className="productsShowCase">
        {filteredProducts.length !== 0
          ? filteredProducts.map((filteredProduct) => {
              return (
                <Card
                  products={products}
                  product={filteredProduct}
                  cartList={cartList}
                  setCartList={setCartList}
                />
              );
            })
          : products.map((product) => {
              return (
                <Card
                  products={products}
                  product={product}
                  cartList={cartList}
                  setCartList={setCartList}
                  setToast={setToast}
                />
              );
            })}
      </ul>
    </>
  );
};

export default ProductsList;
