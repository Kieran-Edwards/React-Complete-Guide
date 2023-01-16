import "./AvailableMeals.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch(
                "https://react-course-bd755-default-rtdb.firebaseio.com/meals.json"
            );

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            console.log("test");

            const data = await response.json();

            const loadedMeals = [];

            for (const key in data) {
                loadedMeals.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price,
                });
            }

            setMeals(loadedMeals);
            setLoading(false);
        };

        fetchMeals().catch((error) => {
            console.log("test2");
            setLoading(false);
            setError(error.message);
        });
    }, []);

    if (loading) {
        return <p className="mealsLoading">loading...</p>;
    }

    if (error) {
        return (
            <div className="error">
                <p>Error! {error}.</p>
                <p>Please reload the page.</p>
            </div>
        );
    }

    const MealsList = meals.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            price={meal.price}
            desc={meal.description}
        />
    ));

    return (
        <section className="meals">
            <Card>
                <ul>{MealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
