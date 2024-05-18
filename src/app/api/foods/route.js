import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const GET = async () => {
  try {
    const foods = await prisma.foods.findMany()
    return NextResponse.json(foods)
  } catch (err) {
    return NextResponse.json(err)
  }
}

export const POST = async (req) => {
  try {
    const {
      name,
      calories,
      carbohydrates,
      fat,
      protein,
      containsMeat,
      vegetarian,
      vegan,
      mealid,
      email,
    } = await req.json()

    if (!email) {
      throw new Error("email is required")
    }

    const addFood = await prisma.foods.create({
      data: {
        name,
        calories,
        carbohydrates,
        fat,
        protein,
        containsMeat,
        vegetarian,
        vegan,
        mealid: mealid || null, // Optionaler Wert
        email, // Erforderlicher Wert
      },
    })

    // Erfolgreiche Antwort
    return NextResponse.json({ message: "Successfully created food", addFood })
  } catch (err) {
    console.error("Error creating food:", err)
    return NextResponse.json(
      { error: err.message || "An error occurred" },
      { status: 500 }
    )
  }
}
