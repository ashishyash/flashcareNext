import { NextRequest, NextResponse } from 'next/server';
import { getAll } from '@/lib/fileManager';

export async function GET(_request: NextRequest) {
  try {
    const data = await getAll('metrics');
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
