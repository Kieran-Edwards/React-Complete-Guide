import { useRef, useState } from "react";
import "./Checkout.css";

const isNotEmpty = (value) => value.trim() !== "";
const postcodeValidation = (value) =>
    /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$/gim.test(value);

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postcode: true,
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const cityInputRef = useRef();
    const postcodeInputRef = useRef();

    const confirmHandler = (e) => {
        e.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredPostcode = postcodeInputRef.current.value;

        const nameValid = isNotEmpty(enteredName);
        const StreetValid = isNotEmpty(enteredStreet);
        const cityValid = isNotEmpty(enteredCity);
        const postcodeValid = postcodeValidation(enteredPostcode);

        setFormInputsValidity({
            name: nameValid,
            street: StreetValid,
            city: cityValid,
            postcode: postcodeValid,
        });

        const formIsValiid =
            nameValid && StreetValid && cityValid && postcodeValid;

        if (!formIsValiid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postcode: enteredPostcode,
        });
    };

    const nameClass = `control ${formInputsValidity.name ? "" : "invalid"}`;
    const streetClass = `control ${formInputsValidity.street ? "" : "invalid"}`;
    const cityClass = `control ${formInputsValidity.city ? "" : "invalid"}`;
    const postcodeClass = `control ${
        formInputsValidity.postcode ? "" : "invalid"
    }`;

    return (
        <form className="checkoutForm" onSubmit={confirmHandler}>
            <div className={nameClass}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={nameInputRef}></input>
                {!formInputsValidity.name && <p>Enter Valid Name</p>}
            </div>
            <div className={streetClass}>
                <label htmlFor="street">Address (house Number street)</label>
                <input type="text" id="street" ref={streetInputRef}></input>
                {!formInputsValidity.street && <p>Enter Valid Address</p>}
            </div>
            <div className={cityClass}>
                <label htmlFor="city">Town/City</label>
                <input type="text" id="city" ref={cityInputRef}></input>
                {!formInputsValidity.city && <p>Enter Valid City</p>}
            </div>
            <div className={postcodeClass}>
                <label htmlFor="postcode">PostCode</label>
                <input type="text" id="postcode" ref={postcodeInputRef}></input>
                {!formInputsValidity.postcode && <p>Enter Valid Postcode</p>}
            </div>
            <button type="submit">Confirm</button>
            <button type="button" onClick={props.onClose}>
                Close
            </button>
        </form>
    );
};

export default Checkout;
