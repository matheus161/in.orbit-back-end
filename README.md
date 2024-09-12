 # NLW POCKET BACK-END

### The project was designed during NLW Pocket Week using the following technologies:

1. **Node.js:** A JavaScript runtime built on Chrome's V8 engine, used for building scalable and efficient network applications.
2. **TypeScript:** A superset of JavaScript that adds static types to the language, enhancing code quality and developer productivity through early error detection and better tooling.
3. **PostgreSQL:** A powerful, open-source relational database management system known for its reliability, feature robustness, and support for advanced data types.
4. **Drizzle:** An Object-Relational Mapping (ORM) tool for PostgreSQL that simplifies database operations by providing an intuitive API for data manipulation.
5. **Fastify:** A fast and low-overhead web framework for Node.js, designed to build high-performance APIs and web applications with minimal overhead.
6. **Day.js:** A lightweight JavaScript library for parsing, validating, manipulating, and formatting dates, offering a simple and immutable API.
7. **Zod:** A TypeScript-first schema validation library that ensures data structures are validated and meet the specified requirements.
8. **Biome:** A modern development tool that integrates linting, formatting, and type-checking into a seamless workflow for JavaScript and TypeScript projects.
9. **Docker:** A platform that enables developers to package applications and their dependencies into containers, ensuring consistency across different environments and simplifying deployment.

# Manual de Execução do Projeto

Este manual descreve os passos necessários para rodar o projeto localmente. Siga as instruções abaixo para configurar e iniciar o projeto corretamente.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (recomenda-se a versão LTS 20.16.0)
- [Docker](https://www.docker.com/) instalado e em execução

## Passos para Rodar o Projeto

1. **Instalar as Dependências**

   Primeiro, instale as dependências do projeto usando o npm. No diretório raiz do projeto, execute o seguinte comando:

   ```bash
   npm install
    
2. **Subir os Containers Docker**

    Inicie os containers Docker necessários para o projeto usando o *docker-compose*. Execute o seguinte comando:

    ```bash
   docker-compose up -d
   
3. **Executar Migrações e Seeds**
 
    Inicie as migrações e o seed. Execute o seguinte comando:
    
    ```bash
   npx drizzle-kit generate
   npm run seed

4. **Execute o projeto**
    
    Execute o projeto com o seguinte comando:
    
    ```bash
    npm run dev
    
