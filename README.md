# help-pet-front

## Como começar a contribuir
> Preencha as tópicos vazios desse readme de acordo com a função do seu grupo e faça alterações na seção estrutura de pastas conforme sejam feitas alterações.

### Pré-requisitos
É necessario ter:
  - Node - para rodar o projeto e utilizar as ferramentas do react.
  - npm - para instalar recursos e depêndencias do projeto.
  - git - para o versionamento do código.
  - Uma IDE de sua preferência.

## Como rodar o projeto
1. Clone este repositório. 
2. Abra o terminal dentro da pasta.
3. instale as depêndencias do projeto com o comando `` npm install ``.
4. Inicie o projeto com o comando `` npm run dev `` para rodar localmente.

## Estrutura das pastas
```
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   └── .gitkeep
│   │   └── images/
│   │       └── .gitkeep
│   ├── components/
│   │   └── .gitkeep
│   ├── pages/
│   │   └── .gitkeep
│   ├── styles/
│   │   └── reset.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Convenção de nomenclatura
> Padrão de nomeação que deve ser seguido em todas as etapas de desenvolvimento.

### Linguagem
- A ser decidido

### Arquivos e pastas
- kebab-case.
- Com exceção dos arquivos na pasta .github que devem ser todos em maiúsculo todas as pastas e arquivos devem permanecer neste padrão.
- Exemplo:

  ```
    ├── .github/
    │   ├── CODEOWNERS 
    │   └── PULL_REQUEST_TEMPLATE.md 
    └──── src/ 
           ├──assets
           └──pages
                └── page-one.html 
  ```

### Variáveis e funções
- camelCase.
- Nomes de variáveis e funções no front e back end devem seguir este padrão.
- Exemplo:

  ```jsx
  <!-- JavaScript -->
    let accessIcon = document.getElementsByClassName("accessibility-icon")[0]
    let accessOpen = document.getElementsByClassName("accessibility-open")[0]

    function closeMenu() {
    accessOpen.style.display = "";
    accessIcon.style.display = "flex";
    }
  ```

### Componentes react
- PascalCase.
- Tanto as pastas quanto o nome da função do componente devem seguir este padrão para serem diferenciados de funções normais.
- Exemplos:

  ```
  <!-- Estrutura das pastas -->
    └─── src/
        └── components
            └── Header <- Pasta com H maiúsculo
                ├── index.jsx
                └── style.css 
  ```

  ```jsx
  <!-- Dentro de index.jsx -->
    export default function Header() {

    }
  ```
