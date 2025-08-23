# Hoogstoel - SPA Next.js avec Formulaire Email

Cette application Next.js contient un formulaire qui envoie les données par email via Resend.

## Installation

1. Cloner le projet
2. Installer les dépendances :
   ```bash
   npm install
   ```

## Configuration

1. Copier le fichier `env.example` vers `.env.local` :
   ```bash
   cp env.example .env.local
   ```

2. Obtenir une clé API Resend :
   - Aller sur [resend.com](https://resend.com)
   - Créer un compte et obtenir une clé API
   - Remplacer `your_resend_api_key_here` dans `.env.local` par votre vraie clé API

## Démarrage

```bash
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## Structure du Projet

- `src/app/` - Pages et composants de l'application
- `src/app/api/` - API routes pour l'envoi d'emails
- `src/components/` - Composants réutilisables
- `public/` - Fichiers statiques

## Technologies Utilisées

- Next.js 14 avec App Router
- TypeScript
- Tailwind CSS
- Resend pour l'envoi d'emails
- ESLint pour la qualité du code
