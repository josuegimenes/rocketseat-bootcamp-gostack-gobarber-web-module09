<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-06?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

# Módulo 9: Aplicação Web – GoBarber

Frontend GoBarber - Sistema de barbearia para agendamento de serviços.

## Passo a passo das instalações de todas as bibliotecas e plugins:

### 1º Passo: Criar projeto

```
npx create-react-app my-app ou yarn create-app my-app
```

### 2º Passo: Rodar yarn para atualizar e resolver pacotes

```
yarn
```

### 3º Passo: Configurar EditorConfig

Crie o arquivo **.editorconfig** pelo menu de contexto do vscode.

```js
root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

### 4º Passo: Instalar e Configurar Eslint em ambiente de dev.

Usado para informar erros no código

```
yarn add eslint -D
```

#### Iniciar Configurações:

```
yarn add eslint –init
```

```
	To check syntax, find problems, and enforce code style
	JavaScript modules (import/export)
	React
	Does your project use TypeScript? (y/N) N
	(*) Browser
	Use a popular style guide
	Airbnb (https://github.com/airbnb/javascript)
	JavaScript
	Would you like to install them now with npm? (Y/n) Y
```

#### Configurações Finais:

Excluir arquivo **package-lock.json**.
Executar `yarn` na raiz do projeto para atualizar as dependências.

### 5º Passo: Instalar e Configurar Eslint/Prettier em Ambiente Dev.

Prettier é usado para formatar e deixar visualmente melhor o código. E todas as bibliotecas abaixo são para que todos se comuniquem e sejam relacionados, até mesmo o babel-eslint que integra a versão mais atualizada do JavaScript.

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

### 6º Passo: Instalar React Router Dom.

Usado para navegação web

```
yarn add react-router-dom
```

### 7º Passo: Instalar History.

Usado para navegação entre telas

```
yarn add history
```

### 8º Passo: Instalar Reactotron.

Usado para debug

```
yarn add reactotron-react-js
```

### 9º Passo: Instalar PropTypes.

Usado para validação de propriedades

```
yarn add prop-types
```

### 10º Passo: Instalar Styled Components.

Usado para estilização das páginas

```
yarn add styled-components
```

### 10º Passo: Instalar Styled Components.

Usado para estilização das páginas

```
yarn add styled-components
```

### 11º Passo: Instalar Root Import em ambiente dev.

Usado para simplificar os caminhos das importações dos arquivos no app

```
yarn add customize-cra react-app-rewired -D
```

Depois crie o arquivo na raiz do projeto **config-overrides.js**

```js
const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);
```
A configuração será aplicada no diretório raiz **src**.

E a importação é aplicada assim:

`import AuthLayout from '~/pages/_layouts/auth';`

E depois instale o próximo plugin em ambiente dev:

```
yarn add babel-plugin-root-import -D
```

E para ser entendido pelo eslint instale:

```
yarn add eslint-import-resolver-babel-plugin-root-import -D
```

Inserir essas configurações após as rules do **.eslintrc.js**:

```js
settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      },
    },
  },
```

Para o vscode encontrar o arquivo, crie o arquivo **jsconfig.json** na raiz do projeto:

```js
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "~/*": ["*"],
    }
  }
}
```

### 12º Passo: Instalar Polished.

Usado para trabalhar com cores dentro do plugin Styled Components

```
yarn add polished
```

### 13º Passo: Instalar Unform.

Biblioteca da Rocketseat para deixar mais performático os formulários

```
yarn add @rocketseat/unform
```

### 14º Passo: Instalar Yup.

Usado para validação front-end e back-end

```
yarn add yup
```

### 15º Passo: Instalar várias bibliotecas.

```
yarn add redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer
```

### 16º Passo: Instalar Axios.

Usado para fazer requisições APIs

```
yarn add axios
```

### 17º Passo: Instalar Redux Persist.

Usado para armazenar dados básicos de autenticação do usuário mesmo após atualização ou fechamento do navegador

```
yarn add redux-persist
```

### 18º Passo: Instalar React Toastify.

Usado para apresentar notificações estilizadas

```
yarn add react-toastify
```

### 19º Passo: Instalar React Icons.

Biblioteca de ícones

```
yarn add react-icons
```

### 20º Passo: Instalar React Perfect Scrollbar.

Usado para aplicar scrollbar

```
yarn add react-perfect-scrollbar
```

### 21º Passo: Instalar Date FNS.

Biblioteca usada para manipulação de data/hora

```
yarn add date-fns@next `– @next instala na atual versão`
```

### 22º Passo: Instalar Date FNS-TZ.

Biblioteca usada para lidar com Time Zones de data/hora

```
yarn add date-fns-tz
```

### Aplicação

![GoBarberWeb](assets/GoBarberWeb.gif)
