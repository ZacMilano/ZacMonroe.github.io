import styles from "../../styles/terminal.module.css";

export function TerminalTopBar(props: {
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
}) {
  return (
    <div className={styles["term-window-bar"]}>
      <button
        className={`${styles["term-window-bar-btn"]} ${styles["close-btn"]}`}
				onClick={props.onClose}
      />
      <button
        className={`${styles["term-window-bar-btn"]} ${styles["min-btn"]}`}
				onClick={props.onMinimize}
      />
      <button
        className={`${styles["term-window-bar-btn"]} ${styles["max-btn"]}`}
				onClick={props.onMaximize}
      />
    </div>
  );
}
