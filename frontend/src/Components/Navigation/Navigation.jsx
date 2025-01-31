import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from "./Navigation.module.css";

const NavLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active)

export default function Navigation() {
    return (
        <header>
            <nav>
                <NavLink to="/" className={({ isActive }) => NavLinkClass({ isActive })}>Home Page</NavLink>
                <NavLink to="/movies" className={({ isActive }) => NavLinkClass({ isActive })}>Movies List</NavLink>
            </nav>
        </header>
    );
}