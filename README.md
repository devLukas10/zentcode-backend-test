# Zencode Talently API

API desenvolvida para gerenciamento interno de talentos e candidatos da plataforma **Zencode Talently**.

O projeto utiliza armazenamento em memória (DTO + Array) e não depende de banco de dados tradicional.

---

## 📌 Descrição

Zencode Talently é uma ferramenta para:

- Gerenciar candidatos
- Registrar talentos manualmente
- Buscar candidatos por qualquer campo
- Atualizar ou remover registros
- Controlar acesso via autenticação Bearer Token

O objetivo é organizar talentos internos e futuros da Zencode de forma simples e estruturada.

---

## 🧱 Arquitetura

O projeto utiliza:

- DTO (Data Transfer Objects)
- Classes Model com métodos de manipulação
- Armazenamento em memória (`db[]`)
- Autenticação via Bearer Token (exceto login)

---

## 🔐 Autenticação

Todos endpoints (exceto login) exigem:



O endpoint `/api/v1/auth_login_user` retorna o token de autenticação.

---

## 🚀 Endpoints

### 🔓 Público

- `POST /api/v1/auth_login_user`

---

### 🔒 Protegidos

- `GET /api/v1/user_find_account`
- `POST /api/v1/candidate_create`
- `GET /api/v1/candidate_find_all`
- `GET /api/v1/candidate_find_one?search=value`
- `POST /api/v1/candidate_updateOne`
- `POST /api/v1/candidate_destroyOne?uid=value`

---

## 📦 Modelo de Dados

### User

```ts
{
  firstname?: string;
  lastname?: string;
  email?: string;
  picture_uri?: string;
  password?: string;
  uid?: string;
  created_at?: number;
}
```

### Candidate
```ts
{
  uid?: string;
  id?: number;
  picture?: string | null;
  fullname?: string;
  number?: string;
  email?: string;
  address?: string;
  position?: string;
  level?: string;
  time_availabled?: string;
  estimat_salary?: string;
  experience_years?: string;
  current_company?: string;
  technlogies?: string;
  likendin?: string;
  github?: string;
  web_porfolio?: string;
  cv_uri?: string;
  status?: string;
  created_at?: number;
}
```


🔎 Busca Dinâmica

O método findOne realiza busca em qualquer campo do objeto:

```ts
Object.values(obj).some(value =>
  String(value).toLowerCase().includes(search.toLowerCase())
)
```

`Funciona de forma semelhante a um LIKE do SQL.`

### ⚠️ Observação Importante

O banco é apenas um array em memória.

Ao reiniciar o servidor, os dados são perdidos.

Projeto criado para fins de teste técnico.

### 🛠 Tecnologias

- TypeScript
- Node.js
- Express
- DTO Pattern

- Swagger (documentação)
📄 Documentação
A documentação da API está disponível via Swagger UI.


👨‍💻 Autor
Fernando Lucas
Zencode Talently Project