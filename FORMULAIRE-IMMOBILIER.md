# Formulaire Immobilier Multi-Étapes

## 🏡 Description

Le formulaire immobilier Hoogstoel est un formulaire en 5 étapes permettant aux clients de décrire leur projet immobilier de manière structurée. Les données sont envoyées par email via Resend.

## 📋 Structure du Formulaire

### Étape 1 : Type de Projet
- **Type de projet** : Achat résidence principale/secondaire, investissement locatif, construction, rénovation
- **Type de bien** : Appartement, maison, terrain, local commercial, immeuble

### Étape 2 : Localisation et Budget
- **Région souhaitée** : Sélection parmi les principales régions françaises
- **Ville/secteur** : Champ libre pour préciser la localisation
- **Budget** : Tranches de budget de moins de 100k€ à plus de 1M€

### Étape 3 : Détails du Bien
- **Surface** : Tranches de surface de moins de 30m² à plus de 200m²
- **Nombre de pièces** : De 1 pièce à plus de 5 pièces
- **Caractéristiques** : Cases à cocher (Balcon/Terrasse, Jardin, Parking, Cave, Piscine, Ascenseur)

### Étape 4 : Timeline et Financement
- **Timeline** : De immédiatement à plus d'un an
- **Mode de financement** : Crédit immobilier, comptant, mixte, non défini
- **Situation actuelle** : Locataire, propriétaire, hébergé, premier achat

### Étape 5 : Contact et Validation
- **Informations personnelles** : Prénom, nom, email, téléphone
- **Informations supplémentaires** : Zone de texte libre
- **Validation finale** : Envoi du formulaire complet

## 🎯 Fonctionnalités

### Barre de Progression
- Affichage du pourcentage de completion (20% par étape)
- Indication visuelle de l'étape actuelle
- Animation fluide lors des transitions

### Validation
- Validation des champs obligatoires à chaque étape
- Impossible de passer à l'étape suivante sans compléter les champs requis
- Validation email et format des données

### Navigation
- Boutons "Précédent" et "Suivant"
- Bouton "Envoyer mon projet" à la dernière étape
- États désactivés pour les boutons selon la validation

### Gestion d'États
- États de chargement pendant l'envoi
- Messages de succès et d'erreur
- Réinitialisation du formulaire après envoi réussi

## 📧 Format de l'Email Envoyé

L'email envoyé contient toutes les informations structurées :

```
NOUVEAU PROJET IMMOBILIER

=== INFORMATIONS CONTACT ===
Nom: [Prénom] [Nom]
Email: [email]
Téléphone: [téléphone]

=== TYPE DE PROJET ===
Type de projet: [projectType]
Type de bien: [propertyType]

=== LOCALISATION ===
Région: [region]
Ville: [city]
Budget: [budget]

=== DÉTAILS DU BIEN ===
Surface: [surface]
Nombre de pièces: [rooms]
Caractéristiques: [features]

=== TIMELINE ET FINANCEMENT ===
Timeline: [timeline]
Financement: [financing]
Situation actuelle: [currentSituation]

=== INFORMATIONS SUPPLÉMENTAIRES ===
[additionalInfo]
```

## 🛠 Personnalisation

### Modifier les Options
Pour modifier les options des listes déroulantes, éditer `src/components/RealEstateForm.tsx` :

```typescript
// Exemple pour ajouter une nouvelle région
<option value="nouvelle-region">Nouvelle Région</option>
```

### Ajouter des Étapes
1. Augmenter `totalSteps`
2. Ajouter le cas dans `renderStep()`
3. Mettre à jour `isStepValid()`
4. Ajouter les nouveaux champs à l'interface `FormData`

### Modifier les Caractéristiques
```typescript
{['Nouvelle Caractéristique', 'Autre Option'].map((feature) => (
  // Component checkbox
))}
```

### Changer le Style
- Modifier les classes Tailwind CSS
- Personnaliser les couleurs de la barre de progression
- Adapter la taille et l'espacement

## 🔧 Développement

### Structure des Fichiers
```
src/
├── components/
│   ├── RealEstateForm.tsx    # Composant principal du formulaire
│   └── ContactForm.tsx       # Ancien formulaire (sauvegardé)
├── types/
│   └── email.ts             # Interfaces TypeScript
└── app/
    ├── page.tsx             # Page d'accueil avec le formulaire
    └── api/
        └── send-email/
            └── route.ts     # API d'envoi d'emails
```

### Testing
1. Démarrer en mode dev : `npm run dev`
2. Aller sur `http://localhost:3000`
3. Tester chaque étape du formulaire
4. Vérifier la validation des champs
5. Tester l'envoi complet

### États de Validation par Étape
- **Étape 1** : `projectType` ET `propertyType`
- **Étape 2** : `region` ET `city` ET `budget`
- **Étape 3** : `surface` ET `rooms`
- **Étape 4** : `timeline` ET `financing` ET `currentSituation`
- **Étape 5** : `firstName` ET `lastName` ET `email`

## 🚀 Déploiement

Le formulaire fonctionne exactement comme l'ancien système :
- Même API endpoint `/api/send-email`
- Même configuration Resend
- Même variables d'environnement

Aucune configuration supplémentaire n'est nécessaire pour le déploiement.

## 📱 Responsive Design

Le formulaire est entièrement responsive :
- Layout adaptatif sur mobile
- Grille flexible pour les champs
- Taille appropriée des boutons
- Optimisation tactile

## 🎨 Design System

### Couleurs
- **Primaire** : `blue-600` (boutons, progression)
- **Succès** : `green-600` (validation finale)
- **Erreur** : `red-600` (messages d'erreur)
- **Neutre** : `gray-*` (textes, bordures)

### Composants
- **Inputs** : Bordure arrondie, focus ring bleu
- **Boutons** : États hover et disabled
- **Progression** : Animation fluide
- **Cards** : Ombre légère, angles arrondis
