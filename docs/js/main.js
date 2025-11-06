"use strict";

import runIndex from "./lib/index.js";
import runSettings from "./lib/settings.js";
import runAchvs from "./lib/achvs.js";
import runAbout from "./lib/about.js";

(async () =>
{
    try
    {
        console.info("开始注册SW");
        if ("serviceWorker" in navigator)
        {
            document.addEventListener("DOMContentLoaded", async () =>
            {
                const registration = await navigator.serviceWorker.register(new URL("../sw.js", import.meta.url).href, {
                    scope: new URL("../", import.meta.url).toString(),
                    type: "module"
                });
                console.info("SW注册成功 PWA离线功能已可用");
                registration.addEventListener("updatefound", async () =>
                {
                    console.info("检测到新版SW 正在下载");
                    const newSW = await registration.installing;
                    newSW.addEventListener("statechange", () =>
                    {
                        if (newSW.state === "installed" && navigator.serviceWorker.controller)
                        {
                            console.info("新版SW下载完成");
                        }
                    });
                });
            });
        } else
        {
            console.error("该浏览器或设备暂不支持SW");
        }
    } catch (error)
    {
        console.error("SW注册失败 PWA离线功能不可用 ", error);
    }
    try
    {
        console.info("检测当前所在网页");
        switch (document.body.className)
        {
            case "index":
                Promise.resolve().then(() =>
                {
                    runIndex();
                });
                break;
            case "settings":
                Promise.resolve().then(() =>
                {
                    runSettings();
                });
                break;
            case "achvs":
                Promise.resolve().then(() =>
                {
                    runAchvs();
                });
                break;
            case "about":
                Promise.resolve().then(() =>
                {
                    runAbout();
                });
                break;
        }
    } catch (error)
    {
        console.error("出现未知错误 ", error);
    }
})();
