import React from "react";
import type { IUserProfile } from "../types/IUserProfile";

// 1. 컴포넌트 Props의 타입을 정의합니다.
//    이 컴포넌트는 'user'라는 이름으로 IUserProfile 타입의 객체를 받습니다.
interface UserProfileCardProps {
  user: IUserProfile;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px" }}>
      <h3>
        {user.lastName}
        {user.firstName} ({user.isVerified ? "✅ 인증됨" : "❌ 미인증"})
      </h3>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>

      {/* 2. Optional 속성은 있을 때만 안전하게 렌더링합니다. */}
      {user.phoneNumber && <p>전화번호: {user.phoneNumber}</p>}
    </div>
  );
};

export default UserProfileCard;
