import type { APIContext } from "astro"

export const GET = async (ctx: APIContext) => {
    console.log(ctx.session?.set("hello", "world"))
    console.log(await ctx.session?.get("hello"))
    return Response.json({ "hello": await ctx.session?.get("hello") })

}