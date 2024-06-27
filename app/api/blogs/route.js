import { NextResponse } from "next/server";
import blogPosts from '@/data/blogPosts.json'

export async function GET(){
    try {
        return await NextResponse.json(blogPosts)

    } catch (error) {
        console.log(error.message)
        return NextResponse.error(error.message)
    }
}
