# Premium MERN Portfolio

A high-performance, design-driven portfolio built with the MERN stack.

## Architecture

### Frontend (`/client`)
- **Core:** React + Vite
- **Styling:** Tailwind CSS + Design Tokens
- **Motion:** Framer Motion
- **Icons:** Lucide React

### Backend (`/server`)
- **Runtime:** Node.js + Express
- **Database:** MongoDB + Mongoose
- **Validation:** Zod
- **Security:** Helmet, Rate Limit, CORS

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Running locally or Atlas URI)

### Installation

1. **Setup Backend**
   ```bash
   cd server
   npm install
   # Create .env file if not exists (see .env.example or instructions)
   npm run dev
   ```
   Server runs on `http://localhost:5000`.

2. **Setup Frontend**
   ```bash
   cd client
   npm install
   npm run dev
   ```
   Client runs on `http://localhost:5173`.

## Features
- **Sticky Navigation:** Smooth scrolling and mobile menu.
- **Hero Section:** Text reveal animations.
- **Projects:** Case study component.
- **Contact Form:** Integrated with Backend API + Zod Validation.
