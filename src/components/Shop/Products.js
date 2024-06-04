import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Car",
    price: 50000,
    description: "This is a car.",
  },
  {
    id: "p2",
    title: "Bus",
    price: 10000,
    description: "This is a bus.",
  },
  {
    id: "p3",
    title: "Van",
    price: 70000,
    description: "This is a van.",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
