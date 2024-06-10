import s from "./style.module.css";
import { createPortal } from "react-dom";
import { useEffect } from "react";

export const Modal = ({ children, dismiss }) => {
  useEffect(() => {
    function escHandler(event) {
      if (event.key === "Escape") {
        dismiss();
      }
    }

    document.addEventListener("keyup", escHandler);

    return () => document.removeEventListener("keyup", escHandler);
  }, []);
  return (
    <>
      {createPortal(
        <div className={s.overlay} onClick={dismiss}>
          <div className={s.modal} onClick={(event) => event.stopPropagation()}>
            {children}
          </div>
        </div>,
        document.getElementById("modals"),
      )}
    </>
  );
};
