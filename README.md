# Hoogstoel - Plateforme de Projets Immobiliers

## Description

Hoogstoel est une plateforme moderne qui permet aux utilisateurs de décrire leur projet immobilier et de recevoir des devis de spécialistes de leur région. L'objectif est de faciliter la mise en relation entre particuliers et professionnels de l'immobilier.

## Fonctionnalités

### 🏠 Page d'accueil attractive
- Design moderne et professionnel
- Section héro avec appel à l'action
- Explication du processus en 3 étapes
- Formulaire de code postal intégré

### 📝 Formulaire de projet immobilier
- **5 étapes guidées** pour une expérience utilisateur optimale
- **Validation en temps réel** des données saisies
- **Barre de progression** pour suivre l'avancement
- **Envoi automatique** par email via l'API Resend

### 🎨 Interface utilisateur
- Design responsive (mobile-first)
- Composants Tailwind CSS modernes
- Modal pour l'affichage du formulaire
- Navigation intuitive

## Structure du Projet

```
hoogstoel/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── send-email/          # API d'envoi d'emails
│   │   ├── layout.tsx               # Layout principal
│   │   ├── page.tsx                 # Page d'accueil
│   │   └── globals.css              # Styles globaux
│   ├── components/
│   │   ├── RealEstateForm.tsx       # Formulaire principal
│   │   └── ContactForm.tsx          # Formulaire de contact
│   ├── lib/
│   │   └── resend.ts                # Configuration Resend
│   └── types/
│       └── email.ts                 # Types TypeScript
├── public/
│   └── background-pattern.svg       # Motif de fond
└── package.json
```

## Technologies Utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Resend** - Service d'envoi d'emails
- **React Hooks** - Gestion d'état moderne

## Installation et Démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [url-du-repo]
cd hoogstoel

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp env.example .env.local
# Éditer .env.local avec vos clés API

# Démarrer le serveur de développement
npm run dev
```

### Variables d'Environnement

Créez un fichier `.env.local` avec :

```env
RESEND_API_KEY=votre_cle_api_resend
```

## Utilisation

### Page d'Accueil
1. L'utilisateur arrive sur une page attractive
2. Il peut cliquer sur le bouton "Continuer" 
3. Le formulaire s'ouvre dans une modal

### Formulaire Immobilier
1. **Étape 1** : Type de projet et type de bien
2. **Étape 2** : Localisation et budget
3. **Étape 3** : Détails du bien (surface, pièces, caractéristiques)
4. **Étape 4** : Timeline et financement
5. **Étape 5** : Coordonnées personnelles

### Envoi
- Validation automatique à chaque étape
- Envoi par email via l'API Resend
- Confirmation de succès à l'utilisateur

## API

### POST /api/send-email
Envoie les informations du projet immobilier par email.

**Body :**
```json
{
  "name": "Prénom Nom",
  "email": "email@exemple.com",
  "message": "Détails du projet..."
}
```

## Personnalisation

### Couleurs et Thème
Les couleurs peuvent être modifiées dans `tailwind.config.js` et `globals.css`.

### Contenu
- Textes : Modifier les composants React
- Images : Remplacer les fichiers dans `/public`
- Logo : Modifier le composant de navigation

### Formulaire
- Ajouter/supprimer des étapes dans `RealEstateForm.tsx`
- Modifier les champs et validations
- Personnaliser l'email envoyé

## Déploiement

### Vercel (Recommandé)
```bash
npm run build
vercel --prod
```

### Autres Plateformes
```bash
npm run build
npm start
```

## Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Support

Pour toute question ou problème :
- Ouvrir une issue sur GitHub
- Contacter l'équipe de développement

---

**Hoogstoel** - Simplifiez vos projets immobiliers 🏡
