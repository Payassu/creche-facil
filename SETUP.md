# Creche Fácil - Setup Documentation

## What Has Been Set Up (Phase 1)

### Frontend Architecture

#### Installed Dependencies
- **React Router DOM**: For navigation and routing
- **React Query**: For server state management and caching
- **Zustand**: For client state management
- **React Hook Form**: For form handling
- **Zod**: For validation schemas
- **Axios**: For HTTP requests

#### Project Structure
```
src/
├── components/       # Reusable UI components (to be created)
├── pages/           # Page components
│   ├── parent/      # Parent-specific pages
│   ├── institution/ # Institution-specific pages
│   ├── auth/        # Authentication pages
│   └── shared/      # Shared pages (search, detail)
├── hooks/           # Custom React hooks (to be created)
├── services/        # API service functions
├── types/           # TypeScript type definitions
├── utils/           # Utility functions (to be created)
├── store/           # Zustand stores (to be created)
└── contexts/        # React contexts (to be created)
```

#### Pages Created
- **home_page.tsx**: Landing page with links to search and login
- **institution_search.tsx**: Search and filter institutions
- **institution_detail.tsx**: View detailed information about an institution
- **login.tsx**: Authentication page
- **register.tsx**: User registration page
- **parent_dashboard.tsx**: Dashboard for parents
- **institution_dashboard.tsx**: Dashboard for institutions

#### Services Created
- **api.ts**: Base Axios configuration with interceptors
- **auth.service.ts**: Authentication methods (login, register, getCurrentUser)
- **institution.service.ts**: Institution CRUD operations
- **application.service.ts**: Application management

#### Type Definitions
Complete TypeScript types for:
- User (with roles: PARENT, INSTITUTION)
- Institution
- Application (with statuses)
- Review
- Notification
- Message
- ApplicationField (for custom forms)

### Backend Architecture

#### Installed Dependencies
- **Express**: Web framework
- **Prisma**: ORM for database operations
- **PostgreSQL**: Database (schema defined)
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **multer**: File upload handling
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management

#### Backend Structure
```
server/
├── routes/       # API routes (to be created)
├── controllers/  # Request handlers (to be created)
├── models/       # Database models (via Prisma)
├── middleware/   # Custom middleware (to be created)
├── config/       # Configuration files (to be created)
└── utils/        # Utility functions (to be created)
```

#### Database Schema (Prisma)
Models defined:
- **User**: Parent and institution accounts
- **Institution**: Daycare institution profiles
- **Application**: Applications from parents
- **ApplicationField**: Custom form fields per institution
- **Review**: Ratings and testimonials
- **Notification**: In-app notifications
- **Message**: Communication between parents and institutions

### Configuration Files

#### Environment Variables (.env)
```
PORT=5000
DATABASE_URL=postgresql://...
JWT_SECRET=...
JWT_EXPIRES_IN=7d
MAX_FILE_SIZE=5242880
UPLOAD_DIR=./uploads
```

#### Package Scripts
- `npm run dev`: Start Vite development server (frontend)
- `npm run dev:server`: Start backend server with nodemon
- `npm run build`: Build production bundle
- `npm run lint`: Run ESLint

## Next Steps (Phase 2 & Beyond)

### Phase 2: Authentication
1. Implement authentication routes and controllers
2. Create protected route components
3. Build login and registration forms
4. Add auth context/store

### Phase 3: Parent Features
1. Complete parent dashboard with applications list
2. Build institution search with filters
3. Create institution detail page with all info
4. Implement application submission form
5. Add notification center

### Phase 4: Institution Features
1. Complete institution dashboard
2. Build profile management interface
3. Create application review system
4. Implement custom form builder for application fields

### Phase 5: Additional Features
1. Reviews and ratings system
2. Photo gallery management
3. Messaging system
4. Real-time notifications

## How to Get Started

### 1. Set Up Database
```bash
# Install PostgreSQL locally or use a cloud provider
# Update DATABASE_URL in .env file
# Run Prisma migrations (when ready)
npx prisma migrate dev --name init
npx prisma generate
```

### 2. Start Development Servers

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
npm run dev:server
```

### 3. Access the Application
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Important Notes

- The `.env` file contains development secrets - DO NOT commit this to git
- File uploads will be stored in the `uploads/` directory
- Database schema can be modified in `prisma/schema.prisma`
- All API calls go through the axios instance in `src/services/api.ts`
- Authentication tokens are stored in localStorage

## Naming Conventions

**File Naming:**
- All page and component files use `snake_case` (e.g., `parent_dashboard.tsx`, `institution_search.tsx`)
- Service files use `snake_case` with `.service.ts` suffix (e.g., `auth.service.ts`)
- Type files use `snake_case` (e.g., `index.ts` in types folder)
- Configuration files follow their tool's conventions (e.g., `eslint.config.js`)

**Code Style:**
- Component names use `PascalCase` (e.g., `function ParentDashboard()`)
- Variables and functions use `camelCase`
- Constants use `UPPER_SNAKE_CASE`
- Unused function parameters are prefixed with `_` to avoid ESLint errors

**ESLint Configuration:**
- Configured to ignore unused variables/parameters that start with `_`
- TypeScript strict mode enabled
- React hooks rules enabled
- No `any` types allowed (use specific types instead)

## Technology Stack Summary

**Frontend:**
- React 19 + TypeScript
- Vite (build tool)
- React Router (routing)
- React Query (server state)
- Zustand (client state)
- React Hook Form + Zod (forms)
- Axios (HTTP client)

**Backend:**
- Node.js + Express
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Multer (file uploads)

## Current State

✅ Project structure created
✅ Core dependencies installed
✅ Type definitions complete
✅ Basic routing set up
✅ API services scaffolded
✅ Database schema designed
✅ Backend server initialized

🔄 Ready to implement authentication (Phase 2)
