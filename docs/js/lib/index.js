"use strict";

export default () => {
    console.info("执行index.html代码");
    document.querySelector(".add").onclick = () => {
        alert("add按钮编写中");
        return void 0;
    };
    document.querySelector(".remove").onclick = () => {
        alert("remove按钮编写中");
        return void 0;
    };
    return void 0;
}
