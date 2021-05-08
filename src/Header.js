import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu.js"
function Header() {
    return (
        <div className={"flex"}>
             <Logo></Logo>
             <Menu></Menu>
        </div>
    );
}
export default Header;