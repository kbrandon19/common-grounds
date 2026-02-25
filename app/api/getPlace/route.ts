import { NextResponse } from "next/server";

export const revalidate = 86400; // 24 hours

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ error: "Missing query" }, { status: 400 });
  }



  try {
    // 1️⃣ Find the place ID
    const findRes = await fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
        query
      )}&inputtype=textquery&fields=place_id&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}`
    );

    const findData = await findRes.json();
    const placeId = findData.candidates?.[0]?.place_id;

    if (!placeId) throw new Error("Place not found");

    // 2️⃣ Get place details
    const detailsRes = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address,rating,user_ratings_total&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}`
    );

    const detailsData = await detailsRes.json();
    const result = detailsData.result;

    return NextResponse.json({
      name: result.name,
      address: result.formatted_address,
      rating: result.rating,
      totalReviews: result.user_ratings_total,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch place" }, { status: 500 });
  }
}