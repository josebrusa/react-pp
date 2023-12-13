import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import { ReactElement, createContext } from "react";
import { ProductContextProps, Product } from "../interfaces/interface";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
}

export const ProductCard = ({ children, product, className }: Props) => {
    const { counter, increaseBy } = useProduct();
    return (
        <Provider
            value={{
                counter,
                product,
                increaseBy,
            }}
        >
            <div className={`${styles.productCard} ${className}`}>
                {children}
            </div>
        </Provider>
    );
};
