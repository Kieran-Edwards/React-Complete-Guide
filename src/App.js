import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { uiActions } from "./store/ui-slice";

let isInit = true;

function App() {
    const dispatch = useDispatch();

    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
        const sendCartData = async () => {
            dispatch(
                uiActions.showNotification({
                    status: "pending",
                    title: "Sending Data",
                    message: "Please Hold...",
                })
            );

            const response = await fetch(
                "https://react-course-bd755-default-rtdb.firebaseio.com/cart.json",
                { method: "PUT", body: JSON.stringify(cart) }
            );

            if (!response.ok) {
                throw new Error("sending data failed");
            }

            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Data Sent",
                    message: "Cart Data sent successfully!",
                })
            );

            // const responseData = await response.json();
        };

        if (isInit) {
            isInit = false;
            return;
        }

        sendCartData().catch((error) => {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "ERROR!",
                    message: "Error sending cart data",
                })
            );
        });
    }, [cart, dispatch]);

    return (
        <Fragment>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;
