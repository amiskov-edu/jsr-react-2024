import { useGetUsersQuery } from "../../redux/service/api/index.js";
import { selectUserFromResult } from "../../redux/service/api/selectors.js";

export const ReviewUser = ({ id }) => {
  const { data: user, isFetching } = useGetUsersQuery(undefined, {
    selectFromResult: selectUserFromResult(id),
  });
  if (isFetching) {
    return <span>Loading user...</span>;
  }
  if (!user) {
    return <span>Unknown user</span>;
  }
  return <span>{user.name}</span>;
};
