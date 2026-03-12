import type { Product } from "../types/product";

interface Props {
  products: Product[];
}

export default function ProductTable({ products }: Props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Rating</th>
        </tr>
      </thead>

      <tbody>
        {products.length === 0 ? (
          <tr>
            <td colSpan={5} style={{ textAlign: "center", padding: "20px" }}>
              No products found
            </td>
          </tr>
        ) : (
          products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td>{product.rating}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
