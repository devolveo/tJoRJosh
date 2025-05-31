import React from "react";
import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import styles from "./Drawer.module.css";

function Drawer({ handleDismiss, children }) {
  const btnDismissRef = React.useRef(null);
  React.useEffect(() => {
    const prevActiveEl = document.activeElement;
    // btnDismissRef.current.focus();
    return () => {
      prevActiveEl?.focus();
    };
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        handleDismiss();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleDismiss]);

  return (
    <FocusLock>
      <RemoveScroll>
        <div className={styles.wrapper}>
          <div className={styles.backdrop} onClick={handleDismiss} />
          <div className={styles.drawer}>
            <div>{children}</div>
            <button
              ref={btnDismissRef}
              className={styles.closeBtn}
              onClick={handleDismiss}
            >
              <Close size={18} /> Dismiss
            </button>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default Drawer;
