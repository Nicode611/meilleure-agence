# Configuration Hoogstoel - SPA Next.js

## 🚀 Installation et Configuration

### 1. Prérequis
- Node.js 18+ 
- npm ou yarn
- Compte Resend (gratuit sur [resend.com](https://resend.com))

### 2. Installation des dépendances
```bash
npm install
```

### 3. Configuration de l'environnement
1. Copier le fichier d'exemple :
   ```bash
   cp env.example .env.local
   ```

2. Obtenir une clé API Resend :
   - Aller sur [resend.com](https://resend.com)
   - Créer un compte gratuit
   - Aller dans "API Keys" et créer une nouvelle clé
   - Copier la clé (commence par `re_`)

3. Éditer `.env.local` et remplacer :
   ```
   RESEND_API_KEY=re_votre_vraie_cle_ici
   ```

### 4. Configuration de l'email de destination
Dans `src/app/api/send-email/route.ts`, ligne 35, remplacer :
```typescript
to: ['destinataire@example.com'], // À remplacer par l'email de destination
```

### 5. Démarrage
```bash
# Mode développement
npm run dev

# Build de production
npm run build

# Démarrage en production
npm start
```

## 📁 Structure du Projet

```
hoogstoel/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── send-email/
│   │   │       └── route.ts          # API d'envoi d'emails
│   │   ├── globals.css               # Styles globaux
│   │   ├── layout.tsx                # Layout principal
│   │   └── page.tsx                  # Page d'accueil
│   ├── components/
│   │   └── ContactForm.tsx           # Composant du formulaire
│   ├── lib/
│   │   └── resend.ts                 # Configuration Resend
│   └── types/
│       └── email.ts                  # Types TypeScript
├── public/                            # Fichiers statiques
├── .env.local                        # Variables d'environnement (à créer)
├── env.example                       # Exemple de configuration
└── package.json                      # Dépendances et scripts
```

## 🔧 Personnalisation

### Modifier le design
- Éditer `src/components/ContactForm.tsx` pour changer l'apparence
- Modifier `src/app/globals.css` pour les styles globaux
- Utiliser Tailwind CSS pour le styling

### Ajouter des champs
1. Modifier l'interface `EmailData` dans `src/types/email.ts`
2. Mettre à jour le composant `ContactForm.tsx`
3. Adapter la route API dans `src/app/api/send-email/route.ts`

### Changer l'email de destination
Modifier la ligne `to:` dans `src/app/api/send-email/route.ts`

## 🚨 Dépannage

### Erreur "Configuration Resend manquante"
- Vérifier que `.env.local` existe
- Vérifier que `RESEND_API_KEY` est correctement définie
- Redémarrer le serveur de développement

### Erreur d'envoi d'email
- Vérifier la validité de la clé API Resend
- Vérifier que l'email de destination est correct
- Consulter les logs du serveur

### Problèmes de compilation
- Vérifier que toutes les dépendances sont installées
- Exécuter `npm run lint` pour vérifier le code
- Exécuter `npm run type-check` pour vérifier TypeScript

## 📧 Test de l'envoi d'emails

1. Démarrer l'application : `npm run dev`
2. Aller sur `http://localhost:3000`
3. Remplir le formulaire avec des données de test
4. Vérifier que l'email est reçu
5. Vérifier les logs dans la console du serveur

## 🌐 Déploiement

### Vercel (recommandé)
1. Connecter le repository GitHub à Vercel
2. Ajouter la variable d'environnement `RESEND_API_KEY`
3. Déployer automatiquement

### Autres plateformes
- Ajouter `RESEND_API_KEY` aux variables d'environnement
- Configurer le build avec `npm run build`
- Démarrer avec `npm start`

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Resend](https://resend.com/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation TypeScript](https://www.typescriptlang.org/docs/)
