// app/api/listmonk/route.ts
export async function POST(request: Request) {
    try {
      console.log("🔥 LISTMONK API CALLED!");
      
      const body = await request.json();
      const { email, name } = body;
      
      console.log("📧 Received data:", { email, name });
  
      if (!email) {
        return Response.json(
          { message: 'Email is required' },
          { status: 400 }
        );
      }
  
      const listmonkConfig = {
        baseUrl: process.env.LISTMONK_BASE_URL || 'http://localhost:9000',
        username: process.env.LISTMONK_API_USERNAME || 'api_username',
        accessToken: process.env.LISTMONK_ACCESS_TOKEN || 'access_token',
        defaultListId:  parseInt(process.env.LISTMONK_DEFAULT_LIST_ID || '1'),
      };
  
      const subscriberData = {
        email: email,
        name: name || '',
        status: 'enabled',
        lists: [listmonkConfig.defaultListId],
      };
  
      const credentials = Buffer.from(
        `${listmonkConfig.username}:${listmonkConfig.accessToken}`
      ).toString('base64');
  
      console.log("🌐 Making request to:", `${listmonkConfig.baseUrl}/api/subscribers`);
  
      const response = await fetch(`${listmonkConfig.baseUrl}/api/subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${credentials}`,
        },
        body: JSON.stringify(subscriberData),
      });
  
      const responseText = await response.text();
      console.log("📋 Response status:", response.status);
      console.log("📋 Response body:", responseText);
  
      if (!response.ok) {
        console.error("❌ Listmonk error:", responseText);
        
        // Check if it's a duplicate email error
        if (responseText.includes('already exists') || responseText.includes('duplicate')) {
          return Response.json(
            { message: 'Email is already subscribed' },
            { status: 409 }
          );
        }
        
        throw new Error(`Listmonk API error: ${response.status} - ${responseText}`);
      }
  
      const result = JSON.parse(responseText);
      console.log("✅ Successfully added subscriber:", result.data?.email);
      
      return Response.json({
        message: 'Successfully subscribed to newsletter',
        data: result.data
      });
  
    } catch (error: any) {
      console.error('❌ Failed to add subscriber:', error);
      
      return Response.json(
        { message: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      );
    }
  }