"use strict";

export default () =>
{
    try
    {
        return new Response("成功访问API", {
            status: 200,
            headers: {},
        });
    } catch (error)
    {
        return new Response("API访问失败", {
            status: 500,
            headers: {},
        });
    }
};
