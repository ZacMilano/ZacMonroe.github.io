import { useState } from "react";

import { baseCommand, Command } from "./command";
import styles from "../../styles/terminal.module.css";
import { TerminalTopBar } from "./top-bar";

export function Terminal() {
  const [history, setHistory] = useState([baseCommand("~")]);

  return (
    <div className={styles["term-window"]}>
      <TerminalTopBar
        onClose={() => {}}
        onMinimize={() => {}}
        onMaximize={() => {}}
      />
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
