# Calendly
https://github.com/user-attachments/assets/8ef90171-5ba1-4e17-97ce-9ad2975d2a11

A modern scheduling application built with Next.js 14, Prisma, and Clerk Authentication.

## 🌟 Features

- **User Authentication**: Secure login/signup via Clerk
- **Dynamic Scheduling**: Create and manage events with customizable durations
- **Public Profiles**: Shareable scheduling links for each user
- **Real-time Availability**: Automatic timezone detection and scheduling
- **Dashboard**: View upcoming meetings and manage events
- **Dark/Light Mode**: Built-in theme support
- **Responsive Design**: Works seamlessly across devices

## 🚀 Tech Stack

- **Frontend**: Next.js 14, TailwindCSS
- **Backend**: Next.js API Routes,Nodejs, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: Clerk
- **Styling**: Shadcn UI Components
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL[Screencast from 2025-01-31 23-06-40.webm](https://github.com/user-attachments/assets/5dff6f85-79ac-48d6-a1a2-a962e689a65a)

- npm or yarn
- Clerk account

## 🛠️ Installation[Screencast from 2025-01-31 23-06-40.webm](https://github.com/user-attachments/assets/51e21a63-57f4-40f7-931c-89cdb8bec868)


1. **Clone the repository**
   ```bash
   git clone 
   cd calendly-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   ```

4. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 📱 Core Features

### User Management
- Sign up/Sign in with email or social providers
- Profile customization
- Username management

### Event Management
- Create custom event types
- Set availability hours
- Manage event duration

### Booking System
- Real-time availability checking
- Timezone conversion
- Email notifications
- Calendar integration

## 🔒 Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key |
| `CLERK_SECRET_KEY` | Clerk secret key |

