import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ error: "Missing query parameter" }, { status: 400 });
  }

// When ready uncomment the line below

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  try {
    // Step 1: Find Place ID
    const findRes = await fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
        query
      )}&inputtype=textquery&fields=place_id,name,formatted_address&key=${apiKey}`
    );
    const findData = await findRes.json();

    if (!findData.candidates || findData.candidates.length === 0) {
      return NextResponse.json({ error: "Place not found" }, { status: 404 });
    }

    const placeId = findData.candidates[0].place_id;

    // Step 2: Get rating + reviews
    const detailsRes = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${apiKey}`
    );
    const detailsData = await detailsRes.json();

    return NextResponse.json({
      name: findData.candidates[0].name,
      address: findData.candidates[0].formatted_address,
      rating: detailsData.result?.rating,
      totalReviews: detailsData.result?.user_ratings_total,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
