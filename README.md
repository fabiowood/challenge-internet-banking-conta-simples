Resumo:
Este projeto foi desenvolvido para apresentar uma primeira versão de um internet banking para a empresa Conta Simples.

Instruções para Acesso ao Projeto:

1) Realizar um "Clone" do projeto em um diretório local (Git Clone <link do repositório no GitHub>).

2) Acessar o diretório local do projeto pelo terminal do seu computador.

3) Inserir o comando npm start.

4) O usuário será direcionado ao browser automaticamente em: http://localhost:3000

5) A primeira tela do projeto é a de Login. Para acessar a aplicação, é necessário inserir o e-mail do usuário e a senha de 6 dígitos. Esses dados podem ser encontrados na árvore do projeto, no seguinte caminho: src/app-data/bank-account.json

6) O projeto está estruturado da seguinte forma:

- src/app-data: contém os arquivos json utilizados para simular localmente as chamadas de uma API.
- src/component-styles: contém os arquivos .css utilizados para a formatação de estilos e padrões do projeto, em combinação com o Bootstrap e React-Bootstrap.
- src/components: contém os componentes desenvolvidos para o projeto, com destaque para: Login/Home/NavBar/footer/AccountDisplay/AccountTotalDisplay
- src/components/menu-list: contém os componentes que fazem parte do menu na área exclusiva do usuário. Esses componentes podem ser desenvolvidos em uma nova versão.

7) O arquivo package.json contém todas as dependências e packages utilizados para este projeto, e foi criado a partir do Create React App.

Atenciosamente.

Fabio Madeira.

==================================================================================

Standard Git-Hub Instructions:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
