import { Component } from "react/cjs/react.production.min";

import './menu-top-link.scss'


class MenuTopLink extends Component {
    render() {
        return (
            <div className="menuTop__wrapper">
                <div>
                <a className="menuTop__wrapper_linkBold" href="#">PrincessPastryShop</a>
                </div>

                <div>
                <a className="menuTop__wrapper_link"  href="#">Домой</a>
                <a  className="menuTop__wrapper_link" href="#">Ассортимент</a>
                <a  className="menuTop__wrapper_link" href="#">О нас</a>
                <a  className="menuTop__wrapper_link" href="#">Контактная информация</a>
                </div>

                <div className="menuTop__wrapper_svg">
                    <div className="menuTop__wrapper_humburger">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z" fill="#222222"/>
                        </svg>
                    </div >
                    <div className="menuTop__wrapper_cash">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.4222 19.8203C7.8442 19.8203 8.1872 20.1633 8.1872 20.5853C8.1872 21.0073 7.8442 21.3493 7.4222 21.3493C7.0002 21.3493 6.6582 21.0073 6.6582 20.5853C6.6582 20.1633 7.0002 19.8203 7.4222 19.8203Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6752 19.8203C19.0972 19.8203 19.4402 20.1633 19.4402 20.5853C19.4402 21.0073 19.0972 21.3493 18.6752 21.3493C18.2532 21.3493 17.9102 21.0073 17.9102 20.5853C17.9102 20.1633 18.2532 19.8203 18.6752 19.8203Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.75 3.25L4.83 3.61L5.793 15.083C5.871 16.018 6.652 16.736 7.59 16.736H18.502C19.398 16.736 20.158 16.078 20.287 15.19L21.236 8.632C21.353 7.823 20.726 7.099 19.909 7.099H5.164" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.125 10.7949H16.898" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>

            </div>
        )
    }
}

export default MenuTopLink;