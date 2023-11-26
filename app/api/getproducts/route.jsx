import { connectMongoDB } from "../../mongodb";
import Product from "../../models/Product.js";
import { NextRequest, NextResponse } from "next/server";
export async function GET() {
  try {
    // Your MongoDB query here
    await connectMongoDB();
    const products = await Product.find();
    return new Response(JSON.stringify(products));
  } catch (error) {
    console.error("Error executing MongoDB query:", error);
  }
}
