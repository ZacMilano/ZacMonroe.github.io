import { useState } from "react";

import { baseCommand, Command } from "./command";
import styles from "../../styles/terminal.module.css";

export function Terminal() {
  const [history, setHistory] = useState([baseCommand("~")]);

  return (
    <div className={styles["term-window"]}>
      <div className={styles["term-window-bar"]}>
        <button
          className={`${styles["term-window-bar-btn"]} ${styles["close-btn"]}`}
        />
        <button
          className={`${styles["term-window-bar-btn"]} ${styles["min-btn"]}`}
        />
        <button
          className={`${styles["term-window-bar-btn"]} ${styles["max-btn"]}`}
        />
      </div>
      <div className={styles["term-body"]}>
        {history.map((cmd) => {
          return (
            <div className={styles["term-cmd-block"]}>
              <span className={styles["term-cwd"]}>{cmd.workingDirectory}</span>
              <span className={styles["term-delimiter"]}>{" $ "}</span>
              <span className={styles["term-cmd-in"]}>{cmd.input}</span>
              {cmd.output && <br />}
              {cmd.output && (
                <span className={styles["term-cmd-out"]}>{cmd.output}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
