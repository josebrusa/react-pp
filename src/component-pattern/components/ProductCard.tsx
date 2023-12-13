import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import { CSSProperties, ReactElement, createContext } from "react";
import { ProductContextProps, Product } from "../interfaces/interface";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
    style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
    const { counter, increaseBy } = useProduct();
    return (
        <Provider
            value={{
                counter,
                product,
                increaseBy,
            }}
        >
            <div style={style} className={`${styles.productCard} ${className}`}>
                {children}
            </div>
        </Provider>
    );
};
