# Documentação dos Testes com Cypress

Este repositório contém testes automatizados para a página inicial do site `https://libercapital.com.br/`. Os testes são realizados usando Cypress e têm como objetivo verificar a integridade dos elementos visuais e funcionais da página.

## Estrutura dos Testes

Os testes estão organizados em diferentes blocos `describe`, cada um focado na área inicial da página. A seguir, descrevi os blocos de testes presentes:

### Bloco: Página Inicial

Este bloco contém todos os testes relacionados à página inicial do site.

#### Testes:

1. **NavBarTests**
   - **Objetivo**: Verificar se os itens da barra de navegação estão visíveis e com o texto correto.
   - **Elementos Verificados**:
     - `Início`
     - `Soluções`
     - `Blog`
     - `Carreiras`
     - `Acessar Portal`
     - `Entrar em contato`

2. **Texts on page**
   - **Objetivo**: Verificar se os textos na página inicial estão corretos e visíveis.
   - **Textos Verificados**:
     - Texto da pagina.

3. **Buttons**
   - **Objetivo**: Verificar a visibilidade e a interatividade dos botões na página.
   - **Elementos Verificados**:
     - Vários botões na página
     - Verifica se estão visíveis, não desativados e clicáveis

4. **Endereco**
   - **Objetivo**: Verificar se o endereço exibido na página está correto.
   - **Elemento Verificado**:
     - Texto do endereço

5. **Contato**
   - **Objetivo**: Verificar se as informações de contato estão corretas.
   - **Elementos Verificados**:
     - E-mail de contato
     - Telefone de contato

6. **Formulario** *(Ignorado)*
   - **Objetivo**: Este teste foi evitado para não gerar spam.
   - **Nota**: O teste está marcado como ignorado (`it.skip`).
## Requisitos

- Node.js (versão recomendada: 14.x ou superior)
- Cypress (versão recomendada: 12.x ou superior)

## Instalação

1. **Clone o repositório**:
   ```bash
   git clone (link)

2. **Navegue para o diretório do projeto:**:

cd (localização do arquivo)

3. **Instale as dependências**
   
npm install



## Execução dos Testes

   npx cypress open

