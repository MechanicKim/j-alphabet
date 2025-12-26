import { useEffect, useState } from "react";
import styles from "./KanjiVGViewer.module.css";

interface KanjiVGViewerProps {
  char: string; // 학습할 문자 (예: 'あ')
}

export default function KanjiVGViewer({ char }: KanjiVGViewerProps) {
  const [paths, setPaths] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchKanjiVG = async () => {
      setLoading(true);
      try {
        // 1. 문자를 유니코드(16진수)로 변환하고 5자리로 맞춤 (KanjiVG 명명 규칙)
        const unicode = char.charCodeAt(0).toString(16).padStart(5, "0");

        // 2. KanjiVG 공식 GitHub에서 SVG 가져오기
        const response = await fetch(
          `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${unicode}.svg`
        );
        const svgText = await response.text();

        // 3. XML 파싱하여 path의 'd' 속성 추출
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(svgText, "image/svg+xml");
        const pathNodes = xmlDoc.getElementsByTagName("path");

        const pathData = Array.from(pathNodes).map(
          (node) => node.getAttribute("d") || ""
        );
        setPaths(pathData);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    if (char) fetchKanjiVG();
  }, [char]);

  if (loading) return null;

  return (
    <div className={styles["svg-container"]}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 109 109"
        className={styles.svg}
      >
        {paths.map((d, index) => (
          <path
            key={index}
            d={d}
            className={`kanji-path ${styles["svg-path"]}`}
            style={{
              animationDelay: `${index * 0.8}s`, // 획마다 0.8초 간격 지연
            }}
          />
        ))}
      </svg>
    </div>
  );
}
