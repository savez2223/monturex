import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const { fileName, fileUrl, storagePath } = await req.json();

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Zuridox <onboarding@resend.dev>",
        to: ["contact@zuridox.com"],
        subject: `New PDF Upload: ${fileName}`,
        html: `
          <h2>New PDF Uploaded</h2>
          <p><strong>File Name:</strong> ${fileName}</p>
          <p><strong>Storage Path:</strong> ${storagePath}</p>
          <p>A new PDF has been uploaded by a client. You can view it in your Cloud storage.</p>
        `,
      }),
    });

    const emailData = await emailRes.json();

    if (!emailRes.ok) {
      throw new Error(`Resend API error [${emailRes.status}]: ${JSON.stringify(emailData)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
