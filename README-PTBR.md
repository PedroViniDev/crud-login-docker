# Sistema CRUD com Login — Docker e Computação em Nuvem

Projeto desenvolvido para a disciplina de Computação em Nuvem e Docker.

A aplicação consiste em um sistema de autenticação com CRUD de usuários, utilizando Docker, MongoDB Atlas e deploy em nuvem com Render.

---

# Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- MongoDB Atlas
- Docker
- Docker Compose
- Render
- EJS
- CSS
- JavaScript
- bcryptjs

---

# Funcionalidades

## Usuário

- Cadastro de conta
- Login com e-mail e senha
- Tema claro e escuro
- Mostrar/ocultar senha
- Alertas visuais modernos
- Interface responsiva

---

## Administrador

Login administrador:

```txt
Email: admin
Senha: 102030
```

O administrador possui:

- Visualização de usuários
- Edição de usuários
- Exclusão de usuários

---

# Estrutura do Projeto

```txt
crud-docker/
├── app/
│   ├── public/
│   │   ├── style.css
│   │   └── theme.js
│   │
│   ├── views/
│   │   ├── login.ejs
│   │   ├── register.ejs
│   │   ├── success.ejs
│   │   ├── admin.ejs
│   │   └── edit.ejs
│   │
│   ├── server.js
│   └── package.json
│
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
└── README.md
```

---

# Dockerfile

Responsável por:
- criar a imagem Docker
- instalar dependências
- configurar ambiente Node.js

---

# Docker Compose

Responsável por:
- subir múltiplos containers
- conectar aplicação e banco
- criar persistência de dados

---

# Persistência de Dados

Foi utilizado Docker Volume para garantir que os dados continuem salvos mesmo após reiniciar os containers.

---

# Banco de Dados Cloud

Foi utilizado MongoDB Atlas para:
- persistência online
- armazenamento em nuvem
- conexão remota
- integração com Render

---

# Deploy Cloud

A aplicação foi publicada utilizando:

- Docker Hub
- Render
- MongoDB Atlas

---

# Arquitetura Final

```txt
Usuário
   ↓
Render
(Container Docker)
   ↓
MongoDB Atlas
(Banco Cloud)
```

---

# Comandos Docker

## Construir imagem

```bash
docker build -t seuusuario/crud-login .
```

---

## Subir containers

```bash
docker compose up --build
```

---

## Parar containers

```bash
docker compose down
```

---

## Enviar imagem para Docker Hub

```bash
docker push seuusuario/crud-login
```

---

# Variável de Ambiente

```env
MONGO_URL=sua_url_mongodb_atlas
```

---

# Deploy no Render

A aplicação utiliza:
- imagem Docker hospedada no Docker Hub
- MongoDB Atlas como banco cloud
- variáveis ambiente para conexão segura

---

# Objetivos do Projeto

- Aprender Docker
- Aprender Docker Compose
- Utilizar computação em nuvem
- Realizar deploy cloud
- Trabalhar com persistência de dados
- Utilizar banco de dados remoto
- Desenvolver aplicação containerizada

---

# Autor

Pedro Vinicius
