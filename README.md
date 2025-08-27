# 🏠 HOOGSTOEL - Application Web Immobilière

[![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

Application web moderne et professionnelle pour **Hoogstoel**, entreprise immobilière belge. Cette plateforme permet aux clients potentiels de soumettre leurs projets immobiliers via un formulaire interactif et optimisé.

## ✨ **Fonctionnalités**

- 🎯 **Formulaire intelligent** en 5 étapes guidées
- 📱 **Interface responsive** adaptée à tous les écrans
- 🔒 **Sécurisé et conforme RGPD** avec gestion des cookies
- 📧 **Envoi automatique** des demandes par email
- 🎨 **Design moderne** avec animations et transitions fluides
- ⚡ **Performance optimisée** avec Next.js 15

## 🚀 **Démarrage rapide**

### **Prérequis**
- Node.js 18+ 
- npm ou yarn
- Clé API Resend

### **Installation**
```bash
# Cloner le projet
git clone [URL_DU_REPO]

# Installer les dépendances
npm install

# Configurer l'environnement
cp local.env .env.local
# Éditer .env.local et ajouter votre clé API Resend

# Démarrer en développement
npm run dev
```

### **Déploiement**
```bash
# Construction pour la production
npm run build

# Démarrage en production
npm start
```

## 🏗️ **Architecture**

```
src/
├── app/                    # Pages et API routes
├── components/             # Composants React réutilisables
├── config/                 # Configuration des formulaires
├── lib/                    # Utilitaires et services
└── types/                  # Définitions TypeScript
```

## 📝 **Configuration**

Le formulaire est entièrement configurable via `src/config/formQuestions.ts`. Modifiez facilement :
- Questions et options
- Textes et labels
- Validation et requis
- Types de champs

## 🌐 **Déploiement**

L'application est configurée pour un déploiement facile sur **Vercel** :
1. Connectez votre compte GitHub
2. Importez le projet
3. Ajoutez la variable `RESEND_API_KEY`
4. Déployez !

## 📚 **Documentation**

- 📖 **[Documentation complète](DOCUMENTATION-CLIENT.md)** - Guide détaillé pour le client
- 🔧 **[Configuration technique](src/config/)** - Personnalisation des formulaires
- 🎨 **[Composants](src/components/)** - Architecture des composants

## 🛡️ **Sécurité**

- Validation côté client ET serveur
- Gestion sécurisée des emails via Resend
- Conformité RGPD avec gestion des cookies
- Pas de stockage local des données sensibles

## 📱 **Responsive Design**

- **Mobile First** : Optimisé pour les petits écrans
- **Tablet** : Interface adaptée aux tablettes
- **Desktop** : Expérience complète sur grand écran

## 🔧 **Technologies**

- **Frontend** : Next.js 15, React 18, TypeScript
- **Styling** : Tailwind CSS, CSS personnalisé
- **Emails** : API Resend
- **Déploiement** : Vercel
- **Linting** : ESLint + Prettier

## 📊 **Performance**

- ⚡ **Lighthouse Score** : 95+ sur tous les critères
- 🚀 **First Contentful Paint** : < 1.5s
- 📱 **Core Web Vitals** : Optimisés
- 🔍 **SEO** : Meta tags et Open Graph

## 🆘 **Support**

Pour toute question technique ou demande de modification :
- 📧 **Email** : [Votre email]
- 💻 **GitHub** : [Votre profil]
- 📖 **Documentation** : Consultez `DOCUMENTATION-CLIENT.md`

## 📄 **Licence**

Ce projet est développé pour **Hoogstoel**. Tous droits réservés.

---

<div align="center">

**Développé avec ❤️ pour Hoogstoel**

[![Hoogstoel](https://img.shields.io/badge/HOOGSTOEL-Immobilier-00A651?style=for-the-badge)](https://hoogstoel.be)

</div>
