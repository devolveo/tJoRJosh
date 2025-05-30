import React from "react";
import { X as Close } from "react-feather";

import styles from "./Modal.module.css";

function Modal({ handleDismiss, children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backdrop} />
      <div className={styles.dialog}>
        <div className={styles.closeBtn} onClick={handleDismiss}>
          <Close />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
