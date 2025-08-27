import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { status: 'error', message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function POST(request: Request) {
  try {
    const { name, email, company, query } = await request.json();

    if (!email || !query) {
      return NextResponse.json(
        { status: 'error', message: 'Email and query are required' },
        { status: 400 }
      );
    }

    const ticket = {
      id: Date.now(),
      name: name || null,
      email,
      company: company || null,
      query,
      created_at: new Date().toISOString(),
    };

    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!slackWebhookUrl) {
      throw new Error('Missing SLACK_WEBHOOK_URL in env');
    }

    await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `🎟️ *New Support Ticket*\n👤 Name: ${ticket.name || 'N/A'}\n📧 Email: ${ticket.email}\n🏢 Company: ${ticket.company || 'N/A'}\n💬 Query: ${ticket.query}`,
      }),
    });

    return NextResponse.json(
      {
        status: 'success',
        message: 'Your ticket has been created successfully!',
        data: ticket,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Something went wrong. Please try again.',
      },
      { status: 500 }
    );
  }
}
