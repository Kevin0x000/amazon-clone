import React from 'react'
import './Header.css'
import logo from '../../src/logo.jpeg'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src={logo}
                    alt=""
                />
            </Link>

            <div
                className="header__search"
            >
                <input className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div
                className="header__nav"
            >
                <div className="header__option">
                    <span className="header__optionLineOne">Hello</span>
                    <span className="header__optionLineTwo">Sign in</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasket />
                        <span className="header__optionLineTwo header_basketCount">
                            0
                        </span>
                    </div>
                </Link>

            </div>
        </div>
    )
}
