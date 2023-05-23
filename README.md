## Descrição do projeto

É um projeto para guiar indivíduos no caminho certo de Allah, ao saber os horários das orações de acordo com o Pais em que se encontra.

## Funcionalidades

Protejo de Guia de horário para horação Islamica:

- Lista todos os horários de todas as orações que deve realizar durante o dia por cada Pais
- Informa a data atual
- Informa a localização
- O usuário pode direcionar para uma tela de orientação de como realizar as orações
- Integração com Api de tempo real para buscar os horários corretos das orações
- Camera nativa, podendo tirar fotos e salvar essas fotos na sua galeria

## Tecnologia usada

- React
- TypeScript
- Ionic
- Hook
- testing-library
- Axios
- cypress
- Vite
- Prettier
- Eslint

## Scripts disponíveis

Deve criar um arquivo na sua pasta raiz chamado de .env e colocar os seguinte conteúdo:

- VITE_API_URL=https://muslimsalat.p.rapidapi.com
- VITE_API_KEY=f0a3167529msh08870d47bec6b77p174b35jsnb7c40eaeb9e9
- VITE_API_HOST=muslimsalat.p.rapidapi.com

Executar o projeto no navegador:

- ionic serve

inicializa o projeto em modo de desenvolvimento. Abre em http://localhost:8100/PrayerTime :

## Arquitetura

- src
  - assets
  - components
  - hook
  - pages
  - services
  - theme

### Pasta SRC

A pasta Source, a fonte de tudo que conterá nossa aplicação.

## Assets

Essa pasta contém as imagens e ícones.

## Theme

Essa pasta contém os css globais da aplicação

## Hook

Essa pasta contém todas as logicas que podem ser reutilizadas pelo projeto.

### Services

Esta pasta é responsável por conter todos os serviços da aplicação garantindo que todo código que faça requisições para apis sejam armazenados aqui.

## Camadas de apresentação

### Pages

As pages podem ser consideradas container, a parte "inteligente". Ele carrega os dados, manipula o state e entrega tudo mastigado para o componente de apresentação exibí-los.

### Components

Um componente de apresentação (presentational components), se trata de um componente reutilizável. Todos os dados que ele precisa para fazer o render ele recebe via props.
