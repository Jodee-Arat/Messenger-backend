MesArat is a secure messaging web application that leverages modern cryptographic algorithms and real-time communication via GraphQL subscriptions. This repository contains the backend part of the project.

🚀 Backend Features
🔑 Account and session management

💬 Support for multiple chats and messages

🔐 Storage of cryptographic data (keys, signatures)

🛡️ Authorization using decorators and guards

📡 GraphQL API with subscriptions

🗂️ File storage via Selectel S3

🧾 Persistent storage using PostgreSQL and Prisma ORM

⚡ Session management using Redis for fast and scalable authentication

🔐 Security
User sessions are stored in Redis for secure and efficient validation.

Protected endpoints use Guards and custom decorators to enforce access control.

Cryptographic operations (Diffie-Hellman, DES, RSA) are part of the backend logic, including key management and signature verification.

🧱 Core Entities
Account – user data and public keys

Session – active user authentication information

Chat – communication channels between users

Message – encrypted text, files, signatures

Cryptography – key exchange parameters, signatures, encryption metadata

🛠️ Tech Stack
Node.js + NestJS

GraphQL (Apollo Server)

PostgreSQL + Prisma (ORM)

Redis – for session storage

Selectel S3 – for storing files and attachments

Web Crypto API — used for encryption and decryption with DES.
Other algorithms (RSA, Diffie-Hellman) are implemented manually without external libraries

Docker – for containerization (optional)
