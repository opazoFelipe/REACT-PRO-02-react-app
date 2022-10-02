import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import logo from "../logo.svg";

import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'

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
                        <ul>
                            <li>
                                <NavLink
                                    to="/lazy1"
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/lazy2"
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : ""
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/lazy3"
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : ""
                                    }
                                >
                                    Users
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="lazy1" element={<LazyPage1 />} />
                        <Route path="lazy2" element={<LazyPage2 />} />
                        <Route path="lazy3" element={<LazyPage3 />} />

                        {/* Cualquier ruta que no exista se redirige */}
                        <Route
                            path="/*"
                            element={<Navigate to="/" replace />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
};
