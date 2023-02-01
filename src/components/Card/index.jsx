import "./style.css";

const Card = ({ products, product, cartList, setCartList, setToast }) => {
  function addToCart(productId) {
    const selectedProduct = products.find((prod) => prod.id === productId);

    const alreadyExist = cartList.find((prod) => prod.id === productId);

    if (alreadyExist) {
      setToast(true);

      setTimeout(() => setToast(false), 2000);
    } else {
      setCartList((shopList) => [
        ...shopList,
        {
          id: selectedProduct.id,
          category: selectedProduct.category,
          img: selectedProduct.img,
          name: selectedProduct.name,
          price: selectedProduct.price,
        },
      ]);
    }
  }

  return (
    <li key={product.id} className="productCard">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <span>{product.category}</span>
      <p>R$ {product.price}</p>
      <button onClick={() => addToCart(product.id)}>Adicionar</button>
    </li>
  );
};

export default Card;
