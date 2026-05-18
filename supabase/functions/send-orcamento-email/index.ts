import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface OrcamentoPayload {
  nome: string;
  email: string;
  telefone: string;
  servico: string;
  descricao: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const data: OrcamentoPayload = await req.json();

    if (!data.nome || !data.email || !data.descricao) {
      return new Response(
        JSON.stringify({ success: false, error: "Campos obrigatórios faltando" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY não configurada");
    }

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    .header { border-bottom: 3px solid #f97316; padding-bottom: 20px; margin-bottom: 30px; }
    .header h1 { color: #070b14; margin: 0; font-size: 24px; }
    .header p { color: #6b7280; margin: 5px 0 0 0; font-size: 14px; }
    .field { margin-bottom: 20px; }
    .field-label { color: #6b7280; font-size: 12px; text-transform: uppercase; font-weight: bold; margin-bottom: 5px; }
    .field-value { color: #070b14; font-size: 15px; padding: 10px; background-color: #f9fafb; border-left: 3px solid #f97316; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nova Solicitacao de Orcamento</h1>
      <p>Projeta3D Engenharia</p>
    </div>

    <div class="field">
      <div class="field-label">Nome</div>
      <div class="field-value">${escapeHtml(data.nome)}</div>
    </div>

    <div class="field">
      <div class="field-label">E-mail</div>
      <div class="field-value">${escapeHtml(data.email)}</div>
    </div>

    <div class="field">
      <div class="field-label">Telefone</div>
      <div class="field-value">${data.telefone ? escapeHtml(data.telefone) : "-"}</div>
    </div>

    <div class="field">
      <div class="field-label">Servico Solicitado</div>
      <div class="field-value">${escapeHtml(data.servico)}</div>
    </div>

    <div class="field">
      <div class="field-label">Descricao do Projeto</div>
      <div class="field-value">${escapeHtml(data.descricao).replace(/\n/g, "<br>")}</div>
    </div>

    <div class="footer">
      <p>Enviado via formulario do site Projeta3D Engenharia.</p>
      <p>Data: ${new Date().toLocaleString("pt-BR")}</p>
    </div>
  </div>
</body>
</html>
`;

    const emailText = `
Nova Solicitacao de Orcamento - Projeta3D Engenharia

Nome: ${data.nome}
E-mail: ${data.email}
Telefone: ${data.telefone || "-"}
Servico: ${data.servico}

Descricao:
${data.descricao}

---
Enviado via formulario do site.
Data: ${new Date().toLocaleString("pt-BR")}
`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Projeta3D <onboarding@resend.dev>",
        to: "contato@projeta3djf.com",
        subject: `Novo Orcamento: ${data.nome} - ${data.servico}`,
        html: emailHtml,
        text: emailText,
        reply_to: data.email,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API error:", response.status, errorText);
      throw new Error(`Resend API error: ${response.status}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email enviado com sucesso" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Erro desconhecido",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
