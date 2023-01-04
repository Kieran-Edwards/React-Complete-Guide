import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

import "./Header.css";
import MealsImage from "../../assets/meals.jpg";

const Header = (props) => {
    return (
        <Fragment>
            <header className="header">
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className="main-image">
                <img src={MealsImage} alt="Table filled with food" />
            </div>
        </Fragment>
    );
};

export default Header;
