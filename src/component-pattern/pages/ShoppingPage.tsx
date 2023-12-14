import { useState } from "react";
import {
    ProductButton,
    ProductCard,
    ProductImage,
    ProductTitle,
} from "../components";
import { Product } from "../interfaces/interface";

import "../styles/custom-styles.css";

const product1 = {
    id: "1",
    title: "coffe mug - Card",
    img: "./coffee-mug.png",
};
const product2 = {
    id: "2",
    title: "coffe mug - Card",
    img: "./coffee-mug2.png",
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
    count: number;
}

export const ShoppingPage = () => {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
    }>({});

    const onProductCountChange = ({
        count,
        product,
    }: {
        count: number;
        product: Product;
    }) => {
        setShoppingCart((oldShoppingCart) => {
            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;

                return rest;
            }

            return {
                ...oldShoppingCart,
                [product.id]: {
                    ...product,
                    count,
                },
            };
        });
    };

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
