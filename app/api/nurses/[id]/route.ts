// ============================================
// src/app/api/[resource]/[id]/route.ts
// Generic template for individual resource
// ============================================

import { NextRequest, NextResponse } from 'next/server';
import { getById, update, deleteById } from '@/lib/fileManager';

export async function GET(
  request: NextRequest,
  { params }: { params: { resource: string; id: string } }
) {
  try {
    const id = Number.parseInt(params.id);
    const data = await getById(params.resource, id);

    if (!data) {
      return NextResponse.json(
        { success: false, error: 'Not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { resource: string; id: string } }
) {
  try {
    const id = Number.parseInt(params.id);
    const body = await request.json();
    const data = await update(params.resource, id, body);

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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { resource: string; id: string } }
) {
  try {
    const id = Number.parseInt(params.id);
    const success = await deleteById(params.resource, id);

    if (!success) {
      return NextResponse.json(
        { success: false, error: 'Not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: 'Deleted' });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete' },
      { status: 500 }
    );
  }
}