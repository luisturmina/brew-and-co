import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { name, guests, date, time } = await req.json()

  if (!name || !guests || !date || !time) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 })
  }

  const webhookUrl = process.env.RESERVATION_WEBHOOK_URL
  const webhookSecret = process.env.RESERVATION_WEBHOOK_SECRET

  if (!webhookUrl || !webhookSecret) {
    console.error("Reservation webhook env vars not set")
    return NextResponse.json({ error: "Erro de configuração do servidor." }, { status: 500 })
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-webhook-secret": webhookSecret,
    },
    body: JSON.stringify({
      guest_name: name,
      group_size: Number(guests),
      booking_time: `${date}T${time}:00`,
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    console.error("Webhook error:", res.status, text)
    return NextResponse.json({ error: "Não foi possível confirmar a reserva." }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
