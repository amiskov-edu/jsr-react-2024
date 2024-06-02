export function UserWelcome({ name, onLogOut }) {
  return (
    <div>
      Welcome, {name}!<button onClick={onLogOut}>Log Out</button>
    </div>
  );
}
