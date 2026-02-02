import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
// 로그인 중계 페이지
export const OAuthCallback = () => {
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParam.get("token");
    if (token) {
      localStorage.setItem("authToken", token);
      navigate("/", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, [searchParam]);

  return <p>로그인 처리중</p>;
};
