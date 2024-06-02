import {useUser, useSetUser} from "../../contexts/user-context.jsx";
import {UserWelcome} from "./user-welcome.jsx";
import {UserLogin} from "./user-login.jsx";

export function UserPanel() {
    const user = useUser();
    const setUser = useSetUser();
    return (
        (user && user.name)
            ? <UserWelcome name={user.name} onLogOut={() => setUser(null)}></UserWelcome>
            : <UserLogin onLogin={(userName) => setUser({name: userName})}></UserLogin>
    );
}
