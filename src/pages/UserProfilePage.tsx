import React from "react";
import { useParams } from "react-router-dom";

const UserProfilePage: React.FC = () => {
  // 1. useParams()를 호출하여 동적 세그먼트의 값을 추출합니다.
  // 키 이름은 App.tsx에서 정의한 :userId와 일치해야 합니다.
  const params = useParams<{ userId: string }>();
  const userId = params.userId;

  // 이 userId는 서버에 데이터를 요청하는 데 사용되는 핵심 값입니다.

  return (
    <div style={{ border: "2px solid blue", padding: "20px" }}>
      <h2>사용자 프로필 페이지</h2>
      <p>현재 URL에서 추출한 사용자 ID:</p>
      <h1 style={{ color: "blue" }}>
        {userId ? userId : "ID를 찾을 수 없습니다."}
      </h1>
      <p>⚠️ 서버에 이 ID로 요청을 보낼 준비가 되었습니다.</p>
    </div>
  );
};

export default UserProfilePage;
