import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, website, country, jobFunction, message } = body;
    
    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content with proper formatting
    const subject = encodeURIComponent(`New Contact Request from ${name}`);
    
    // Build email body with line breaks and form data
    const emailBody = [
      `New Contact Request from Snowbase Studio`,
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      website ? `Website: https://${website}` : '',
      country ? `Country: ${country}` : '',
      jobFunction ? `Job Function: ${jobFunction}` : '',
      '',
      'Message:',
      message
    ].filter(line => line.trim() !== '') // Remove empty lines
     .join('%0D%0A'); // Convert to URL-encoded line breaks

    // Create mailto link with all form data
    const mailtoLink = `mailto:hi@snowbasestudio.com?subject=${subject}&body=${emailBody}`;
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email link generated successfully',
      mailtoLink: mailtoLink // Return the mailto link
    });
    
  } catch (error) {
    console.error('Error creating email link:', error);
    return NextResponse.json(
      { error: 'Failed to create email link' },
      { status: 500 }
    );
  }
}
