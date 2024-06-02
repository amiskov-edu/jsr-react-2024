import {useState} from "react";

import {Modal} from "../modal/component.jsx";
import {LoginForm} from "../login-form/component.jsx";

export function UserLogin({onLogin}) {
    const [isModalShowed, setIsModalShowed] = useState(false);
    return (
        <div>
            {isModalShowed && (
                <Modal dismiss={() => setIsModalShowed(!isModalShowed)}>
                    <LoginForm
                        onCancel={() => setIsModalShowed(!isModalShowed)}
                        onSignIn={(userName) => {
                            onLogin(userName);
                            setIsModalShowed(false);
                        }}
                    />
                </Modal>
            )}
            <button onClick={() => setIsModalShowed(true)}>Log In</button>
        </div>
    );
}
