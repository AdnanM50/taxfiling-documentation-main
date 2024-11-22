import React from 'react';
import { FaBars, FaTh } from "react-icons/fa";



const Header = () => {

    return (
        <div className='header flex items-center'>
            <div className='border-2 rounded border-red-300 h-16 w-20 shadow ml-6 flex justify-center items-center'>
                <FaBars size={22} role="button" onClick={() => {
                    document.querySelector('.dashboard')?.classList.toggle(window.innerWidth >= 1024 ? 'mini' : 'mobile')
                }} />
            </div>
        </div>
    );
};

export default Header;