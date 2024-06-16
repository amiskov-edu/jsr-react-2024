import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/user/selectors";

export const ReviewUser = ({ id }) => {
    const user = useSelector(state => selectUserById(state, id));
    return <span>{user.name}</span>;
}