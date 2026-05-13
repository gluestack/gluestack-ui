import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { status: 'error', message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function POST(request: Request) {
  try {
    const { name, email, university, areaOfInterest, portfolioUrl, message } =
      await request.json();

    if (!email || !areaOfInterest) {
      return NextResponse.json(
        { status: 'error', message: 'Email and area of interest are required' },
        { status: 400 }
      );
    }

    const submission = {
      id: Date.now(),
      name: name || null,
      email,
      university: university || null,
      areaOfInterest,
      portfolioUrl: portfolioUrl || null,
      message: message || null,
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
        text: `🎓 *New Internship Interest*\n👤 Name: ${submission.name || 'N/A'}\n📧 Email: ${submission.email}\n🏫 University/Major: ${submission.university || 'N/A'}\n🎯 Area of Interest: ${submission.areaOfInterest}\n🔗 Portfolio/GitHub: ${submission.portfolioUrl || 'N/A'}\n💬 Message: ${submission.message || 'N/A'}`,
      }),
    });

    return NextResponse.json(
      {
        status: 'success',
        message: 'Your internship interest has been submitted successfully!',
        data: submission,
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
