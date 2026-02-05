import styled from "styled-components";
import { useAuth } from "../contexts/authContexts";
import { useNavigate, Outlet } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

const Logo = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const LogoutButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.borderLight};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const Layout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Nav>
        <Logo onClick={() => navigate("/")}>Travel Planner</Logo>
        <NavRight>
          <LogoutButton onClick={logout}>로그아웃</LogoutButton>
        </NavRight>
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
