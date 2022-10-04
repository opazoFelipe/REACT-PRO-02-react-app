import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

/**
 * * En Javascript todo es un objeto menos los primitivos
 * 
 * La funcion Object.assign( ProductCardHOC, { keys } ) permite expandir las propiedades de un objeto y se utiliza en instancias como aqui donde al ProductCardHOC no se le pueden agregar atributos de la siguiente manera
 * 
 * ProductCardHOC.nuevaPropiedad
 * 
 */

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

/**
 * * De esta manera permite que <ProductCard /> tenga relacion directa con sus hijos
 * 
 * * Para llamar el componente afuera es de la siguiente manera:
 * 
 *  <ProductCard product={ product }>
        <ProductCard.Image />
        <ProductCard.Title title="Hola Mundo" />
        <ProductCard.Buttons /> 
    </ProductCard>
 * 
 *
 * * Como los componentes hijos se están exportando (desde sus respectivos archivos) también se podrían definir afuera de la siguiente manera:
 *    
 * <ProductCard product={ product }>
        <ProductImage />
        <ProductTitle />
        <ProductButtons /> 
    </ProductCard>
 * 
 */


export default ProductCard