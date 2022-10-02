import { NavLink } from "react-router-dom";

export const NavItemList = ({ to = '',  name = ''}) => {
    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? "nav-active" : ""
                }
            >
                {name}
            </NavLink>
        </li>
    )
}
