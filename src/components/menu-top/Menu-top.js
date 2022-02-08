import { Component } from "react";
import MenuTopLink from "../menu-top-link/Menu-top-link";

import './menu-top.scss'

class MenuTop extends Component {
    state ={
        hamb: false
    }

    hambOnClick = (e) => {
        this.setState({hamb: !this.state.hamb})
        console.dir(e.target)
    }


    render() {
        const {hamb} = this.state
        return (
            <>
            <nav className="menu__wrapper">
                <MenuTopLink hamb ={hamb} hambOnClick={this.hambOnClick}/>
            </nav>
            </>
        )
    }
}

export default MenuTop;