# ShinshukanPB

Site institucional da academia **Tigre Branco (Shinshukan PB)**, com foco na apresentacao da escola, modalidades, genealogia e canais de contato.

## Visao geral

O projeto e um site estatico com multiplas paginas em HTML, estilizadas com SCSS/CSS e bibliotecas carregadas por CDN.

## Tecnologias

- HTML5
- SCSS + CSS
- JavaScript
- Bootstrap 5.2.2 (CDN)
- Bootstrap Icons 1.9.1 (CDN)

## Estrutura do projeto

```text
ShinshukanPB/
|-- index.html
|-- html/
|   |-- karate.html
|   |-- karateGenealogia.html
|   |-- kobudo.html
|   `-- contato.html
|-- scss/
|   |-- style.scss
|   |-- communElements/
|   `-- pages/
|-- css/
|   |-- style.css
|   `-- style.css.map
`-- img/
```

## Como executar localmente

Por ser um projeto estatico, voce pode abrir `index.html` diretamente no navegador.

Para testar rotas relativas e o formulario de contato com mais previsibilidade, prefira um servidor local:

```bash
cd ShinshukanPB
python -m http.server 8000
```

Depois acesse:

- `http://localhost:8000/index.html`

## Estilos

O arquivo servido pelas paginas e:

- `css/style.css`

As fontes SCSS ficam em `scss/`. Quando houver alteracoes nessas fontes, gere novamente o CSS:

```bash
sass scss/style.scss css/style.css --style=expanded
```

## Pagina de contato

A pagina `html/contato.html` possui:

- envio por email via FormSubmit
- envio por WhatsApp com mensagem pre-preenchida
- validacao de campos no cliente
- feedback visual sem recarregar a pagina

No primeiro uso do FormSubmit, e necessario confirmar o endereco de email de destino pelo fluxo do proprio servico.

## Melhorias recentes

- navegacao mais acessivel e responsiva
- ajustes de semantica e foco por teclado
- correcoes de links e caminhos relativos
- melhorias visuais e funcionais no formulario de contato

## Proximos passos sugeridos

- otimizar imagens e definir dimensoes explicitas nas midias principais
- configurar deploy em hospedagem estatica
- adicionar analytics
- criar uma rotina simples de validacao HTML/CSS antes de publicar

## Licenca

Definir conforme a preferencia do mantenedor.
