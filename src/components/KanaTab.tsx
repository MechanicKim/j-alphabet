import styles from "./KanaTab.module.css";

interface KanaTabProps {
  clearCanvas: () => void;
  onModeSelect: (mode: "HIRAGANA" | "KATAKANA") => void;
  restartAnimation: () => void;
}

export default function KanaTab({
  clearCanvas,
  onModeSelect,
  restartAnimation,
}: KanaTabProps) {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => onModeSelect("HIRAGANA")}
      >
        하라가나
      </button>
      <button
        className={styles.button}
        onClick={() => onModeSelect("KATAKANA")}
      >
        가타카나
      </button>
      <button className={styles.button} onClick={clearCanvas}>
        지우기
      </button>
      <button className={styles.button} onClick={restartAnimation}>
        획 순서
      </button>
    </div>
  );
}
