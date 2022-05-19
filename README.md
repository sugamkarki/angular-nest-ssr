![MEAN](https://res.cloudinary.com/dnpgh1vhi/image/upload/v1615640124/logo1_gvrmpd.svg)

# myapp template

![Lines of code](https://img.shields.io/tokei/lines/github/pararell/myapp_mean)
![GitHub repo size](https://img.shields.io/github/repo-size/pararell/myapp_mean)
![GitHub package.json version](https://img.shields.io/github/package-json/v/pararell/myapp_mean)
![GitHub Repo stars](https://img.shields.io/github/stars/pararell/myapp_mean?style=social)

## Server : <img src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" alt="nest.js" width="50"/> Nest.js with Express and <img src="https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" alt="mongoDB" width="150"> MongoDB (Mongoose)

## Client : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" alt="angular" width="60"> Angular (Server-side rendering)

## Description

- myapp with products and administration
- Typescript stack with decorators, use MongoDB and mongoose schemas, JWT Passport
- Theming with css variables

![myapp-mean](https://res.cloudinary.com/dnpgh1vhi/image/upload/v1629725636/myapp-mean.png)

## Test it

- smrtic.eu - dashboard test - email: test@miroslavsmrtic.sk , password: test123456
- more info in blog http://svelte.smrtic.eu/blogs

<img alt="myapp-mean setup" src="https://res.cloudinary.com/dnpgh1vhi/image/upload/v1629726575/Isometric_illustration_design_concept_loading_and_maintenance_process_kjtxck.jpg" height="200" style="margin: 0; padding: 0;">

## Installation

One package.json contain now all neccessary for Nest and Angular, so server-side rendering with Angular is possible

```bash
$ npm install
```

## Running the app

```bash
# development - start BE - port 4000
$ npm run start

# development - start FE - port 3000
$ npm run start:client

# watch mode server
$ npm run start:dev

# build ssr, watch for changes doesnt work well now
$ npm run dev:ssr

# build ssr and serve
$ npm run build:ssr
$ npm run serve:ssr
```
