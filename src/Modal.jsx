import React from "react";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import VisuallyHidden from "./visuallyHidden.jsx";

import { X as Close } from "react-feather";

import styles from "./Modal.module.css";

function Modal({ handleDismiss, children }) {
  const closeBtnRef = React.useRef();
  React.useEffect(() => {
    const currFocusElem = document.activeElement;
    closeBtnRef.current.focus();
    return () => {
      currFocusElem?.focus();
    };
  }, []);

  React.useEffect(() => {
    function handleDismissByEscape(event) {
      if (event.key === "Escape") {
        handleDismiss();
      }
    }

    document.addEventListener("keydown", handleDismissByEscape);
    return () => {
      document.removeEventListener("keydown", handleDismissByEscape);
    };
  }, [handleDismiss]);
  return (
    <FocusLock>
      <RemoveScroll>
        <div className={styles.wrapper}>
          <div className={styles.backdrop} onClick={handleDismiss} />
          <div className={styles.dialog}>
            <button
              ref={closeBtnRef}
              className={styles.closeBtn}
              onClick={handleDismiss}
            >
              <Close />
              <VisuallyHidden>Dismiss modal</VisuallyHidden>
            </button>
            {children}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default Modal;
