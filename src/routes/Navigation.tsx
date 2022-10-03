import { Suspense } from 'react'
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
 * *<Suspense fallback={null}></Suspense>
 * Es requerido si se usa la carga lazy
 * Permite hacer tareas mientras se realiza la carga de los componentes lazy
 * La primera vez que se cargan los chunks de los componentes se puede apreciar un flash en la ventana pero luego estos pasan a memoria y dicho efecto desaparece
 * @fallback permite mostrar un componente o elemento mientras se realiza la carga del componente lazy. Si el valor es null entonces no muestra nada, pero por ejemplo se podría mostrar un mensaje de loading como el siguiente: <span>Loading...</span>
 * 
 */

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
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
        </Suspense>
    );
};
