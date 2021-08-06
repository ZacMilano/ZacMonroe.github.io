import styles from "../../styles/terminal.module.css";

export function Terminal() {
  return (
    <div className={styles["term-window"]}>
      <div className={styles["term-window-bar"]}>
        <button
          className={[styles["term-window-bar-btn"], styles["close-btn"]].join(
            " "
          )}
        />
        <button
          className={[styles["term-window-bar-btn"], styles["min-btn"]].join(
            " "
          )}
        />
        <button
          className={[styles["term-window-bar-btn"], styles["max-btn"]].join(
            " "
          )}
        />
      </div>
      <div className={styles["term-body"]}></div>
    </div>
  );
}
