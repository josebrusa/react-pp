import {
    ProductButton,
    ProductCard,
    ProductImage,
    ProductTitle,
} from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

import "../styles/custom-styles.css";

export const ShoppingPage = () => {
    const { onProductCountChange, shoppingCart } = useShoppingCart();
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                }}
            >
                {products.map((product) => (
                    <ProductCard
                        product={product}
                        key={product.id}
                        className="bg-dark text-white"
                        onChange={onProductCountChange}
                        value={shoppingCart[product.id]?.count || 0}
                    >
                        <ProductImage
                            className="custom-image"
                            style={{
                                boxShadow: "0px 7px 10px 0px rgba(0,0,0,0.3) ",
                            }}
                        />
                        <ProductTitle className="text-white" />
                        <ProductButton className="custom-buttons" />
                    </ProductCard>
                ))}
            </div>
            <div className="shopping-cart">
                {Object.entries(shoppingCart).map(([key, product]) => (
                    <ProductCard
                        key={key}
                        product={product}
                        className="bg-dark text-white"
                        style={{ width: "100px" }}
                        onChange={onProductCountChange}
                        value={product.count}
                    >
                        <ProductImage
                            className="custom-image"
                            style={{
                                boxShadow: "0px 7px 10px 0px rgba(0,0,0,0.3) ",
                            }}
                        />
                        <ProductButton
                            className="custom-buttons"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        />
                    </ProductCard>
                ))}
            </div>
        </div>
    );
};

export default ShoppingPage;
