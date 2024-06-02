import "./style.css";
import {createPortal} from "react-dom";
import {useEffect} from "react";

export const Modal = ({children, onOverlayClick}) => {
    useEffect(() => {
        function escHandler(event) {
            if (event.key === "Escape") {
                onOverlayClick();
            }
        }

        document.addEventListener("keyup", escHandler);

        return () => document.removeEventListener("keyup", escHandler);
    }, []);
    return (
        <>
            {createPortal(
                <div className="overlay" onClick={onOverlayClick}>
                    <div className="modal"
                         onClick={(event) => event.stopPropagation()}>
                        <div className="modal__inner">{children}</div>
                    </div>
                </div>,
                document.getElementById("modals"),
            )}
        </>
    );
};
