# ShinshukanPB

Site institucional da academia **Tigre Branco (Shinshukan PB)**, com foco em apresentação da escola, modalidades (Karatê e Kobu-do), genealogia e canais de contato.

## Visão geral

O projeto é um site estático com múltiplas páginas em HTML, estilização com SCSS/CSS e apoio de bibliotecas via CDN (Bootstrap, Bootstrap Icons e AOS).

## Tecnologias

- HTML5
- SCSS + CSS
- Bootstrap 5 (CDN)
- Bootstrap Icons (CDN)
- AOS (Animate On Scroll)

## Estrutura do projeto

```text
ShinshukanPB/
├── home.html
├── html/
│   ├── karate.html
│   ├── karateGenealogia.html
│   ├── kobudo.html
│   └── contato.html
├── scss/
│   ├── style.scss
│   ├── communElements/
│   └── pages/
├── css/
│   ├── style.css
│   └── style.css.map
└── img/
```

## Como executar localmente

Por ser um projeto estático, você pode abrir diretamente o `home.html` no navegador.

Para melhor experiência (rotas relativas e testes de formulário), prefira um servidor local:

```bash
cd ShinshukanPB
python3 -m http.server 8000
```

Depois acesse:

- `http://localhost:8000/home.html`

## Estilos (SCSS -> CSS)

O CSS carregado pelas páginas é o arquivo:

- `css/style.css`

Quando alterar arquivos em `scss/`, gere novamente o CSS (se tiver Sass instalado):

```bash
sass scss/style.scss css/style.css --style=expanded
```

## Página de contato

A página `html/contato.html` possui:

- Envio por **Email** (FormSubmit, destino: Gmail configurado no formulário)
- Envio por **WhatsApp** com mensagem pré-preenchida
- Validação de campos no cliente
- Feedback visual de sucesso/erro sem recarregar a página

### Observação importante sobre o email

No primeiro uso do FormSubmit, é necessário confirmar o endereço de email de destino pela mensagem enviada pelo serviço.

## Melhorias recentes

- Navegação mais acessível e responsiva
- Ajustes de semântica e foco por teclado
- Otimizações de UX na página de Kobu-do
- Melhorias visuais e funcionais no formulário de contato

## Próximos passos sugeridos

- Configurar domínio e deploy (Netlify, Vercel ou hospedagem tradicional)
- Adicionar compressão/otimização de imagens
- Integrar analytics para medir acessos e conversões
- Criar testes de regressão visual das páginas principais

## Licença

Definir conforme a preferência do mantenedor (uso interno, aberto ou comercial).
