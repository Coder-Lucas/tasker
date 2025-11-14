"use strict";

export default () =>
{
    console.info("执行about.html代码");
    document.querySelector(".api").addEventListener("click", () =>
    {
        fetch("/api/index").then((res) =>
        {
            res.text().then(data =>
            {
                document.querySelector(".test").textContent = data;
            });
        });
    }, {
        once: true,
    });
}
