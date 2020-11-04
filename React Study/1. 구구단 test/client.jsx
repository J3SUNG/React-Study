// html에서 script로 불러오던 내용을 node의 모듈 시스템으로 불러옴
const React = require("react");
const ReactDOM = require("react-dom");

// 컴포넌트를 쪼개서 필요한것만 불러와서 사용
const GuGuDan = require("./GuGuDan");

ReactDOM.render(<GuGuDan />, document.querySelector("#root"));
