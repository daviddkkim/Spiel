import React from "react";
import "./App.css";
import { TopNav } from "./components/TopNav/TopNav";
import { Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";
import { Home } from "./pages/Home";
import { useAuth0 } from "@auth0/auth0-react";
import {Whiteboard} from './pages/Whiteboard'

function App() {
  const ContentBlock = styled.div`
    padding: 48px 24px;

  `;

  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <TopNav />
      {isAuthenticated && (
        <ContentBlock>
          <Switch>
            <Route path="/file/:id" component={Whiteboard}/>
            <Route path="/*" component={Home}/>
          </Switch>
        </ContentBlock>
      )}
    </div>
  );
}

export default App;
