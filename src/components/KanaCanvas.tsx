import { useState, useEffect, type MouseEvent, type TouchEvent } from "react";

import styles from "./KanaCanvas.module.css";
import KanjiVGViewer from "./KanjiVGViewer";

// 좌표 인터페이스 정의
interface Point {
  offsetX: number;
  offsetY: number;
}

interface KanaCanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  animationKey: number;
  char: string;
}

export default function KanaCanvas({
  canvasRef,
  animationKey,
  char,
}: KanaCanvasProps) {
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#2d3436";
      }
    }
  }, [canvasRef]);

  // 그리기 시작
  const startDrawing = (e: MouseEvent | TouchEvent): void => {
    const coords = getCoordinates(e);
    const canvas = canvasRef.current;
    if (canvas && coords) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(coords.offsetX, coords.offsetY);
        setIsDrawing(true);
      }
    }
  };

  // 그리기 중
  const draw = (e: MouseEvent | TouchEvent): void => {
    if (!isDrawing) return;
    const coords = getCoordinates(e);
    const canvas = canvasRef.current;
    if (canvas && coords) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineTo(coords.offsetX, coords.offsetY);
        ctx.stroke();
      }
    }
  };

  // 그리기 종료
  const stopDrawing = (): void => {
    setIsDrawing(false);
  };

  // 좌표 계산 로직 (마우스와 터치 이벤트 통합 처리)
  const getCoordinates = (event: MouseEvent | TouchEvent): Point | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();

    // 터치 이벤트인 경우
    if ("touches" in event) {
      return {
        offsetX: event.touches[0].clientX - rect.left,
        offsetY: event.touches[0].clientY - rect.top,
      };
    }

    // 마우스 이벤트인 경우
    return {
      offsetX: (event as MouseEvent).nativeEvent.offsetX,
      offsetY: (event as MouseEvent).nativeEvent.offsetY,
    };
  };

  return (
    <div className={styles.container}>
      <div className={styles["canvas-container"]}>
        {/* 가이드라인 배경 (CSS로 흐릿하게 표시) */}
        <KanjiVGViewer key={animationKey} char={char} />

        <canvas
          ref={canvasRef}
          className={styles.canvas}
          width={292}
          height={292}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>
    </div>
  );
}
