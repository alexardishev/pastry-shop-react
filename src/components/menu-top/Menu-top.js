import { Component } from "react";
import MenuTopLink from "../menu-top-link/Menu-top-link";

import './menu-top.scss'

class MenuTop extends Component {
    render() {
        return (
            <>
            <div className="menu__wrapper">
                <MenuTopLink/>
            </div>
            </>
        )
    }
}

export default MenuTop;