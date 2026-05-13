import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { status: 'error', message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function POST(request: Request) {
  try {
    const { name, email, company, role, interest, budget, message } =
      await request.json();

    if (!email || !interest || !message) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Email, interest area, and message are required',
        },
        { status: 400 }
      );
    }

    const validInterests = [
      'Enterprise License',
      'Custom Development',
      'Team Training',
      'Consulting',
      'Other',
    ];
    if (!validInterests.includes(interest)) {
      return NextResponse.json(
        { status: 'error', message: 'Invalid interest area' },
        { status: 400 }
      );
    }

    const inquiry = {
      id: Date.now(),
      name: name || null,
      email,
      company: company || null,
      role: role || null,
      interest,
      budget: budget || null,
      message,
      created_at: new Date().toISOString(),
    };

    const slackWebhookUrl =
      process.env.SLACK_ENTERPRISE_WEBHOOK_URL || process.env.SLACK_WEBHOOK_URL;
    if (!slackWebhookUrl) {
      throw new Error('Missing SLACK_WEBHOOK_URL in env');
    }

    await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `🏢 *New Enterprise Inquiry*\n👤 Name: ${inquiry.name || 'N/A'}\n📧 Email: ${inquiry.email}\n🏢 Company: ${inquiry.company || 'N/A'}\n💼 Role: ${inquiry.role || 'N/A'}\n🎯 Interest: ${inquiry.interest}\n💰 Budget: ${inquiry.budget || 'N/A'}\n💬 Message: ${inquiry.message}`,
      }),
    });

    return NextResponse.json(
      {
        status: 'success',
        message: 'Your inquiry has been submitted successfully!',
        data: inquiry,
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
