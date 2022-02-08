import { Component } from "react/cjs/react.production.min";

import './menu-top-link.scss'


class MenuTopLink extends Component {
    render() {

    const {hamb, hambOnClick} = this.props;
    const clazz = hamb ? 'menuTop__wrapper_active menuTop__wrapper_menu' : 'menuTop__wrapper_menu'

        return (
            <div className="menuTop__wrapper">
                <div onClick={hambOnClick} className="menuTop__wrapper_humburger">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z" fill="#222222"/>
                    </svg>
                </div >
                <menu className={clazz}>
                    <div className="menuTop__wrapper_menuwrap">
                       <ul>
                           <li>
                           <a className="menuTop__wrapper_link"  href="#">Домой</a>
                           </li>
                           <li>
                           <a className="menuTop__wrapper_link"  href="#">Ассортимент</a>
                           </li>
                           <li>
                           <a className="menuTop__wrapper_link"  href="#">О нас</a>
                           </li>
                           <li>
                           <a className="menuTop__wrapper_link"  href="#">Контактная информация</a>
                           </li>
                       </ul>
                    </div>
                </menu>

                <div>
                <a className="menuTop__wrapper_linkBold" href="#">PrincessPastryShop</a>
                </div>

                <div className="menuTop__wrapper_wraplink">
                <a className="menuTop__wrapper_link"  href="#">Домой</a>
                <a  className="menuTop__wrapper_link" href="#">Ассортимент</a>
                <a  className="menuTop__wrapper_link" href="#">О нас</a>
                <a  className="menuTop__wrapper_link" href="#">Контактная информация</a>
                </div>

            </div>
        )
    }
}

export default MenuTopLink;