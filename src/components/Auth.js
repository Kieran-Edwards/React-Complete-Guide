import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../store/index";

import classes from "./Auth.module.css";

const Auth = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth.isAuth);

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(authActions.login());
    };

    if (!auth) {
        return (
            <main className={classes.auth}>
                <section>
                    <form onSubmit={loginHandler}>
                        <div className={classes.control}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" />
                        </div>
                        <div className={classes.control}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <button>Login</button>
                    </form>
                </section>
            </main>
        );
    }

    return "";
};

export default Auth;
