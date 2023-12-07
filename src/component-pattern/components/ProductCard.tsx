import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import NoImage from "../assets/no-image.jpg";
import { ReactElement } from "react";

interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
}

interface Product {
    id: string;
    title: string;
    img?: string;
}

export const ProductImage = ({ img = "" }) => {
    return (
        <img
            className={styles.productImg}
            src={img ? img : NoImage}
            alt="Product Image"
        />
    );
};

export const ProductTilte = ({ title }: { title: string }) => {
    return <span className={styles.productDescription}>{title}</span>;
};

interface ProductButtonsProps {
    increaseBy: (value: number) => void;
    counter: number;
    maxCount?: number;
}

export const ProductButton = ({ counter, increaseBy }: ProductButtonsProps) => {
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
        <div className={styles.productCard}>
            {children}
            {/* <ProductImage img={product.img} />
        <ProductTilte title={product.title} />
        <ProductButton increaseBy={increaseBy} counter={counter} /> */}
        </div>
    );
};
