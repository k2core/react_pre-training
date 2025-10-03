import { useState, useEffect } from "react";

// 반환 값의 타입을 정의합니다.
type Position = { x: number; y: number };

// 💡 커스텀 훅은 반드시 'use'로 시작해야 합니다.
export function useMousePosition(): Position {
  // 1. 마우스 좌표를 저장할 상태를 선언합니다.
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    // 2. 마우스 움직임 이벤트를 처리할 핸들러를 정의합니다.
    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // 3. 컴포넌트가 마운트될 때 이벤트 리스너를 전역 객체(window)에 추가합니다.
    window.addEventListener("mousemove", updateMousePosition);

    // 4. 🔥 핵심: 컴포넌트가 언마운트될 때 리스너를 제거하는 '클린업' 함수를 반환합니다.
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []); // 의존성 배열이 빈 배열이므로, 오직 한 번(마운트 시)만 실행됩니다.

  // 5. 좌표 상태를 반환합니다.
  return mousePosition;
}
