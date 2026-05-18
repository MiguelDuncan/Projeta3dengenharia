import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const data: OrcamentoPayload = await req.json();

    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; background-color: #f5f5f5; }
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
      <h1>Nova Solicitação de Orçamento</h1>
      <p>Projeta3D Engenharia</p>
    </div>

    <div class="field">
      <div class="field-label">Nome</div>
      <div class="field-value">${escapeHtml(data.nome)}</div>
    </div>

    <div class="field">
      <div class="field-label">E-mail</div>
      <div class="field-value"><a href="mailto:${escapeHtml(data.email)}" style="color: #f97316; text-decoration: none;">${escapeHtml(data.email)}</a></div>
    </div>

    <div class="field">
      <div class="field-label">Telefone</div>
      <div class="field-value">${data.telefone ? escapeHtml(data.telefone) : "-"}</div>
    </div>

    <div class="field">
      <div class="field-label">Serviço Solicitado</div>
      <div class="field-value">${escapeHtml(data.servico)}</div>
    </div>

    <div class="field">
      <div class="field-label">Descrição do Projeto</div>
      <div class="field-value">${escapeHtml(data.descricao).replace(/\n/g, "<br>")}</div>
    </div>

    <div class="footer">
      <p>Esta solicitação foi enviada via formulário do site Projeta3D Engenharia.</p>
      <p>Data: ${new Date().toLocaleString("pt-BR")}</p>
    </div>
  </div>
</body>
</html>
`;

    const emailPlainText = `
Nova Solicitação de Orçamento - Projeta3D Engenharia

Nome: ${data.nome}
E-mail: ${data.email}
Telefone: ${data.telefone || "-"}
Serviço: ${data.servico}

Descrição:
${data.descricao}

---
Esta solicitação foi enviada via formulário do site.
Data: ${new Date().toLocaleString("pt-BR")}
`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      },
      body: JSON.stringify({
        from: "noreply@projeta3djf.com",
        to: "contato@projeta3djf.com",
        subject: `Novo Orçamento: ${data.nome} - ${data.servico}`,
        html: emailContent,
        text: emailPlainText,
        reply_to: data.email,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend API error:", error);
      throw new Error(`Email service error: ${response.status}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email enviado com sucesso" }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
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
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
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
