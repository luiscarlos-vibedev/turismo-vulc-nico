export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { nome, email, telefone, mensagem, _honeypot } = req.body;

  // Honeypot check
  if (_honeypot) {
    return res.status(400).json({ error: 'Spam detected' });
  }

  // Basic validation
  if (!nome || !email || !telefone || !mensagem) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Acme <onboarding@resend.dev>',
        to: ['contato@turismovulcanico.tur.br'],
        subject: `Novo Contato Site: ${nome}`,
        html: `<p><strong>Nome:</strong> ${nome}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Telefone:</strong> ${telefone}</p>
               <p><strong>Mensagem:</strong> ${mensagem}</p>`,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
