import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { status: 'error', message: 'Method not allowed' },
    { status: 405 }
  );
}

export async function POST(request: Request) {
  try {
    const { name, email, company, query, recaptchaToken } = await request.json();

    if (!email || !query) {
      return NextResponse.json(
        { status: 'error', message: 'Email and query are required' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token if provided
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecretKey) {
      if (!recaptchaToken) {
        return NextResponse.json(
          {
            status: 'error',
            message: 'reCAPTCHA verification is required',
          },
          { status: 400 }
        );
      }

      // Verify token with Google's API
      const verificationResponse = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            secret: recaptchaSecretKey,
            response: recaptchaToken,
          }),
        }
      );

      const verificationData = await verificationResponse.json();

      if (!verificationData.success) {
        return NextResponse.json(
          {
            status: 'error',
            message: 'reCAPTCHA verification failed. Please try again.',
          },
          { status: 400 }
        );
      }

      // Verify the action matches
      if (verificationData.action !== 'submit') {
        return NextResponse.json(
          {
            status: 'error',
            message: 'Invalid reCAPTCHA action',
          },
          { status: 400 }
        );
      }

      // Check score (0.0 to 1.0, where 1.0 is very likely a good interaction)
      // You can adjust this threshold based on your needs (default is 0.5)
      const scoreThreshold = 0.5;
      if (verificationData.score < scoreThreshold) {
        return NextResponse.json(
          {
            status: 'error',
            message: 'reCAPTCHA verification failed. Please try again.',
          },
          { status: 400 }
        );
      }
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
