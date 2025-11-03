(() => {
    "use strict";

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
    }
    switch (document.body.className) {
        case "index":
            let addBtn = document.querySelector(".add");
            let removeBtn = document.querySelector(".remove");
            addBtn.onclick = () => {
                alert("add按钮编写中");
                return void 0;
            };
            removeBtn.onclick = () => {
                alert("remove按钮编写中");
                return void 0;
            };
            break;
        case "setting":
            break;
        case "achvs":
            break;
        case "about":
            break;
    }
    return void 0;
})();
