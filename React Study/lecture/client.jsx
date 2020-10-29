import React from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader/root";

import Lotto_hooks from "./Lotto_hooks";

const Hot = hot(Lotto_hooks);

ReactDom.render(<Hot />, document.querySelector("#root"));
