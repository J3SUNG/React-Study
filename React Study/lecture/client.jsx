import React from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader/root";

import ResponseCheck_hooks from "./ResponseCheck_hooks";

const Hot = hot(ResponseCheck_hooks);

ReactDom.render(<Hot />, document.querySelector("#root"));
