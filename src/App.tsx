import { useProducts } from "./hooks/useProducts";
import { useState, useEffect } from "react";
import ProductTable from "./components/ProductTable";
import type { Product } from "./types/product";

function App() {
  const { products, loading, error } = useProducts();
  const [localProducts, setLocalProducts] = useState<Product[]>(products);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [search, setSearch] = useState("");

  const handleAddProduct = () => {
    if (!title || !price) return;

    const newProduct = {
      id: Date.now(),
      title,
      price,
      category: "custom",
      rating: 0,
    };

    setLocalProducts([newProduct, ...localProducts]);

    setTitle("");
    setPrice("");
  };

  const filteredProducts = localProducts.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  useEffect(() => {
    setLocalProducts(products);
  }, [products]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <div className="section">
        <h2>Add Product</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <button onClick={handleAddProduct}>Add</button>
      </div>

      <div className="section">
        <input
          type="text"
          placeholder="Type here to search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h1>Product List</h1>

      <ProductTable products={paginatedProducts} />

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
