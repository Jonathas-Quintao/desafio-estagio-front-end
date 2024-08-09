# Desafio estágio Front-end

Esse é um projeto desenvolvido para uma vaga de estágio front-end!

Para instalação, basta clonar o projeto e realiar um npm i
Após isso utilizar o npm run dev

## Libs utilizadas

- Chart.js
- DatePicker
- Vuetify
- DateFns


## Gráfico

A página inicial é composta por um DatePicker, o qual o usuário escolhe o range de dias e é plotado um gráfico com o Chart.js com base no Json fornecido pela TECSCI. Foi utilizada a Date-fns para formatação da data.

## API IBGE

Há a conexão, por meio do axios, na API do IBGE na parte de países. É realizado um get e os dados obtidos são plotados em uma tabela.

## Responsividade

A aplicação é totalmente responsiva, e inclui um dark-mode.

## Pinia
Foi utilizado o Pinia para gereciar o light-mode e dark-mode, além de passar o título para a página em destaque no menu.

## Vuetify
Foram utilizados os componentes para fazer a app-bar, a navegação drawer e os icones.

## Rotas
Foi utilizado o Vue Route para criar a navegação de rotas.

## Vercel 
Foi utilizado a vercel para hospedagem da aplicação.
