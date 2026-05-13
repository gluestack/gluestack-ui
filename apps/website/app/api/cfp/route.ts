import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { status: 'error', message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function POST(request: Request) {
  try {
    const { name, email, type, title, abstract, bio } = await request.json();

    if (!email || !type || !title || !abstract) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Email, type, title, and abstract are required',
        },
        { status: 400 }
      );
    }

    const validTypes = ['Talk', 'Workshop', 'Project Contribution'];
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { status: 'error', message: 'Invalid proposal type' },
        { status: 400 }
      );
    }

    const submission = {
      id: Date.now(),
      name: name || null,
      email,
      type,
      title,
      abstract,
      bio: bio || null,
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
        text: `🎤 *New CFP Submission*\n👤 Name: ${submission.name || 'N/A'}\n📧 Email: ${submission.email}\n🏷️ Type: ${submission.type}\n📌 Title: ${submission.title}\n📝 Abstract: ${submission.abstract}\n🙋 Bio: ${submission.bio || 'N/A'}`,
      }),
    });

    return NextResponse.json(
      {
        status: 'success',
        message: 'Your proposal has been submitted successfully!',
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
