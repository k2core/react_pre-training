import React from "react";
import { Navigate, useParams } from "react-router-dom";

const UserProfilePage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  // 1. parseInt()를 사용하여 10진수(10)로 변환을 시도합니다.
  const idAsNumber = parseInt(userId || "", 10); // ""이면 NaN

  // 2. 🚫 유효성 검사:
  //   - isNaN()으로 변환된 값이 숫자인지 확인합니다. ("abc"의 경우 true)
  //   - 또한, userId 문자열 자체가 '101a'처럼 숫자로 시작해도 NaN이 아닌 경우가 있으므로,
  //     추가적인 검증(여기서는 isNaN만으로 충분)이 필요하지만, 학습을 위해 isNaN에 집중합니다.변환된 값이 유효한 숫자인지 확인합니다.
  if (isNaN(idAsNumber) || !userId) {
    // 잘못된 형식의 URL은 존재하지 않는 경로로 간주합니다.
    console.warn(
      `https://www.merriam-webster.com/dictionary/error 잘못된 사용자 ID 형식: ${userId}. 404 리다이렉트.`
    );
    // 404 페이지로 리다이렉트하거 (실제 라우터에 /404 경로가 있어야 함)
    return <Navigate to="/404" replace />;
  }

  // ✅ idAsNumber는 이제 안전하게 사용할 수 있는 Number 타입입니다.

  return (
    <div style={{ padding: "20px", backgroundColor: "#e6f7ff" }}>
      <h2>사용자 정보 조회 (안전 모드)</h2>
      <p>
        서버에 요청할 ID (Number 타입):{" "}
        <strong style={{ color: "darkgreen" }}>{idAsNumber}</strong>
      </p>
    </div>
  );
};

export default UserProfilePage;
