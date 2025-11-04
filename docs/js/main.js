(() => {
    "use strict";

    console.info("开始注册SW")
    if ("serviceWorker" in navigator) {
        addEventListener("load", async () => {
            try {
                const registration = await navigator.serviceWorker.register("../sw.js", {
                    scope: "../",
                    type: "module"
                });
                console.info("SW注册成功 PWA离线功能已可用")
            } catch (error) {
                console.error("SW注册失败 PWA离线功能不可用 ", error);
            }
        });
    } else {
        console.warn("该浏览器或设备暂不支持SW")
    }
    console.info("检测当前所在网页")
    switch (document.body.className) {
        case "index":
            console.info("执行index.html代码")
            document.querySelector(".add").onclick = () => {
                alert("add按钮编写中");
                return void 0;
            };
            document.querySelector(".remove").onclick = () => {
                alert("remove按钮编写中");
                return void 0;
            };
            break;
        case "settings":
            console.info("执行settings.html代码")
            break;
        case "achvs":
            console.info("执行achvs.html代码")
            break;
        case "about":
            console.info("执行about.html代码")
            break;
    }
    return void 0;
})();
