import { NavLink } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../context/CartContext.jsx';
import { useContext, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import logotipoLight from '../../../public/logotipo-light.svg';
import logotipoDark from '../../../public/logotipo-dark.svg';

function Navbar() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    const htmlElement = document.querySelector('html');
    htmlElement.classList.toggle('dark');
  };

  const { count, toggleCheckoutSideMenu, setSearchByCategory } =
    useContext(ShoppingCartContext);

  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className="w-full flex bg-white dark:bg-[#3b3b3b]  justify-between items-center fixed z-10 py-5 px-8 text-sm font-light top-0">
      {/* Lista derecha */}
      <ul className="flex items-center gap-3">
        <li>{
          isDarkMode ? (<img className='w-8' src={logotipoDark} alt="logotipo" />) : (<img className='w-8' src={logotipoLight} alt="" />)
          }</li>
        <li className="font-semibold text-lg dark:text-[white]">
          <NavLink to="/">Shop</NavLink>
        </li>
        <li className="dark:text-[white]">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory()}
          >
            All
          </NavLink>
        </li>
        <li className="dark:text-[white]">
          <NavLink
            to="/furniture"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory('Furniture')}
          >
            Furnitures
          </NavLink>
        </li>
        <li className="dark:text-[white]">
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory('Electronics')}
          >
            Electronics
          </NavLink>
        </li>
        <li className="dark:text-[white]">
          <NavLink
            to="/shoes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory('Shoes')}
          >
            Shoes
          </NavLink>
        </li>
        <li className="dark:text-[white]">
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory('Others')}
          >
            Others
          </NavLink>
        </li>
      </ul>
      {/* Lista izquida */}
      <ul className="flex items-center gap-3">
        <li className="flex items-center justify-between">
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={30}
          />
        </li>
        <li className="dark:text-[white]">
          <NavLink to="/my-orders">My Orders</NavLink>
        </li>
        <li className="dark:text-[white]">
          <NavLink to="/my-account">My Account</NavLink>
        </li>
        <li className="dark:text-[white]">
          <NavLink to="/sign-in">Sign In</NavLink>
        </li>
        <li
          onClick={() => toggleCheckoutSideMenu()}
          className="flex items-center justify-between"
        >
          <ShoppingCartIcon className="h-6 w-6 text-black dark:text-[white]" />
          <span className="ml-1 dark:text-[white]">{count}</span>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
