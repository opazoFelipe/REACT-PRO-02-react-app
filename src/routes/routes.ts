import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
// import { LazyLayout } from '../01-lazyload/layout/LazyLayout'
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element

/**
 * *interface Route
 * @to must be unique value
 * @path must be unique value
 * @name must be unique value
 */
interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

/**
 * *Cambiar nombre de los chunks 
 * Se debe declarar un comentario dentro de la función lazy() de la siguiente manera: 
 * webpackChunkName: "LazyPage1
 * *Nota: En cra es así, pero en vite ni idea por el momento
 */

/**
 * *Nota: 
 * Todos los componentes a cargarse de manera lazy deben tener la instrucción export default nombre_del_componente para que react no arroje errores
 */

/**
 * * Rutas Anidadas con lazy load
 * Las rutas anidadas tratan sobre un router que tiene otro router con rutas hijas, se deben seguir unas cuantas reglas para definir rutas anidas donde está involucrado el lazy load 
 * 
 * * React Router Dom v5
 * !Esta nota sobre react router 5 no es 100% segura
 * Son del formato /lazyload donde /lazyload sería el router principal y todo lo que venga después del slash sería el segundo router con las rutas anidadas
 * @path basta entonces con definir el router principal "/lazyload"
 * @to basta con definir el nombre de la ruta "lazyload"
 * 
 * * React Router Dom v6
 * Al igual que v5 son del formato /api pero deben llevar el comodín de la siguiente forma /api/*
 * @path path de la ruta "/lazyload/*"
 * @to deben llevar slash al inicio y al final "/lazyload/"
 */

const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'))

const lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'))

const lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'))

export const routes: Route[] = [
    {
        to: '/lazyLoad/',
        path: '/lazyLoad/*',
        Component: LazyLayout,
        name: 'LazyLayout-dash' 
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy' 
    },
]
