import "./style.css";

const FinalValue = ({ cartList, setCartList }) => {
  function removeAll() {
    setCartList([]);
  }

  function setTotalValue() {
    const totalValue = cartList.reduce((total, product) => {
      return total + product.price;
    }, 0);

    return totalValue.toFixed(2);
  }

  return (
    <div className="totalValue">
      <div>
        <p>Total</p>
        <span>R$ {setTotalValue()}</span>
      </div>

      <button type="button" onClick={() => removeAll()}>
        Remover todos
      </button>
    </div>
  );
};

export default FinalValue;
