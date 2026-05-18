import { useState } from 'react';
import { Phone, Instagram, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const initialForm = {
  nome: '',
  email: '',
  telefone: '',
  servico: '',
  descricao: '',
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Save to database
      const { error: dbError } = await supabase.from('orcamentos').insert([form]);
      if (dbError) throw dbError;

      // Send email via Edge Function
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-orcamento-email`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Erro ao enviar email');

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-[#0d1426] border border-[#1a2540] text-white placeholder-[#374151] text-sm px-4 py-3 focus:outline-none focus:border-[#f97316] transition-colors duration-200';

  return (
    <section id="contato" className="bg-[#070b14] py-24 relative overflow-hidden">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#4a90d9 1px, transparent 1px), linear-gradient(90deg, #4a90d9 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#f97316]" />
              <span className="text-[#f97316] text-xs font-bold tracking-[0.25em] uppercase">Entre em Contato</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Vamos Conversar Sobre
              <span className="text-[#f97316] block">Seu Projeto</span>
            </h2>

            <p className="text-[#9ca3af] text-lg leading-relaxed mb-10">
              Envie uma foto, esboço ou descrição do que precisa. Nossa equipe analisa e retorna
              com uma solução técnica e orçamento personalizado.
            </p>

            <div className="flex flex-col gap-5">
              <a
                href="https://wa.me/5532998164196"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-[#1a2540] hover:border-[#f97316]/50 bg-[#0d1426] px-5 py-4 transition-all duration-200"
              >
                <div className="w-10 h-10 bg-[#f97316]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[#f97316]" />
                </div>
                <div>
                  <p className="text-[#6b7280] text-xs mb-0.5">WhatsApp</p>
                  <p className="text-white font-semibold text-sm">(32) 99816-4196</p>
                </div>
              </a>

              <a
                href="https://instagram.com/projeta.eng"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-[#1a2540] hover:border-[#f97316]/50 bg-[#0d1426] px-5 py-4 transition-all duration-200"
              >
                <div className="w-10 h-10 bg-[#f97316]/10 flex items-center justify-center flex-shrink-0">
                  <Instagram size={18} className="text-[#f97316]" />
                </div>
                <div>
                  <p className="text-[#6b7280] text-xs mb-0.5">Instagram</p>
                  <p className="text-white font-semibold text-sm">@projeta.eng</p>
                </div>
              </a>

              <a
                href="mailto:contato@projeta3djf.com"
                className="group flex items-center gap-4 border border-[#1a2540] hover:border-[#f97316]/50 bg-[#0d1426] px-5 py-4 transition-all duration-200"
              >
                <div className="w-10 h-10 bg-[#f97316]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[#f97316]" />
                </div>
                <div>
                  <p className="text-[#6b7280] text-xs mb-0.5">E-mail</p>
                  <p className="text-white font-semibold text-sm">contato@projeta3djf.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-[#0d1426] border border-[#1a2540] p-8">
            <h3 className="text-white font-bold text-xl mb-6">Solicitar Orçamento</h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <CheckCircle size={48} className="text-[#f97316]" />
                <h4 className="text-white font-bold text-xl">Solicitação Enviada!</h4>
                <p className="text-[#9ca3af] text-sm max-w-xs">
                  Recebemos sua mensagem e entraremos em contato em breve com seu orçamento personalizado.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-[#f97316] border border-[#f97316]/40 hover:bg-[#f97316]/10 px-6 py-2 text-sm font-medium transition-colors"
                >
                  Enviar Novo Orçamento
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                  className={inputClass}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className={inputClass}
                  />
                  <input
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    placeholder="(32) 99999-9999"
                    className={inputClass}
                  />
                </div>

                <select
                  name="servico"
                  value={form.servico}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled>Selecione o serviço</option>
                  <option value="modelagem-3d">Modelagem 3D & CAD</option>
                  <option value="impressao-3d">Impressão 3D Personalizada</option>
                  <option value="prototipagem">Prototipagem de Engenharia</option>
                  <option value="engenharia-reversa">Engenharia Reversa</option>
                  <option value="projetos-mecanicos">Projetos Mecânicos</option>
                  <option value="outro">Outro</option>
                </select>

                <textarea
                  name="descricao"
                  value={form.descricao}
                  onChange={handleChange}
                  placeholder="Descreva seu projeto, peça ou necessidade em detalhes..."
                  rows={5}
                  required
                  className={`${inputClass} resize-none`}
                />

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm border border-red-400/20 bg-red-400/5 px-4 py-3">
                    <AlertCircle size={16} />
                    Erro ao enviar. Tente novamente ou nos contate pelo WhatsApp.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group flex items-center justify-center gap-3 bg-[#f97316] hover:bg-[#ea6910] disabled:opacity-60 text-white font-bold py-4 transition-all duration-200 hover:shadow-[0_0_24px_rgba(249,115,22,0.4)] mt-2"
                >
                  {status === 'loading' ? (
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Enviar Solicitação
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-[#374151] text-xs text-center">
                  Respondemos em até 24 horas no horário comercial.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
