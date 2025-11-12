"use strict";

export default () =>
{
    console.info("执行index.html代码");
    const tb = document.querySelector(".table-body");
    document.querySelector(".add").addEventListener("click", () =>
    {
        console.info("add按钮被点击");
        alert("编写中 清空按钮已可用");
    });
    document.querySelector(".remove").addEventListener("click", () =>
    {
        console.info("remove按钮被点击");
        alert("编写中 清空按钮已可用");
    });
    document.querySelector(".clear").addEventListener("click", () =>
    {
        console.info("clear按钮被点击");
        const empty = document.createElement("div");
        empty.className = "empty";
        empty.textContent = "暂无任务";
        tb.replaceChildren();
        tb.appendChild(empty);
    });
}
