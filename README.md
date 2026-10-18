# Campus Directory & Academic Portal

An academic portal built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS. The application allows users to explore student records, academic faculties, and departmental specializations.

---

## Features

- **Search & Filtering**
  - Search students by name or roll ID (`STU-XXXX`).
  - Filter students by department (Computer Science, Design, Business) and academic year.

- **Dynamic Student Profiles (`/students/[id]`)**
  - Dynamic routing for individual student detail views.
  - Displays GPA, completed credits, enrolled courses, advisor details, and contact info.

- **Departments Hub (`/departments`)**
  - List of academic departments with faculty count, enrolled students, and key courses.

- **Specialization Catch-All Routing (`/departments/[...slug]`)**
  - Next.js catch-all routes handling multi-segment nested paths (e.g., `/departments/cs/ai-ml`).
  - Shows specialization curriculum details and enrolled students.

- **Error & Loading States**
  - `loading.tsx`: Fallback loading indicator during page transitions.
  - `error.tsx`: Error boundary with retry support.
  - `not-found.tsx`: Custom 404 page for missing students or invalid routes.

- **Responsive Design**
  - Clean layout optimized for mobile, tablet, and desktop screens.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4

---

## Routing Architecture

| Route | Route Type | Description |
| :--- | :--- | :--- |
| `/` | Client Page | Student directory with search and filter controls |
| `/students/[id]` | Dynamic Route | Detailed profile view for a specific student |
| `/departments` | Static Page | Overview of all academic faculties |
| `/departments/[...slug]` | Catch-All Route | Multi-segment route for departmental specializations |
| `/about` | Static Page | General portal information |

---

## Project Structure

```text
src/
├── app/
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── departments/
│   │   ├── [...slug]/
│   │   │   └── page.tsx          # Catch-all specialization pages
│   │   └── page.tsx              # Departments listing
│   ├── students/
│   │   ├── [id]/
│   │   │   ├── loading.tsx       # Student profile loading state
│   │   │   └── page.tsx          # Student details dynamic page
│   │   └── page.tsx              # Redirect handler
│   ├── error.tsx                 # Global error boundary
│   ├── globals.css               # Global CSS & Tailwind imports
│   ├── layout.tsx                # Root layout with font and metadata
│   ├── loading.tsx               # Root loading fallback
│   ├── not-found.tsx             # Custom 404 page
│   └── page.tsx                  # Home / Student Directory page
├── components/
│   ├── common/
│   │   └── Navbar.tsx            # Navigation bar component
│   └── students/
│       └── StudentCard.tsx       # Reusable student card preview
├── data/
│   ├── departments.ts            # Department mock records
│   ├── navLinks.ts               # Header navigation config
│   └── students.ts               # Student profiles dataset
└── types/
    ├── department.ts             # TypeScript interfaces for departments
    └── student.ts                # TypeScript interfaces for students
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/priyabratasahoo780/Nextjs_assignment1.git
cd Nextjs_assignment1/assignmentfirst
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

---

