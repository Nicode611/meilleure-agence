# 🏠 HOOGSTOEL - Application Web Immobilière

## 📋 **Vue d'ensemble du projet**

Cette application web a été développée pour **Hoogstoel**, une entreprise immobilière belge. Elle permet aux clients potentiels de soumettre leurs projets immobiliers via un formulaire interactif et moderne.

---

## 🎯 **Fonctionnalités principales**

### **1. Formulaire Immobilier Intelligent**
- **5 étapes guidées** pour une expérience utilisateur optimale
- **Validation en temps réel** des informations saisies
- **Interface responsive** qui s'adapte à tous les écrans
- **Barre de progression** pour suivre l'avancement

### **2. Gestion des Données**
- **Collecte structurée** des informations client
- **Envoi automatique par email** via l'API Resend
- **Stockage sécurisé** des données de contact
- **Gestion des cookies** conforme au RGPD

### **3. Pages Légales et Informatives**
- Conditions d'utilisation
- Politique de confidentialité
- Mentions légales
- Gestion des cookies

---

## 🏗️ **Architecture technique**

### **Technologies utilisées**
- **Frontend** : Next.js 15 + React + TypeScript
- **Styling** : Tailwind CSS + CSS personnalisé
- **Envoi d'emails** : API Resend
- **Déploiement** : Vercel (configuré)

### **Structure des dossiers**
```
hoogstoel/
├── src/
│   ├── app/                    # Pages de l'application
│   ├── components/             # Composants réutilisables
│   ├── config/                 # Configuration des formulaires
│   ├── lib/                    # Utilitaires (API Resend)
│   └── types/                  # Définitions TypeScript
├── public/                     # Images et assets
└── Configuration files         # Package.json, etc.
```

---

## 📝 **Configuration du formulaire**

### **Personnalisation facile**
Le formulaire est entièrement configurable via le fichier `src/config/formQuestions.ts`. Pour modifier :

1. **Ajouter une question** : Ajoutez un objet dans le tableau `questions`
2. **Modifier les options** : Éditez le tableau `options` des questions de type "select"
3. **Changer les textes** : Modifiez les propriétés `label` et `placeholder`

### **Types de champs supportés**
- **Text** : Saisie simple (nom, ville, etc.)
- **Email** : Validation automatique du format email
- **Select** : Liste déroulante avec options personnalisées
- **Checkbox** : Cases à cocher multiples
- **Textarea** : Zone de texte longue

### **Exemple de configuration**
```typescript
{
  id: "projectType",
  label: "Quel est votre projet immobilier ?",
  type: "select",
  required: true,
  placeholder: "Sélectionnez votre projet",
  options: [
    { value: "achat-residence-principale", text: "Achat résidence principale" },
    { value: "investissement-locatif", text: "Investissement locatif" }
  ]
}
```

---

## 🚀 **Déploiement et maintenance**

### **Variables d'environnement requises**
Créez un fichier `.env.local` avec :
```env
RESEND_API_KEY=votre_clé_api_resend
```

### **Commandes utiles**
```bash
# Installation des dépendances
npm install

# Démarrage en mode développement
npm run dev

# Construction pour la production
npm run build

# Démarrage en mode production
npm start
```

### **Déploiement sur Vercel**
1. Connectez votre compte GitHub à Vercel
2. Importez le projet
3. Ajoutez la variable d'environnement `RESEND_API_KEY`
4. Déployez !

---

## 🔧 **Personnalisation avancée**

### **Modifier le style**
- **Couleurs** : Éditez `src/app/globals.css` (variables CSS personnalisées)
- **Composants** : Modifiez les fichiers dans `src/components/`
- **Layout** : Personnalisez `src/app/layout.tsx`

### **Ajouter de nouvelles pages**
1. Créez un dossier dans `src/app/`
2. Ajoutez un fichier `page.tsx`
3. Définissez le contenu de la page

### **Modifier l'envoi d'emails**
- **Template** : Éditez la fonction `generateEmailHTML()` dans `RealEstateForm.tsx`
- **API** : Modifiez `src/app/api/send-email/route.ts`
- **Validation** : Ajustez les règles dans le composant

---

## 📱 **Responsive et accessibilité**

### **Points de rupture**
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

### **Fonctionnalités d'accessibilité**
- Navigation au clavier
- Labels explicites pour tous les champs
- Messages d'erreur clairs
- Contraste optimisé

---

## 🛡️ **Sécurité et conformité**

### **Protection des données**
- **Validation côté client ET serveur**
- **Pas de stockage local** des données sensibles
- **Envoi sécurisé** via API Resend
- **Conformité RGPD** avec gestion des cookies

### **Gestion des erreurs**
- Messages d'erreur explicites
- Fallbacks en cas de problème
- Logs de débogage (en développement)

---

## 📊 **Monitoring et analytics**

### **Logs disponibles**
- Tentatives d'envoi d'emails
- Erreurs de validation
- Performances de l'application

### **Métriques importantes**
- Taux de conversion du formulaire
- Temps de remplissage moyen
- Pages les plus visitées

---

## 🆘 **Support et maintenance**

### **En cas de problème**
1. **Vérifiez les logs** dans la console du navigateur
2. **Testez l'API** avec l'endpoint `/api/test`
3. **Vérifiez les variables d'environnement**
4. **Consultez la documentation** de Next.js et Resend

### **Maintenance recommandée**
- **Mise à jour mensuelle** des dépendances
- **Vérification hebdomadaire** des emails reçus
- **Test mensuel** du formulaire complet
- **Sauvegarde** de la configuration

---

## 📞 **Contact développeur**

Pour toute question technique ou demande de modification :
- **Email** : [Votre email]
- **GitHub** : [Votre profil GitHub]
- **Documentation** : [Lien vers la doc technique]

---

## 🎉 **Félicitations !**

Votre application web est maintenant prête et professionnelle ! Elle offre une expérience utilisateur moderne et efficace pour vos clients immobiliers.

**Hoogstoel** dispose maintenant d'un outil digital de qualité pour :
- ✅ **Attirer plus de prospects** avec une interface moderne
- ✅ **Collecter des informations structurées** sur les projets
- ✅ **Améliorer la conversion** grâce à un formulaire optimisé
- ✅ **Rester conforme** aux exigences légales belges

Bonne utilisation ! 🚀
