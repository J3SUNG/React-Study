import React, { PureComponent } from "react";
import { render } from "react-dom";

class Test extends PureComponent {
  state = {
    counter: 0,
  };

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (this.state.counter !== nextState.counter) {
  //     return true;
  //   }
  //   return false;
  // }

  onClick = (prevState) => {
    this.setState({});
  };

  render() {
    console.log("렌더링", this.state);
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default Test;
