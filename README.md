<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->
# NETFLIX SERVER - Projeto do M??DULO 5

O projeto ?? inspirado na Netflix, plataforma de streaming de filmes e s??ries.
O objetivo ?? criar uma API backend com usu??rios, perfis, filmes e g??neros para que usu??rios possam se cadastrar, selecionar diferentes perfis (semelhante ao sistema de perfis da Netflix) e acessar os filmes dispon??veis.
Assim que o login for feito, a tela principal exibir?? os filmes dispon??veis, seguindo os exemplos a seguir. ?? poss??vel favoritar os filmes, sendo que a lista de filmes favoritos ?? individual para cada perfil. Esses filmes ir??o compor a primeira sess??o da p??gina, sob o t??tulo de "filmes Favoritos". Logo ap??s essa se????o, temos as se????es dos outros filmes, classificados por g??nero.

## Pr??-requisitos

Backend com a estrutura b??sica seguinte:

API backend com usu??rios, perfis, filmes e g??neros.

- Estrutura da Entidade: Usu??rios (Users)
- Name;
- Email;
- Password;
- CPF;
- isAdmin;

Estrutura da Entidade: Perfis (Profiles)

- Title;
- ImageURL;
- Estrutura da Entidade: filmes (Movies)
- Title;
- CoverImageUrl;
- Description;
- Year;
- ImdbScore (0 a 5);
- TrailerYouTubeUrl;

Estrutura da Entidade: G??neros (Genres)

- Name;
- Rela????es
- Um usu??rio x muitos perfis;
- Muitos filmes x muitos g??neros;
- Muitos perfis x muitos filmes (filmes favoritos);

Endpoints

- [Create] Usu??rios (n??o precisa de autentica????o);
- [AUTH] [GET] Homepage: lista de filmes favoritos; lista de filmes, classificados por g??nero;
- [AUTH] [CRUD] Perfis; Favoritar jogo;
- [AUTH] [ADMIN] [CRUD] Usu??rios (apenas admins podem gerenciar usu??rios);
- [AUTH] [ADMIN] [CRUD] filmes (apenas admins podem criar filmes);
- [AUTH] [ADMIN] [CRUD] G??neros (apenas admins podem criar g??neros).

Requisitos

- Valida????o de dados em todos os endpoints com class-validator;
- Status Code corretos em todos os endpoints:
- 200, 201, 400, 404, etc.
- Persist??ncia de Dados no SQL com Prisma;
- Formata????o do c??digo utilizando o Prettier/ESLint;
- Documenta????o dos endpoints com Swagger;
- Diagrama de relacionamentos do banco de dados;
- Cors habilitado;
- Deploy do projeto;
- Deploy do banco de dados.

?? obrigat??rio estar previamente instalado:

> - **Node** com vers??o superior ou igual que 16.15.0 - [Node Download](https://nodejs.org/pt-br/download/)
> - **NPM** com vers??o superior ou igual que 8.0.0 - [Npm Download](https://www.npmjs.com/package/download)
> - **Visual Studio Code** com vers??o superior ou igual que 1.67.2 - [Visual Studio Code Download](https://code.visualstudio.com/download)
> - **Thunder Client** com vers??o superior ou igual que 11.14.00 - [Thunder Client Download](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
> - **PostgreSQL** com vers??o superior ou igual que 1.67.2 - [PostgreSQL Downloads](https://www.postgresql.org/download/)

## Instala????o

Link da branch do projeto no github

```bash
https://github.com/astolfovalentim/netflix-server.git
```

> Acesse a pasta do projeto seu terminal:

```bash
 	cd [Nome da pasta do seu projeto]
```

> Instala????o - digite o seguinte comando:

```bash
$ npm install
```

<<<<<<< HEAD

## Clone

```bash
$ git clone https://github.com/astolfovalentim/netflix-server.git
```

## Running the app

=======

> Instala????o -do NestJS CLI:

```bash
$ npm i -g @nestjs/cli
```

## Execu????o

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

> A aplica????o estar?? dispon??vel para visualiza????o em seu navegador, caso isso n??o aconte??a automaticamente, abra o navegador no seguinte endere??o: _localhost:3333_

## Swagger

Todas as rotas est??o no swagger

```bash
https://netflix-server-back.herokuapp.com/api
```

## PrismaStudio

```bash
http://localhost:5555/
```

## Autor

> - **Astolfo Valentim** - [Github](https://github.com/astolfovalentim)

## Licen??a

> MIT License (MIT)
