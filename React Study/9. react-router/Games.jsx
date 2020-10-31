import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import NumberBaseball from "../3. 숫자야구/NumberBaseball";
import RSP from "../5. 가위바위보/RSP";
import Lotto from "../6. 로또추첨기/Lotto";
import GameMatcher from "./GameMatcher";

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/game/number-baseball?query=10&hello=J3SUNG&bye=react">
          숫자야구
        </Link>
        &nbsp;
        <Link to="/game/rock-scissors-paper">가위바위보</Link>
        &nbsp;
        <Link to="/game/lotto-generator">로또추첨기</Link>
        &nbsp;
        <Link to="/game/index">게임 매쳐 </Link>
      </div>
      <div>
        <Switch>
          <Route
            path="/game/:name"
            render={(props) => <GameMatcher {...props} />}
          />
          <Route
            exact
            path="/"
            render={(props) => <GameMatcher {...props} />}
          />
          <Route
            path="/game/:name"
            render={(props) => <GameMatcher {...props} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Games;
