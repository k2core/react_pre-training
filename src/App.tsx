import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MouseTracker from "./components/MouseTracker";
import UserProfileCard from "./components/UserProfileCard";
import type { IUserProfile } from "./types/IUserProfile";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  // ✅ 성공: IUserProfile의 필수 속성을 모두 포함
  const validUser: IUserProfile = {
    id: 101,
    firstName: "길동",
    lastName: "홍",
    email: "hong.gd@example.com",
    isVerified: true,
  };

  // ✅ 성공: Optional 속성인 phoneNumber를 포함
  const validUserWithPhone: IUserProfile = {
    id: 102,
    firstName: "새롬",
    lastName: "김",
    email: "kim.sr@example.com",
    phoneNumber: "010-1234-5678",
    isVerified: false,
  };

  /*
  // ❌ 오류 발생: lastName 속성이 누락되었기 때문에 컴파일 에러 발생!
  const invalidUser: IUserProfile = {
    id: 103,
    firstName: "해인",
    email: "h.in@example.com",
    isVerified: true,
  };
  */

  return (
    <div>
      <UserProfileCard user={validUser} />
      <UserProfileCard user={validUserWithPhone} />
      {/* <UserProfileCard user={invalidUser} /> */}
      <MouseTracker />

      {/* ✅ 라우팅 실습 영역 */}
      <div>
        <BrowserRouter>
          <nav style={{ padding: "10px", border: "1px solid #ccc" }}>
            <Link to="/">홈</Link> | {/* 테스트를 위한 동적 링크들 */}
            <Link to="/user/101">사용자 101</Link> |{" "}
            <Link to="/user/202">사용자 202</Link>
          </nav>

          <div style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" element={<h1>환영 합니다!</h1>} />

              {/* 👈 핵심: 동적 세그먼터 정의 */}
              <Route path="/user/:userId" element={<UserProfilePage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
