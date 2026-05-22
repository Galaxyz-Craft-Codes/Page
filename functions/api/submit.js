// functions/api/submit.js

export async function onRequestPost(context) {
  try {
    const input = await context.request.formData();
    const data = Object.fromEntries(input.entries());

    const webhookUrl = context.env.DISCORD_HOOK;

    if (!webhookUrl) {
      return new Response("Configuração do servidor ausente.", { status: 500 });
    }

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `📩 **Novo formulário recebido!**\n**Nome:** ${data.nome}\n**Email:** ${data.email}\n**Mensagem:** ${data.mensagem}`
      })
    });

    return Response.redirect(`${new URL(context.request.url).origin}/sucesso.html`, 303);

  } catch (err) {
    return new Response("Erro ao processar o formulário.", { status: 500 });
  }
}
