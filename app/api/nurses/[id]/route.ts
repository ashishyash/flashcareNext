import { NextRequest, NextResponse } from 'next/server';
import { update } from '@/lib/fileManager';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const numId = Number.parseInt(id);
    const body = await request.json();
    const data = await update('nurses', numId, body);

    if (!data) {
      return NextResponse.json(
        { success: false, error: 'Not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('PATCH error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update' },
      { status: 500 }
    );
  }
}