import React from "react";
import styled from "@emotion/styled";
import { useAuth0 } from "@auth0/auth0-react";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
    id: string
}

export interface WhiteboardProps extends RouteComponentProps<MatchParams>{
    
}

export const Whiteboard = (props: WhiteboardProps) => {

  const { user } = useAuth0();

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    grid-gap: 32px 32px;
  `;



  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {props.match.params.id}
      
    </div>
  );
};
