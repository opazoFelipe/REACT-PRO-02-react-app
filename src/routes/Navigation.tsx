import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'

import logo from '../logo.svg'

/**
 * *Descripción de los componentes usados en este archivo
 * 
 * *<Link />: 
 * Se usa para hacer una navegacion tal cual lo haria un tag <a></a> con un href
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

                                <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="about" element={<h1>About Page</h1>} />
                        <Route path="users" element={<h1>Users Page</h1>} />
                        <Route path="home" element={<h1>Home Page</h1>} />

                        {/* Cualquier ruta que no exista se redirije */}
                        <Route path="/*" element={<Navigate to="/home" replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

