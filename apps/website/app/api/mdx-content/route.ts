import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mdxPath = searchParams.get('path');

  if (!mdxPath) {
    return NextResponse.json({ error: 'MDX path is required' }, { status: 400 });
  }

  try {
    const fullPath = path.join(process.cwd(), mdxPath);

    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: 'MDX file not found' }, { status: 404 });
    }

    const content = fs.readFileSync(fullPath, 'utf-8');
    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error reading MDX file:', error);
    return NextResponse.json({ error: 'Failed to read MDX file' }, { status: 500 });
  }
}