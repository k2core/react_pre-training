import { useState } from "react";

// 실제 환경에서는 로그인/로그아웃 함수와 사용자 정보가 포함됩니다.
export function useAuth() {
  // 💡 현재 상태를 'false'로 설정하여 비로그인 상태를 가정합니다.
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // 테스트를 위해 로그인/로그아웃 함수를 시뮬레이션합니다.
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}
