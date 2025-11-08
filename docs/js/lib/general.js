"use strict";

export default () =>
{
    console.info("执行通用代码");
    document.querySelectorAll(".current").forEach((value) =>
    {
        value.addEventListener("click", (evt) =>
        {
            evt.preventDefault();
        });
    });
}
