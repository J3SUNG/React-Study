import React from "react";
import { BrowserRouter, HashRouter, Link, Route } from "react-router-dom";
import NumberBaseball from "../3. 숫자야구/NumberBaseball";
import RSP from "../5. 가위바위보/RSP";
import Lotto from "../6. 로또추첨기/Lotto";

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/number-baseball">숫자야구</Link>
        &nbsp;
        <Link to="/rock-scissors-paper">가위바위보</Link>
        &nbsp;
        <Link to="/lotto-generator">로또추첨기</Link>
      </div>
      <div>
        <Route path="/number-baseball" component={NumberBaseball}></Route>
        <Route path="/rock-scissors-paper" component={RSP}></Route>
        <Route path="/lotto-generator" component={Lotto}></Route>
      </div>
    </BrowserRouter>
  );
};

export default Games;
