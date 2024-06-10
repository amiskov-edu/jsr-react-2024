import { useState } from "react";

import { Modal } from "../modal/component.jsx";
import { LoginForm } from "../login-form/component.jsx";

export function UserLogin({ onLogin }) {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  return (
    <div>
      {isLoginFormVisible && (
        <Modal dismiss={() => setIsLoginFormVisible(false)}>
          <LoginForm
            onCancel={() => setIsLoginFormVisible(false)}
            onSignIn={(userName) => {
              onLogin(userName);
              setIsLoginFormVisible(false);
            }}
          />
        </Modal>
      )}
      <button onClick={() => setIsLoginFormVisible(true)}>Log In</button>
    </div>
  );
}
