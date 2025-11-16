"use strict";

import SQLite from "better-sqlite3";

export default () =>
{
    let db = void 0;
    try
    {
        console.info("开始初始化数据库");
        db = new SQLite(process.cwd().concat("/db/main.db"), {
            strict: true,
            readonly: false,
            timeout: 5000,
            verbose: console.debug,
            fileMustExist: true,
        });
        db.prepare("create table if not exists users \
            ( \
            id text primary key not null \
            ); \
            create table if not exists tasks \
            ( \
            id integer primary key autoincrement not null, \
            name text not null, \
            start text not null, \
            end text not null, \
            details text not null, \
            status integer not null \
            );").run();
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
};
