# Aplicativo de Gerenciamento de Clientes

## Descrição:

Foi desenvolvido um aplicativo fullstack que permita aos usuários visualizar e criar clientes. O aplicativo consiste em duas partes: o frontend e o backend. O frontend será responsável pela interface do usuário e a comunicação com a API. O backend será responsável pelo armazenamento e gerenciamento dos dados dos clientes.

[Aplicativo.webm](https://github.com/jandui-Rodrigues/test-fullstack/assets/107068156/9a466cb2-ad94-4ed8-b35f-3c30a957344f)

## Requisitos do Frontend:

- [x] Exibir uma listagem de clientes contendo todas as informações conforme o layout fornecido.
- [x] Permitir a criação de um novo cliente através de um formulário.
- [x] Na tela de edição, fornecer alertas para o usuário em caso de dados inválidos.
- [x] Realizar validação de CPF e telefone na tela de edição para garantir dados corretos e consistentes.
- [x] Comunicar-se com a API para obter os dados dos clientes cadastrados.

## Requisitos do Backend:

Criar uma API que ofereça endpoints para:

- [x]  Obter a listagem de clientes cadastrados.
- [x]  Cadastrar um novo cliente com informações válidas.
- [x]  Atualizar informações de cliente existente.
- [x]  Armazenar os dados do cliente de forma persistente, com sugestão de uso do SQLite para essa finalidade.

## Rodando a Aplicação

 <details>
    <summary>
      🐳 Rodando a aplicação com docker
    </summary>
    <br>

Acesse a pasta do projeto no terminal/cmd

    $ cd test-fullstack

inicie o docker compose

    $ docker-compose up -d --build

Para remover os conteiners

    $ docker-compose down

User para verificar os conteiner

    $ docker logs

> O servidor do frontend inciará na porta:3000 - acesse http://localhost:3000
> <br>
> O servidor do back inciará na porta:3001 - acesse http://localhost:3001

</details>


## Qualidade de Código:
O codigo foi Escrito seguindo as boas praticas da comunidade javaScript, no Backend foi ultilizado o padão de desenvolvimento (MVC), um paradiguima da progamação POO, alem de uma arquitetura em conjunto o SOLID.
No front foi seguido, a componentização de elementos, usadas libs para facilitar é agilizar o desenvolvimento.
Por ultimo Todo a aplicação foi dockerizada, podendo subir container individuais, ou orquetra usando docker-compose.

## Bibliotecas é frameworks usados :
- Front end: vite, typeScript, React hook forms, axios, validate, tailwind, lucid react, react-router.
- Backend end: TypeScript, Sequelize, express, MySql.

## Telas:

- [Tela Inicial](https://test-frontend-uolpp.web.app/assets/images/tela-inicial.jpg)
- [Tela de Edição](https://test-frontend-uolpp.web.app/assets/images/tela-edicao.jpg)
