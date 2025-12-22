import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = await cookies();
  const colorMode = cookieStore.get('colorMode')?.value || 'light';

  return NextResponse.json({ colorMode });
}

export async function POST(request: Request) {
  try {
    const { colorMode } = await request.json();

    if (!colorMode || !['light', 'dark', 'system'].includes(colorMode)) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Invalid colorMode. Must be light, dark, or system',
        },
        { status: 400 }
      );
    }

    const cookieStore = await cookies();
    cookieStore.set('colorMode', colorMode, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
      httpOnly: false, // Allow client-side access
    });

    return NextResponse.json({ status: 'success', colorMode });
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
