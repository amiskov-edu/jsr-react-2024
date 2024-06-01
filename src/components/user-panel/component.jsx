import {useUser, useSetUser} from '../../contexts/user-context.jsx'

export function UserPanel() {
    const user = useUser();
    const setUser = useSetUser();
    if (user) {
        return <div>
            Welcome, {user.name}!
            <button onClick={() => setUser(null)}>Log Out</button>
        </div>
    } else {
        return <div>
            <button onClick={() => setUser({name: 'Vasya'})}>Log In</button>
        </div>
    }
}

