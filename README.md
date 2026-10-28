# Evelyn Studio de Dança — site

Site institucional do Evelyn Studio de Dança (Franca/SP), feito em **Next.js 16** (App Router, Cache Components), **React 19**, **Tailwind CSS 4** e **framer-motion**.

## Rodar localmente

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # build de produção
pnpm lint
```

## Publicar na Vercel

1. Suba o repositório para o GitHub e importe o projeto na Vercel (framework: Next.js, gerenciador: pnpm — detectado automaticamente).
2. Em **Settings → Environment Variables**, crie `NEXT_PUBLIC_WHATSAPP` com o número da escola (só dígitos, com DDI e DDD, ex.: `5516999999999`).
3. O endereço do site (sitemap, links canônicos, imagem de compartilhamento) vem automaticamente do domínio de produção da Vercel. Para forçar outro, defina `NEXT_PUBLIC_SITE_URL` (ex.: `https://www.evelynstudiodedanca.com.br`).

## Onde editar o conteúdo

| O quê | Arquivo |
| --- | --- |
| Contatos, endereço, horários, redes, WhatsApp | `src/lib/data.ts` (`siteConfig`) |
| Modalidades (texto, faixa etária, cor, foto) | `src/lib/data.ts` (`modalidades`) |
| Equipe | `src/lib/data.ts` (`equipe`) |
| Parceiros | `src/lib/data.ts` (`parceiros`) |
| Espetáculos e fotos | `src/lib/images.ts` + `public/images/espetaculos/` |
| Cenários para locação, valor e condições | `src/lib/cenarios.ts` + `public/images/cenarios/<slug>/` |
| Catálogo de cenários em PDF | `public/catalogo-cenarios-evelyn-studio.pdf` |
| Cores, fontes e estilos base | `src/app/globals.css` |

## Estrutura

- `src/app/` — páginas (uma pasta por rota), `sitemap.ts`, `robots.ts`, ícones e imagem de compartilhamento.
- `src/components/` — componentes compartilhados; `home/`, `modalidades/` e `cenarios/` agrupam os específicos.
- `public/images/` — fotos (as imagens são otimizadas automaticamente pelo `next/image`).
