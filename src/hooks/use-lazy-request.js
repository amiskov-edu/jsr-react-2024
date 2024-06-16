import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/ui/request/selectors";

export function useLazyRequest(thunk) {
  const [request, setRequest] = useState();
  const dispatch = useDispatch();
  const status = useSelector((state) =>
    selectRequestStatus(state, request?.requestId),
  );

  const makeRequest = useCallback(
    (...params) => {
      setRequest(dispatch(thunk(...params)));
    },
    [dispatch, thunk],
  );

  return [status, makeRequest];
}
