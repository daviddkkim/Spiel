import React from "react";
import styled from "@emotion/styled";
import { useAuth0 } from "@auth0/auth0-react";

export const TopNav = () => {
  const TopNav = styled.div`
    background-color: #2c2c2c;
    color: #fff;
    height: 48px;
    width: 100%;
    position: fixed;
    display:flex;
    justify-content: space-between;
    padding: 0px 24px;
    box-sizing: border-box;
  `;

  const UserNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 224px;
    justify-content: center;
    border-right: solid 1px rgba(0,0,0,0.2)
  `;

  const LogButton = styled.button`
    background-color: inherit;
    border: none;
    margin: 0;
    text-decoration: none;
    color: #fff;    
    &:hover {
        background-color: #000000;
    }
  `;

  const { user, logout, loginWithPopup, isAuthenticated} = useAuth0();

  return (
    <TopNav>
      {isAuthenticated ? (
        <>
          <UserNameContainer>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </UserNameContainer>
          <LogButton onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </LogButton>
        </>
      ) : (
        <>
          <UserNameContainer>
              <div>
                  Spiel
              </div>
          </UserNameContainer>
          <LogButton onClick={loginWithPopup}> Log In</LogButton>
        </>
      )}
    </TopNav>
  );
};
