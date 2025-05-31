import React from "react";
import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import styles from "./Drawer.module.css";

function Drawer({ handleDismiss, children }) {
  useEscKey(handleDismiss);

  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className={styles.wrapper}>
          <div className={styles.backdrop} onClick={handleDismiss} />
          <div className={styles.drawer}>
            <div>{children}</div>
            <button className={styles.closeBtn} onClick={handleDismiss}>
              <Close size={18} /> Dismiss
            </button>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

function useEscKey(callback) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === "Escape") {
        callback();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
}

export default Drawer;
