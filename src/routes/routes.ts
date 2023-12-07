import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    to: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const ShoppingPage = lazy(
    () =>
        import(
            /* webpackChunkName: 'ShoppingPage'*/ "../component-pattern/pages/ShoppingPage"
        )
);
const Lazy2 = lazy(
    () =>
        import(/* webpackChunkName: 'LazyPage2'*/ "../lazyload/pages/LazyPage2")
);
const Lazy3 = lazy(
    () =>
        import(/* webpackChunkName: 'LazyPage3'*/ "../lazyload/pages/LazyPage3")
);

export const routes: Route[] = [
    {
        to: "/Shopping",
        path: "Shopping",
        Component: ShoppingPage,
        name: "Shopping-store",
    },
    {
        to: "/lazy2",
        path: "lazy2",
        Component: Lazy2,
        name: "lazy-2",
    },
    {
        to: "/lazy3",
        path: "lazy3",
        Component: Lazy3,
        name: "lazy-3",
    },
];
