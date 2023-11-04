import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/about-us">
                關於我們
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/why-choose-us">
                為什麼選擇我們
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact">
                聯絡我們
            </HashLink>
           
        </>
    )
}

export default NavLinks;