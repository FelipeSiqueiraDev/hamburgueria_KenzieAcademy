import CartItem from "../CartItem";
import FinalValue from "../FinalValue";
import "./style.css";

const Cart = ({ cartList, setCartList }) => {
  return (
    <div className="cartBox">
      <div className="cartHeader">
        <h3>Carrinho de compras</h3>
      </div>
      {cartList.length ? (
        <div>
          <ul>
            {cartList.map((item) => {
              return (
                <CartItem
                  item={item}
                  cartList={cartList}
                  setCartList={setCartList}
                />
              );
            })}
          </ul>
          <FinalValue cartList={cartList} setCartList={setCartList} />
        </div>
      ) : (
        <div className="cartInfo">
          <h4>Sua sacola está vazia</h4>
          <p>Adicione itens</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
