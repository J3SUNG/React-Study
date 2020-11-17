import React, { Component } from "react";
import NumberBaseball from "../3. 숫자야구/NumberBaseball";
import RSP from "../5. 가위바위보/RSP";
import Lotto from "../6. 로또추첨기/Lotto";

class GameMatcher extends Component {
  render() {
    console.log(this.props);
    let urlSearchParams = new URLSearchParams(
      this.props.location.search.slice(1)
    );
    console.log(urlSearchParams.get("hello"));
    if (this.props.match.params.name === "number-baseball") {
      return <NumberBaseball />;
    } else if (this.props.match.params.name === "rock-scissors-paper") {
      return <RSP />;
    } else if (this.props.match.params.name === "lotto-generator") {
      return <Lotto />;
    }
    return <div>일치하는 주소가 없음</div>;
  }
}

export default GameMatcher;
