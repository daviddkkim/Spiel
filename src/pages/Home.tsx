import React from "react";
import styled from "@emotion/styled";
import { useAuth0 } from "@auth0/auth0-react";
import { Card } from "../components/card";
import { useHistory } from "react-router-dom";

export const Home = () => {
    let history = useHistory();

  const { user } = useAuth0();

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    grid-gap: 32px 32px;
  `;

  const handleClick = (id: string) => {
      history.push('/file/' + id)
  }

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <GridContainer>
        <Card image={user.picture} onClick={() => handleClick('1')}>
          <span>hello </span>
        </Card>
        <Card image={user.picture}>
          <span>hello </span>
        </Card>
        <Card image={user.picture}>
          <span>hello </span>
        </Card>
        <Card image={user.picture}>
          <span>hello </span>
        </Card>
        <Card image={user.picture}>
          <span>hello </span>
        </Card>
        <Card image={user.picture}>
          <span>hello </span>
        </Card>
      </GridContainer>
    </div>
  );
};
