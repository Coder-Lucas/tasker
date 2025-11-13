"use strict";

export const handler = async () =>
{
    try
    {
        return {
            statusCode: 200,
            headers: {},
            body: "Success.",
            isBase64Encoded: false,
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {},
            body: "Error.",
            isBase64Encoded: false,
        };
    }
};
