import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/ui/request/selectors";

export function useRequest(thunk, ...params) {
  const [request, setRequest] = useState();
  const dispatch = useDispatch();
  const status = useSelector((state) =>
    selectRequestStatus(state, request?.requestId),
  );

  useEffect(() => {
    const req = dispatch(thunk(...params));
    setRequest(req);
    return () => {
      // Чтобы заметить, нужно выставить таймаут > 0 в `simple_api/utils.js`
      // и потыкать на разные табы. Вернутся данные только для последнего
      // выбранного в таймауте ресторана, остальные запросы отменятся (`rejectd`).
      req.abort("Aborted from useEffect return function.");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, thunk, ...params]); // передавать лучше именно по одному, чтобы каждый элемент массива `params` провверялся индивидуально

  return status;
}
