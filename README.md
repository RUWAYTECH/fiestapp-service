# 🎉 Fiestapp Service

Backend API para la plataforma **Fiestapp** — un marketplace que conecta usuarios con proveedores de servicios para eventos y fiestas.

## 📋 Descripción

Fiestapp Service es una API RESTful construida con [NestJS](https://nestjs.com/) que permite:

- **Gestión de usuarios**: Registro, autenticación (local, Google, Facebook) y perfiles
- **Proveedores**: Registro y administración de proveedores de servicios para eventos
- **Catálogo de servicios**: Categorías y servicios con precios, duración y calificaciones
- **Solicitudes**: Sistema de solicitudes de servicios entre usuarios y proveedores
- **Favoritos**: Marcado de servicios favoritos por los usuarios
- **Ubigeo**: Datos geográficos de Perú (departamentos, provincias, distritos)
- **Imágenes**: Gestión de imágenes con Cloudinary

## 🛠️ Tecnologías

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| [NestJS](https://nestjs.com/) | 11.x | Framework backend |
| [Prisma](https://www.prisma.io/) | 6.x | ORM para PostgreSQL |
| [PostgreSQL](https://www.postgresql.org/) | - | Base de datos |
| [Zod](https://zod.dev/) | 4.x | Validación de esquemas |
| [Cloudinary](https://cloudinary.com/) | - | Gestión de imágenes |
| [Swagger](https://swagger.io/) | - | Documentación API |

## 📁 Estructura del proyecto

```
src/
├── common/          # Decoradores, guards, pipes, DTOs y utilidades compartidas
├── config/          # Configuración de la aplicación
├── database/        # Prisma, seeders y datos iniciales
├── external/        # Servicios externos (Cloudinary)
└── modules/         # Módulos de dominio
    ├── auth/        # Autenticación y JWT
    ├── category/    # Categorías de servicios
    ├── provider/    # Proveedores
    ├── request/     # Solicitudes de servicios
    ├── service/     # Servicios ofrecidos
    ├── ubigeo/      # Datos geográficos
    └── user/        # Usuarios
```

## 🚀 Instalación

### Prerrequisitos

- Node.js 20+
- pnpm
- PostgreSQL

### Configuración

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/RUWAYTECH/fiestapp-service.git
   cd fiestapp-service
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   ```
   
   Editar `.env` con tus credenciales:
   ```env
   # Servidor
   PORT=9500
   
   # Base de datos PostgreSQL
   DATABASE_URL=postgresql://user:password@localhost:5432/db_fiestapp
   
   # JWT
   JWT_SECRET=tu-secret-key-segura
   JWT_EXPIRATION_TIME='1d'
   
   # Google OAuth
   GOOGLE_CLIENT_ID=tu-google-client-id
   GOOGLE_CLIENT_SECRET=tu-google-client-secret
   
   # CORS
   ALLOWED_ORIGINS=http://localhost:3000,http://localhost:4300
   
   # Cloudinary
   CLOUDINARY_CLOUD_NAME=tu-cloud-name
   CLOUDINARY_API_KEY=tu-api-key
   CLOUDINARY_API_SECRET=tu-api-secret
   ```

4. **Generar cliente de Prisma**
   ```bash
   pnpm prisma generate
   ```

5. **Ejecutar migraciones de Prisma**
   ```bash
   pnpm prisma migrate dev
   ```

6. **Poblar la base de datos (opcional)**
   ```bash
   pnpm seed
   ```

## ▶️ Ejecución

```bash
# Desarrollo (watch mode)
pnpm start:dev

# Producción
pnpm build
pnpm start:prod

# Debug
pnpm start:debug
```

## 🧪 Tests

```bash
# Tests unitarios
pnpm test

# Tests e2e
pnpm test:e2e

# Cobertura
pnpm test:cov
```

## 📖 Documentación API

Una vez el servidor esté corriendo, accede a la documentación Swagger en:

```
http://localhost:9500/docs
```

## 🗄️ Base de datos

### Comandos útiles de Prisma

```bash
# Generar cliente Prisma
pnpm prisma generate

# Crear migración
pnpm prisma migrate dev --name nombre_migracion

# Ver estado de migraciones
pnpm prisma migrate status

# Abrir Prisma Studio
pnpm prisma studio

# Resetear base de datos
pnpm prisma migrate reset
```

## 📝 Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `pnpm start` | Inicia la aplicación |
| `pnpm start:dev` | Inicia en modo desarrollo (watch) |
| `pnpm start:prod` | Inicia en modo producción |
| `pnpm build` | Compila el proyecto |
| `pnpm lint` | Ejecuta ESLint |
| `pnpm format` | Formatea código con Prettier |
| `pnpm seed` | Ejecuta los seeders de la BD |
| `pnpm test` | Ejecuta tests unitarios |
| `pnpm test:e2e` | Ejecuta tests end-to-end |

## 📄 Licencia

Este proyecto es privado y pertenece a **RUWAYTECH**.

---

Desarrollado con ❤️ por [RUWAYTECH](https://github.com/RUWAYTECH)
