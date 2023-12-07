import {
    ProductButton,
    ProductCard,
    ProductImage,
    ProductTilte,
} from "../components/ProductCard";

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
                    <ProductImage />
                    <ProductTilte title={""} />
                    <ProductButton
                        increaseBy={function (value: number): void {
                            throw new Error("Function not implemented.");
                        }}
                        counter={0}
                    />
                </ProductCard>
            </div>
        </div>
    );
};

export default ShoppingPage;
