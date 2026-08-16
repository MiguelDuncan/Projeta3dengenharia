export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      error: 'Method not allowed'
    });
  }

  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return res.status(500).json({
      error: 'Variáveis do Supabase não encontradas',
      urlExiste: !!supabaseUrl,
      chaveExiste: !!supabaseAnonKey
    });
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/`, {
      method: 'GET',
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
    });

    const text = await response.text();

    return res.status(200).json({
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      respostaSupabase: text.substring(0, 500)
    });

  } catch (error: any) {
    return res.status(500).json({
      error: 'Falha ao conectar com Supabase',
      mensagem: error?.message || 'Erro desconhecido'
    });
  }
}
