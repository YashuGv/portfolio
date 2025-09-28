export async function GET(request: Request) {
  const origin = new URL(request.url).origin
  const candidates = [
    "/public/files/Yasaswini_SoftwareEngineer_CV.pdf",
  ]

  for (const path of candidates) {
    try {
      const fileRes = await fetch(`${origin}${path}`)
      if (fileRes.ok) {
        const data = await fileRes.arrayBuffer()
        return new Response(data, {
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": 'attachment; filename="yasaswini-cv.pdf"',
            "Cache-Control": "public, max-age=3600",
          },
        })
      }
    } catch {
      // continue to next candidate
    }
  }

  return new Response("CV not found", { status: 404 })
}
