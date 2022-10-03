import { lazy, Suspense } from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages"

/**
 * * Nota <Navigate />:
 * @path cuando es igual a "*" significa que es la ruta por defecto inicial cuando se carga todo el componente
 * 
 */

const Lazy2 = lazy(() => import(/*webpackChunkName: "lazyPage2"*/'../pages/LazyPage2'))

export const LazyLayout = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <div>
                <h1>LazyLayout Page</h1>
                {/* Rutas hijas irán aquí */}

                <hr />
                <ul>
                    <li>
                        <NavLink to="lazy1">Lazy1</NavLink>
                    </li>
                    <li>
                        <NavLink to="lazy2">Lazy2</NavLink>
                    </li>
                    <li>
                        <NavLink to="lazy3">Lazy3</NavLink>
                    </li>
                </ul>

                <Routes>
                    <Route path="lazy1" element={<LazyPage1 />} />
                    <Route path="lazy2" element={<Lazy2 />} />
                    <Route path="lazy3" element={<LazyPage3 />} />

                    {/* <Route path="*" element={ <div>Not Found</div> }/> */}
                    <Route path="*" element={<Navigate to="lazy1" replace />} />
                </Routes>
            </div>
        </Suspense>
    )
}

export default LazyLayout
