import { NextRequest, NextResponse } from 'next/server';
import { getAll, create } from '@/lib/fileManager';

export async function GET(request: NextRequest) {
  try {
    console.log('GET /api/nurses called');
    const data = await getAll('nurses');
    console.log('Data fetched:', data.length, 'items');
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch data', details: String(error) },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('POST /api/nurses called');
    const body = await request.json();
    console.log('Request body:', body);
    const newItem = await create('nurses', body);

    if (!newItem) {
      return NextResponse.json(
        { success: false, error: 'Failed to create nurse' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: newItem });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { success: false, error: 'Invalid request', details: String(error) },
      { status: 400 }
    );
  }
}