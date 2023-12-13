import {
    ProductButton,
    ProductCard,
    ProductImage,
    ProductTitle,
} from "../components";

import "../styles/custom-styles.css";

const product = {
    id: "1",
    title: "coffe mug - Card",
    img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage Store</h1>
            <hr />
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                }}
            >
                <ProductCard product={product} className="bg-dark text-white">
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-white" />
                    <ProductCard.Button className="custom-buttons" />
                </ProductCard>
                <ProductCard product={product} className="bg-dark text-white">
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-white" />
                    <ProductButton className="custom-buttons" />
                </ProductCard>
            </div>
        </div>
    );
};

export default ShoppingPage;
