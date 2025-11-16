"use strict";

import SQLite from "better-sqlite3";

export default () =>
{
    let db = void 0;
    try
    {
        db = new SQLite(process.cwd().concat("/db/main.db"), {
            strict: true,
            readonly: false,
            timeout: 5000,
            verbose: console.debug,
            fileMustExist: true,
        });
        return new Response("成功访问API", {
            status: 200,
            statusText: "OK",
            headers: new Headers(),
        });
    } catch (error)
    {
        console.error("服务器内部错误 ", error);
        return new Response("API访问失败", {
            status: 500,
            statusText: "Internal Server Error",
            headers: new Headers(),
        });
    } finally
    {
        console.info("释放数据库资源");
        if (db)
        {
            db.close();
        }
    }
}
