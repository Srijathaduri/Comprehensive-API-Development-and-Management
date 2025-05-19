# 📘 User Management API Documentation

## 📌 Overview
This RESTful API allows clients to perform Create, Read, Update, and Delete (CRUD) operations on user data. It is secured using JWT-based authentication and includes performance optimization and proper error handling.

---

## 🔐 Authentication
- All endpoints are protected with JWT tokens.
- Use `/login` to obtain a token by providing valid credentials.
- Include the token in the `Authorization` header as:  
  `Bearer <your-token>`

---

## 🧪 Authentication Endpoint

### POST `/login`
**Description:** Authenticate user and receive JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
# User Management API Documentation

## 🔐 Authentication
This API does not use authentication in development. For production, implement JWT or API keys to protect endpoints.

---





### 1. Create User

**POST** `/api/users/`

Create a new user.

**Request Body:**
```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "phone": "9876543210"
}

Success Response: 201 Created
{
  "_id": "12345",
  "name": "Alice",
  "email": "alice@example.com",
  "phone": "9876543210"
}

Error Response: 400 Bad Request

json
{ "error": "All fields are required" }

2. Get All Users
GET /api/users/

Fetch all users (cached for 60 seconds).

Success Response: 200 OK
json

[
  { "_id": "1", "name": "Alice", "email": "alice@example.com" },
  { "_id": "2", "name": "Bob", "email": "bob@example.com" }
]

3. Get User by ID
GET /api/users/:id

Fetch a specific user by ID.

Success Response: 200 OK

json

{
  "_id": "1",
  "name": "Alice",
  "email": "alice@example.com",
  "phone": "9876543210"
}
Error Response: 404 Not Found

json
{ "error": "User not found" }



4. Update User
PUT /api/users/:id

Update user by ID.

Request Body: (example)

json

{ "email": "newalice@example.com" }
Success Response: 200 OK

json

{
  "_id": "1",
  "name": "Alice",
  "email": "newalice@example.com",
  "phone": "9876543210"
}

5. Delete User
DELETE /api/users/:id

Delete a user by ID.

Success Response: 200 OK

json

{ "message": "User deleted successfully" }
Error Response: 404 Not Found

json

{ "error": "User not found" }


---

This polished markdown will make your documentation crystal clear, professional, and ready for submission or public use.

Want me to help you draft the Authentication section next with JWT details?
