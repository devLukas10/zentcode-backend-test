# Zencode Talently API

API desenvolvida para gerenciamento interno de talentos e candidatos da plataforma **Zencode Talently**.


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
- Armazenamento PosgreSql
- Autenticação via Bearer Token (exceto login)

---

## 🔐 Autenticação

- **Login:** `/api/v1/auth_login_user` → **não requer token**
- **Demais rotas:** requere **Bearer Token** no header
```http
Authorization: Bearer <TOKEN>

O endpoint `/api/v1/auth_login_user` retorna o token de autenticação.

---

## 🚀 Endpoints

### 🔓 Público

- `POST /api/v1/auth_login_user`

---

### 🔒 Protegidos

- `GET /api/v1/user_find_account`
- `POST /api/v1/candidate_create`
- `POST /api/v1/candidate_find_all`
- `POST /api/v1/candidate_find_one?search=value`
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

Projeto criado para fins de teste técnico.

### 🛠 Tecnologias

- TypeScript
- Node.js
- Express
- PostgresSQL
- Multer
- JWT
- Cors



👨‍💻 Autor
Fernando Lucas
Zencode Talently Project