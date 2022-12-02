import React, { useState } from "react";

import NewUserForm from "./Components/NewUserForm";
import UserList from "./Components/UserList";
import Modal from "./Components/Modal";

const App = () => {
    const [users, setUsers] = useState([]);
    const [modalState, setModalState] = useState(false);
    const [modalContent, setModalContent] = useState({
        title: "",
        content: "",
    });

    const addUserHandler = (user) => {
        setUsers((prevUsers) => {
            return [user, ...prevUsers];
        });
    };

    const modalHandler = () => {
        setModalState(!modalState);
    };

    return (
        <div>
            <NewUserForm
                addUserHandler={addUserHandler}
                modalHandler={modalHandler}
                setModalContent={setModalContent}
            />
            {modalState && (
                <Modal
                    modalHandler={modalHandler}
                    modalContent={modalContent}
                />
            )}
            {users.length > 0 && <UserList users={users} />}
        </div>
    );
};

export default App;
