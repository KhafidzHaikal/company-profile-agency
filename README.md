# Next.js MVC Project

Base project Next.js dengan struktur MVC (Model-View-Controller).

## Struktur Folder

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   └── users/         # User API endpoints
│   └── page.tsx           # Main page
├── controllers/           # Controllers (Business Logic)
│   └── UserController.ts  # User controller
├── models/               # Models (Data Layer)
│   └── User.ts           # User model
├── views/                # Views (UI Components)
│   └── UserView.tsx      # User view component
├── lib/                  # Utilities & configurations
├── types/                # TypeScript type definitions
└── utils/                # Helper functions
```

## Penjelasan Struktur MVC

### Models (`src/models/`)
- Berisi definisi data dan business logic untuk data manipulation
- Contoh: `User.ts` - interface dan class untuk operasi CRUD user

### Views (`src/views/`)
- Berisi komponen UI yang menampilkan data
- Contoh: `UserView.tsx` - komponen untuk menampilkan dan mengelola user

### Controllers (`src/controllers/`)
- Berisi logic untuk menghubungkan Model dan View
- Menangani request dan response
- Contoh: `UserController.ts` - mengelola operasi user

### API Routes (`src/app/api/`)
- Next.js API routes yang menggunakan controllers
- Endpoint REST API untuk frontend

## Cara Menjalankan

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Fitur

- ✅ TypeScript support
- ✅ Tailwind CSS
- ✅ ESLint configuration
- ✅ MVC architecture
- ✅ CRUD operations example
- ✅ API routes
- ✅ Responsive UI

## Penggunaan

1. Buka browser ke `http://localhost:3000`
2. Gunakan form untuk menambah user baru
3. Lihat daftar user yang telah dibuat
4. Hapus user dengan tombol delete

Project ini siap untuk dikembangkan lebih lanjut dengan menambahkan:
- Database integration
- Authentication
- Validation
- Error handling yang lebih robust
- Testing
