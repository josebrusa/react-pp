import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import { CSSProperties, ReactElement, createContext } from "react";
import {
    ProductContextProps,
    Product,
    onChangeArgs,
} from "../interfaces/interface";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const ProductCard = ({
    children,
    product,
    className,
    style,
    onChange,
    value,
}: Props) => {
    const { counter, increaseBy } = useProduct({ onChange, product, value });
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
