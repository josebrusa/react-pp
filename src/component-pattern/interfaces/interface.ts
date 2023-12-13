import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProdictImageProps } from "../components/ProductImage";
import { Props as ProducTitleProps } from "../components/ProductTitle";
import { Props as ProductButtonsProps } from "../components/ProuctButtons";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: (Props: ProducTitleProps) => JSX.Element;
    Image: (Props: ProdictImageProps) => JSX.Element;
    Button: (Props: ProductButtonsProps) => JSX.Element;
}
