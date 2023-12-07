import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import NoImage from "../assets/no-image.jpg";
import { ReactElement, createContext, useContext } from "react";

interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
}

interface Product {
    id: string;
    title: string;
    img?: string;
}

interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: (value: number) => void;
}

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductImage = ({ img = "" }) => {
    const { product } = useContext(ProductContext);
    let imgToShow: string;
    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = NoImage;
    }
    return (
        <img
            className={styles.productImg}
            src={imgToShow}
            alt="Product Image"
        />
    );
};

export const ProductTitle = ({ title }: { title?: string }) => {
    const { product } = useContext(ProductContext);

    return (
        <span className={styles.productDescription}>
            {title ? title : product.title}
        </span>
    );
};

export const ProductButton = () => {
    const { counter, increaseBy } = useContext(ProductContext);
    return (
        <div className={styles.buttonsContainer}>
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            >
                -
            </button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
                +
            </button>
        </div>
    );
};

export const ProductCard = ({ children, product }: Props) => {
    const { counter, increaseBy } = useProduct();
    return (
        <Provider
            value={{
                counter,
                product,
                increaseBy,
            }}
        >
            <div className={styles.productCard}>
                {children}
                {/* <ProductImage img={product.img} />
        <ProductTilte title={product.title} />
    <ProductButton increaseBy={increaseBy} counter={counter} /> */}
            </div>
        </Provider>
    );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButton;
