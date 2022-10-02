import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

import logo from "../logo.svg";

import { routes } from "./routes";
import { NavItemList } from "./components/NavItemList";

/**
 * *Descripción de los componentes usados en este archivo
 *
 * *<Link />:
 * Se usa para hacer una navegación tal cual lo haría un tag <a></a> con un href
 *
 * *<NavLink />:
 * Mismo funcionamiento que <Link />
 * Devuelve la ruta de acuerdo al path actual y así poner una clase al html de activo o no
 *
 * *<Navigate to="<path_de_la_ruta>" replace />
 * Redireciona a cualquier ruta de la App
 * @to path de la ruta donde va a redireccionar
 * @replace permite evitar que se pueda volver atrás en el navegador
 *
 */

export const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />
                        {/* TODO: crear navlink dinámicos */}
                        <ul>
                            {
                                routes.map(( route ) => 
                                    <NavItemList key={ route.to } { ...route } />
                                )
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(({ path, Component }) => (
                                <Route
                                    key={path}
                                    path={path}
                                    element={<Component />}
                                />
                            ))
                        }

                        {/* Cualquier ruta que no exista se redirige */}
                        <Route
                            path="/*"
                            element={
                                <Navigate 
                                    to={routes[0].to} 
                                    replace 
                                />
                            }
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
};
