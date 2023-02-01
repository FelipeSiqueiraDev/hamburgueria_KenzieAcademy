import { useState } from "react";
import "./style.css";

const Header = ({ products, setFilteredProducts, toast, setToast }) => {
  const [searchText, setSearchText] = useState("");

  function handleFilter(event) {
    event.preventDefault();

    const sanduiches = products.filter(
      (product) => product.category === "Sanduíches"
    );

    const bebidas = products.filter(
      (product) => product.category === "Bebidas"
    );

    if (searchText.toLowerCase() === "bebidas") {
      setFilteredProducts(bebidas);
    } else if (
      searchText.toLowerCase() === "sanduiches" ||
      searchText.toLowerCase() === "sanduíches"
    ) {
      setFilteredProducts(sanduiches);
    } else if (searchText.toLowerCase === "" || "todos") {
      setFilteredProducts([]);
    }

    setSearchText("");
  }

  return (
    <div className="headerBox">
      <div className="title">
        <h1>Burguer</h1> <h2>Kenzie</h2>
      </div>
      <form onSubmit={handleFilter} className="search">
        <input
          type="text"
          value={searchText}
          placeholder="Pesquisar por"
          onChange={(event) => setSearchText(event.target.value)}
        ></input>
        <button type="submit">Pesquisar</button>
      </form>
    </div>
  );
};

export default Header;
