import React, { PureComponent } from "react";
import { render } from "react-dom";

class Test extends PureComponent {
  state = {
    counter: 0,
    string: "hello",
    number: 1,
    boolean: true,
    object: {},
    array: [],
  };

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (this.state.counter !== nextState.counter) {
  //     return true;
  //   }
  //   return false;
  // }

  onClick = (prevState) => {
    this.setState({
      array: [...this.state.array, 1],
    });
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
