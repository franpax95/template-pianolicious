import React from 'react';
import { StyledNavbar, NavbarLink, NavbarAnchor } from './style';

import { IoHome } from 'react-icons/io5';
import { MdLibraryMusic, MdMessage } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';

function Navbar() {
    return (
        <StyledNavbar>
            <NavbarLink exact to="/" description="Inicio">
                <IoHome />
            </NavbarLink>

            <NavbarLink to="/gallery" description="Galería">
                <MdLibraryMusic />
            </NavbarLink>

            <NavbarLink to="/contact" description="Contacto">
                <MdMessage />
            </NavbarLink>

            <NavbarAnchor href="https://www.instagram.com/franpax95/" target="_blank" description="Instagram">
                <AiFillInstagram />
            </NavbarAnchor>
        </StyledNavbar>
    );
}

export default Navbar;
