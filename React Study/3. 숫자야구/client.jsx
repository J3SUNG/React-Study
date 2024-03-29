import React from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader/root";

import NumberBaseball_Hooks from "./NumberBaseball_Hooks";

const Hot = hot(NumberBaseball_Hooks);

ReactDom.render(<Hot />, document.querySelector("#root"));
