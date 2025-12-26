import { useRef, useState } from "react";
import CharList from "./components/CharList";
import KanaCanvas from "./components/KanaCanvas";
import { HIRAGANA_GRID, KATAKANA_GRID } from "./constants/japaneseData";
import KanaTab from "./components/KanaTab";

import styles from "./App.module.css";

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [selectedChar, setSelectedChar] = useState("あ");
  const [selectedMode, setSelectedMode] = useState<"HIRAGANA" | "KATAKANA">(
    "HIRAGANA"
  );

  const clearCanvas = (): void => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div className={styles.container}>
      <KanaCanvas
        canvasRef={canvasRef}
        animationKey={animationKey}
        char={selectedChar}
      />
      <KanaTab
        clearCanvas={clearCanvas}
        onModeSelect={(mode) => {
          clearCanvas();
          setSelectedMode(mode);
          setSelectedChar(mode === "HIRAGANA" ? "あ" : "ア");
        }}
        restartAnimation={() => {
          clearCanvas();
          setAnimationKey(animationKey + 1);
        }}
      />
      <CharList
        charList={selectedMode === "HIRAGANA" ? HIRAGANA_GRID : KATAKANA_GRID}
        selectedChar={selectedChar}
        onSelect={(char: string) => {
          clearCanvas();
          setSelectedChar(char);
        }}
      />
    </div>
  );
}

export default App;
