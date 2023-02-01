import "./style.css";

const CartItem = ({ item, cartList, setCartList }) => {
  function removeItem(itemId) {
    const removedProduct = cartList.filter((item) => item.id !== itemId);

    setCartList(removedProduct);
  }
  return (
    <div>
      <li key={item.id} className="itemCard">
        <div>
          <img src={item.img} alt="" />
          <div className="itemInfo">
            <h3>{item.name}</h3>
            <span>{item.category}</span>
          </div>
        </div>
        <p onClick={() => removeItem(item.id)}>Remover</p>
      </li>
    </div>
  );
};

export default CartItem;
