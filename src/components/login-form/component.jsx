import { useState } from "react";

export const LoginForm = ({ onSignIn, onCancel }) => {
  const [userName, setUserName] = useState("");
  return (
    <form action="#" onSubmit={() => onSignIn(userName)} className="user-form">
      <div>
        Name:
        <input
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          type="text"
        />
      </div>
      <div>
        <button type="submit">Sing In</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};
