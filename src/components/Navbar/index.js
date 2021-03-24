import React from 'react';
import { StyledNavbar, NavbarLink, NavbarAnchor } from './style';

import { IoHome } from 'react-icons/io5';
import { MdLibraryMusic, MdMessage } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';

function Navbar() {
    return (
        <StyledNavbar>
            <NavbarLink to="/">
                <IoHome />
            </NavbarLink>

            <NavbarLink to="/gallery">
                <MdLibraryMusic />
            </NavbarLink>

            <NavbarLink>
                <MdMessage />
            </NavbarLink>

            <NavbarAnchor>
                <AiFillInstagram />
            </NavbarAnchor>
        </StyledNavbar>
    );
}

export default Navbar;
