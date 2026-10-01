import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, service, preferredTime, notes } = body

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name." },
        { status: 400 }
      )
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      return NextResponse.json(
        { error: "Please provide a valid phone number." },
        { status: 400 }
      )
    }

    // Format IST Timestamp
    const now = new Date()
    const istTime = now.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    })

    const payload = {
      timestamp: istTime,
      isoDate: now.toISOString(),
      name: name.trim(),
      phone: phone.trim(),
      service: (service || "Gynecology Care").toString().trim(),
      preferredTime: (preferredTime || "Morning (10:00 AM - 1:30 PM)").toString().trim(),
      notes: (notes || "").toString().trim(),
      source: "vcusgenesis.com",
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL

    if (webhookUrl && webhookUrl.startsWith("https://")) {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          redirect: "follow",
        })

        if (!response.ok) {
          console.error("Google Sheet webhook returned error status:", response.status)
        }
      } catch (webhookErr) {
        console.error("Error forwarding consultation to Google Sheet:", webhookErr)
        // We log the error but still return success to the patient so they know their request was noted,
        // and we show clinic contact details as fallback in the UI.
      }
    } else {
      console.warn(
        "GOOGLE_SHEET_WEBHOOK_URL is not configured in environment variables. Consultation logged to server console:",
        payload
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Consultation request recorded successfully.",
        data: {
          name: payload.name,
          phone: payload.phone,
          service: payload.service,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing consultation booking:", error)
    return NextResponse.json(
      { error: "Unable to process booking request. Please call our clinic directly." },
      { status: 500 }
    )
  }
}
