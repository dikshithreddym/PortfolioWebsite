import { NextRequest, NextResponse } from 'next/server';

interface ContactData {
  name: string;
  email: string;
  message: string;
  hp?: string; // honeypot
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactData = await request.json();
    
    // Check honeypot
    if (body.hp) {
      return new NextResponse(null, { status: 204 }); // Silently ignore
    }

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (body.name.length > 80) {
      return NextResponse.json(
        { error: 'Name too long' },
        { status: 400 }
      );
    }

    if (body.message.length > 2000) {
      return NextResponse.json(
        { error: 'Message too long' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Basic rate limiting by IP (in production, use a proper rate limiting solution)
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // TODO: Implement proper rate limiting
    // For now, we'll just log the request
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      message: body.message.substring(0, 100) + '...',
      ip,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email via your preferred provider
    // Example with Vercel Email:
    // await sendEmail({
    //   to: 'dikshithreddy.macherla@trentu.ca',
    //   subject: `New contact from ${body.name}`,
    //   text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
    // });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
