"use strict";

export default () =>
{
    console.info("执行index.html代码");
    document.querySelector(".add").addEventListener("click", () =>
    {
        console.info("add按钮被点击");
    });
    document.querySelector(".remove").addEventListener("click", () =>
    {
        console.info("remove按钮被点击");
    });
    document.querySelector(".clear").addEventListener("click", () =>
    {
        console.info("clear按钮被点击");
    });
}
