import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // Import for styling

// ✅ Problem 1: Filter and Highlight Numbers
const FilterNumbers = () => {
  const [numbers, setNumbers] = useState([10, 15, 20, 25, 30]);
  const [filtered, setFiltered] = useState(false);

  const filterEvenNumbers = () => {
    setFiltered(true);
  };

  return (
    <div className="section">
      <h2>Filter and Highlight Numbers</h2>
      <ul>
        {numbers.map((num, index) => (
          <li
            key={index}
            className={filtered && num % 2 === 0 ? "highlight" : ""}
          >
            {num}
          </li>
        ))}
      </ul>
      <button onClick={filterEvenNumbers}>Filter Even Numbers</button>
    </div>
  );
};

// ✅ Problem 2: Group Products by Category
const GroupProducts = () => {
  const [products] = useState([
    { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
    { id: 2, name: "Shirt", price: 50, category: "Clothing" },
    { id: 3, name: "Phone", price: 800, category: "Electronics" },
    { id: 4, name: "Jeans", price: 60, category: "Clothing" },
  ]);

  const groupedProducts = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="section">
      <h2>Group Products by Category</h2>
      {Object.keys(groupedProducts).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {groupedProducts[category].map((product) => (
              <li key={product.id}>{product.name} - ${product.price}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// ✅ Problem 3: Filter and Sort Products
const FilterSortProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 30 },
    { id: 3, name: "Product C", price: 75 },
    { id: 4, name: "Product D", price: 45 },
  ]);

  const sortProducts = () => {
    setProducts([...products].sort((a, b) => a.price - b.price));
  };

  const filterBelow50 = () => {
    setProducts(products.filter((product) => product.price < 50));
  };

  return (
    <div className="section">
      <h2>Filter and Sort Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
      <button onClick={sortProducts}>Sort by Price</button>
      <button onClick={filterBelow50}>Filter Below $50</button>
    </div>
  );
};

// ✅ Main App Component
const App = () => {
  return (
    <div className="app">
      <FilterNumbers />
      <GroupProducts />
      <FilterSortProducts />
    </div>
  );
};

// ✅ Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// ✅ CSS Styling (styles.css)
/*
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
}

.section {
  border: 2px solid #333;
  padding: 20px;
  background-color: #f9f9f9;
  width: 350px;
  text-align: center;
  border-radius: 8px;
}

button {
  margin: 10px;
  padding: 8px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 18px;
  margin: 5px 0;
}

.highlight {
  font-weight: bold;
  color: green;
}
*/
