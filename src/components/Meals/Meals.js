import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvalableMeals from "./AvailableMeals";

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvalableMeals />
        </Fragment>
    );
};

export default Meals;
