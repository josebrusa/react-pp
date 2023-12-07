import { ProductCardHOCProps } from "../interfaces/interface";
import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButton } from "./ProuctButtons";

// export { ProductCard } from "./ProductCard";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
export { ProductButton } from "./ProuctButtons";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Button: ProductButton,
});

export default ProductCard;
