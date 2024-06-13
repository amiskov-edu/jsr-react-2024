export const Tab = ({ title, isActive, onClick }) => {
  return <button disabled={isActive} onClick={onClick}>
    {title}
  </button>
}
