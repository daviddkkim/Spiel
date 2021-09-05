import React, { MouseEvent } from "react";
import styled from "@emotion/styled";

export interface CardProps {
  children?: React.ReactNode;
  image?: string;
  onClick?: (e?: MouseEvent<HTMLDivElement>) => void;
}

export const Card = (props: CardProps) => {
  const CardBlock = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    border-radius: 2px;
  `;

  const ContentBlock = styled.div`
    padding: 16px;
  `;

  return (
    <CardBlock onClick={props.onClick}>
      {props.image && <img src={props.image} />}
      <ContentBlock>{props.children}</ContentBlock>
    </CardBlock>
  );
};
