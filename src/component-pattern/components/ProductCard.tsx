import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import { CSSProperties, ReactElement, createContext } from "react";
import {
    ProductContextProps,
    Product,
    onChangeArgs,
    InitialValues,
    ProductCardHandlers,
} from "../interfaces/interface";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    product: Product;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({
    children,
    product,
    className,
    style,
    onChange,
    value,
    initialValues,
}: Props) => {
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
        useProduct({
            onChange,
            product,
            value,
            initialValues,
        });
    return (
        <Provider
            value={{
                counter,
                product,
                increaseBy,
                maxCount,
            }}
        >
            <div style={style} className={`${styles.productCard} ${className}`}>
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset,
                })}
            </div>
        </Provider>
    );
};
