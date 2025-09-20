# MesArat Backend

MesArat is a secure web messaging application that leverages modern cryptographic algorithms and real-time communication via GraphQL subscriptions. This repository contains the backend part of the project, designed to support both corporate and regular users with a focus on security, scalability, and flexibility.

---

## 🚀 Backend Features

- 🔑 Account and session management
- 💬 Support for multiple chats, groups, and messages
- 🛡️ Role-based access control using Guards and custom decorators
- 📡 GraphQL API with subscriptions for real-time communication and notifications
- 🗂️ File storage integrated with Selectel S3 — a reliable and scalable solution
- 🧾 Persistent data storage using PostgreSQL and Prisma ORM
- ⚡ Fast and scalable session management using Redis
- 🏢 Corporate-oriented features:
  - Organization of users into groups and departments
  - Granular access control to regulate employee communications
  - Audit and compliance mechanisms for security policies

---

## 🔒 Security and Privacy

- User sessions are securely stored and validated in Redis for protection and high performance
- Protected endpoints use Guards and decorators to prevent unauthorized access
- Secure management of cryptographic keys and signatures
- Planned features:
  - Secret chats with end-to-end encryption
  - Two-factor authentication and enhanced privacy settings
  - Audit logging and administrative controls for corporate management

---

## 🧱 Core Entities

- **Account:** user data and public cryptographic keys
- **Session:** active authentication tokens and session metadata
- **Group:** organizational units such as companies or teams
- **Chat:** communication channels within groups or between users
- **Message:** encrypted texts, files, and digital signatures

---

## 🛠️ Technology Stack

- **Node.js + NestJS** — scalable modular backend framework
- **GraphQL (Apollo Server)** — flexible API with support for real-time subscriptions
- **PostgreSQL** — reliable relational database
- **Prisma ORM** — type-safe database client and migration tool
- **Redis** — high-performance session storage and caching
- **Selectel S3 (via AWS SDK)** — object storage for files and attachments compatible with S3 API
- **Docker** — containerization for easy deployment and environment setup
- **Security and utilities:**
  - NestJS Guards and decorators for access control
  - Configuration management with `@nestjs/config` and dotenv
  - Encryption with crypto-js and Argon2 for password hashing
- **Additional libraries:**
  - Passport + passport-jwt for JWT authentication
  - graphql-upload for file uploads via GraphQL
  - device-detector-js for device information detection
  - sharp for image processing
  - class-validator and class-transformer for data validation and transformation
  - rxjs for reactive programming
  - i18n-iso-countries for international country and localization support
- **Development tools:**
  - TypeScript 5 and ts-node for TS development
  - ESLint, Prettier, and plugins for code standardization
  - Jest and supertest for testing
  - SWC for fast compilation and bundling
  - Nest CLI and schematics for code generation

---

## 🚧 Current Project Status

This is the **final backend version** before starting mobile application development. The backend is fully ready to support the web frontend and future mobile clients, ensuring synchronization, security, and scalability.

---

## 🤝 Contribution

- Discuss architecture, security, and new features

---

If you have any questions or suggestions, feel free to reach out!
