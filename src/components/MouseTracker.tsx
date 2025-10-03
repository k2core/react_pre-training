import React from "react";
import { useMousePosition } from "../hooks/useMousePosition";

const MouseTracker: React.FC = () => {
  // 훅을 호출하여 로직을 재사용합니다.
  const { x, y } = useMousePosition();

  return (
    <div style={{ padding: "20px", border: "1px solid black", margin: "10px" }}>
      <h3>마우스 좌표 추적기</h3>
      <p>브라우저 창에서 마우스를 움직여보세요!</p>
      <p>
        X 좌표: <span style={{ fontWeight: "bold", color: "blue" }}>{x}</span>
      </p>
      <p>
        Y 좌표: <span style={{ fontWeight: "bold", color: "red" }}>{y}</span>
      </p>
    </div>
  );
};

export default MouseTracker;
