import { useState } from "react";
import { useAuth } from "../../contexts/authContexts";
import { useNavigate } from "react-router-dom";

type Auth = {
  email: string;
  password: string;
};

export const Login = () => {
  const [auth, setAuth] = useState<Auth>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const authChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    setAuth((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };

  const { login } = useAuth();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(auth.email, auth.password);
      navigate("/");
    } catch {
      console.log("로그인 에러");
    }
  };
  const handleKakaoLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
  };
  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="이메일"
          value={auth.email}
          id="email"
          onChange={authChangeHandler}
        />
        <input
          type="password"
          value={auth.password}
          id="password"
          onChange={authChangeHandler}
        />
        <button type="submit">로그인</button>
      </form>

      <button onClick={handleKakaoLogin}>카카오 로그인</button>
      <p>
        계정이 없나요? <a href="/register">회원가입</a>
      </p>
    </div>
  );
};
