import { type Kana } from "../constants/japaneseData";
import styles from "./CharList.module.css";

interface CharListProps {
  charList: (Kana | null)[];
  onSelect: (char: string) => void;
  selectedChar: string;
}

export default function CharList({
  charList,
  onSelect,
  selectedChar,
}: CharListProps) {
  return (
    <div className={styles.grid}>
      {charList.map((item, index) =>
        item ? (
          <button
            key={item.code}
            className={styles["grid-button"]}
            onClick={() => onSelect(item.char)}
            style={{
              borderColor: selectedChar === item.char ? "#ff7675" : "#dfe6e9",
              backgroundColor: selectedChar === item.char ? "#fff5f5" : "white",
            }}
          >
            {item.char}
          </button>
        ) : (
          <div key={`empty-${index}`} className={styles["grid-empty"]} />
        )
      )}
    </div>
  );
}
