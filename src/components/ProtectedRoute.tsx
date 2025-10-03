import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactElement; // 렌더링할 자식 페이지 컴포넌트
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const LOGIN_PATH = "/login"; // 로그인 페이지 경로를 정의

  console.log("ProtectedRoute: isAuthenticated =", isAuthenticated);
  // 1. 인증 상태 확인
  if (!isAuthenticated) {
    // 2. 🚨 비로그인 상태라면, 로그인 페이지로 즉시 이동합니다.
    // React-Router v6에서 리다이렉션을 위해 이 컴포넌트를 사용합니다.
    return <Navigate to={LOGIN_PATH} replace />;
  }

  // 3. ✅ 인증되었다면, 요청받은 자식 컴포넌트(페이지)를 그대로 렌더링합니다.
  return children;
};

export default ProtectedRoute;
