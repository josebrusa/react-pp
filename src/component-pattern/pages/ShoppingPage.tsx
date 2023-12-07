import {
    ProductButton,
    ProductCard,
    ProductImage,
    ProductTitle,
} from "../components";

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
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={"Hola Mundo"} />
                    <ProductCard.Button />
                </ProductCard>
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButton />
                </ProductCard>
            </div>
        </div>
    );
};

export default ShoppingPage;
