import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import { createContext } from "react";
import { ProductContextProps, ProductCardProps } from "../interfaces/interface";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct();
    return (
        <Provider
            value={{
                counter,
                product,
                increaseBy,
            }}
        >
            <div className={styles.productCard}>{children}</div>
        </Provider>
    );
};
