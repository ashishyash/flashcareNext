import { NextRequest, NextResponse } from 'next/server';
import { getAll, create } from '@/lib/fileManager';

export async function GET(request: NextRequest) {
  try {
    const data = await getAll('activities');
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newItem = await create('activities', body);

    if (!newItem) {
      return NextResponse.json(
        { success: false, error: 'Failed to create activity' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: newItem });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}
