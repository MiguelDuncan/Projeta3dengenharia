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
      error: 'Variáveis do Supabase não encontradas'
    });
  }

  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/orcamentos?select=id&limit=1`,
      {
        method: 'GET',
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
        },
      }
    );

    return res.status(response.ok ? 200 : 502).json({
      ok: response.ok,
      status: response.status
    });

  } catch (error: any) {
    return res.status(500).json({
      error: 'Falha ao conectar com Supabase',
      mensagem: error?.message
    });
  }
}
