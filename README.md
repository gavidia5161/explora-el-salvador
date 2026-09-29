# Explora El Salvador

Aplicación web para explorar destinos turísticos de El Salvador, desarrollada con Next.js, TypeScript y Supabase. Permite buscar destinos, consultar sus detalles y explorar otros lugares del mismo departamento.

## Tecnologías utilizadas

- Next.js con App Router
- TypeScript
- React
- Tailwind CSS
- Supabase
- PostgreSQL

## Funcionalidades

- Mostrar destinos turísticos consultados desde Supabase.
- Buscar destinos por nombre.
- Consultar una página individual para cada destino.
- Filtrar y explorar destinos por departamento.
- Cargar los datos desde componentes del servidor.
- Mostrar estados de carga y mensajes de error.
- Mostrar una página personalizada para rutas inexistentes.
- Diseño responsive para dispositivos móviles, tablets y escritorio.

## Instalación

### 1. Clonar el repositorio

git clone https://github.com/gavidia5161/explora-el-salvador.git

### 2. Entrar al proyecto

cd explora-el-salvador

### 3. Instalar las dependencias

npm install

### 4. Configurar las variables de entorno

Crear un archivo `.env.local` en la raíz del proyecto y agregar las credenciales del proyecto de Supabase:

NEXT_PUBLIC_SUPABASE_URL=https://TU-PROJECT-REF.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_TU_CLAVE

No subir `.env.local` ni credenciales reales al repositorio.

### 5. Ejecutar el proyecto

npm run dev

Luego abrir `http://localhost:3000`.

## Build para producción

Para generar una versión optimizada para producción:

npm run build

Para iniciar la versión de producción localmente:

npm run start

Next.js guarda los archivos generados en `.next`.

## Estructura principal

explora-el-salvador/
├── app/
│   ├── destinos/
│   │   ├── [slug]/
│   │   └── page.tsx
│   ├── departamentos/
│   │   └── [departamento]/
│   ├── loading.tsx
│   ├── error.tsx
│   └── not-found.tsx
├── utils/
│   └── supabase/
│       ├── client.ts
│       └── server.ts
├── package.json
└── README.md

## Base de datos

Los destinos se guardan en la tabla `destinos` de Supabase. La tabla contiene los campos `id`, `slug`, `nombre`, `departamento`, `descripcion` y `created_at`.

La tabla tiene Row Level Security (RLS) habilitado y una política que permite la lectura pública de los destinos.

## Sitio en producción

https://explora-el-salvador.vercel.app
