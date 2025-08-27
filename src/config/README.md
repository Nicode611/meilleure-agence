# 📝 GUIDE DE MODIFICATION DU FORMULAIRE IMMOBILIER

## 🎯 **Objectif de ce fichier**

Ce fichier `formQuestions.ts` contient **TOUTES** les questions du formulaire immobilier. Il permet de modifier facilement le contenu sans toucher au code technique.

## 🚀 **Comment modifier le formulaire**

### 1. **Ajouter une nouvelle question**

Pour ajouter une question dans une étape existante :

```typescript
// Dans step1Questions.questions, ajoutez :
{
  id: "nouvelle-question",
  label: "Votre nouvelle question ?",
  type: "select", // ou "text", "email", "checkbox", "textarea"
  required: true, // ou false
  placeholder: "Placeholder optionnel",
  options: [ // Seulement pour les questions de type "select" ou "checkbox"
    { value: "option1", text: "Texte affiché 1" },
    { value: "option2", text: "Texte affiché 2" }
  ]
}
```

### 2. **Modifier une question existante**

Changez simplement le texte dans le `label` :

```typescript
// Avant
label: "Quel est votre projet immobilier ?"

// Après
label: "Quel type de projet immobilier envisagez-vous ?"
```

### 3. **Ajouter de nouvelles options**

Dans une question de type "select" ou "checkbox", ajoutez des options :

```typescript
options: [
  { value: "option-existante", text: "Option existante" },
  { value: "nouvelle-option", text: "Nouvelle option" }, // ← Ajoutez ici
  { value: "autre-option", text: "Autre option" }
]
```

### 4. **Modifier les options**

Changez le texte affiché en modifiant la propriété `text` :

```typescript
// Avant
{ value: "achat-residence-principale", text: "Achat résidence principale" }

// Après
{ value: "achat-residence-principale", text: "Achat de ma résidence principale" }
```

## 📋 **Types de questions disponibles**

| Type | Description | Exemple |
|------|-------------|---------|
| `text` | Champ texte simple | Prénom, nom, ville |
| `email` | Champ email avec validation | Adresse email |
| `tel` | Champ téléphone | Numéro de téléphone |
| `select` | Menu déroulant | Région, budget, type de bien |
| `checkbox` | Cases à cocher multiples | Caractéristiques du bien |
| `textarea` | Zone de texte longue | Informations supplémentaires |

## 🔧 **Structure d'une question**

```typescript
{
  id: "identifiant-unique",           // ⚠️ Doit être unique
  label: "Question affichée",         // Texte de la question
  type: "select",                     // Type de champ
  required: true,                     // Obligatoire ou non
  placeholder: "Texte d'aide",        // Optionnel
  options: [                          // Seulement pour select/checkbox
    { value: "valeur", text: "Affiché" }
  ],
  rows: 4                            // Seulement pour textarea
}
```

## 📍 **Exemples concrets de modifications**

### **Exemple 1 : Changer le texte d'une question**

```typescript
// Dans step2Questions.questions, trouvez la question "region" :
{
  id: "region",
  label: "Région souhaitée", // ← Changez ceci
  // ... reste inchangé
}

// Devenu :
{
  id: "region",
  label: "Dans quelle région souhaitez-vous acheter ?", // ← Nouveau texte
  // ... reste inchangé
}
```

### **Exemple 2 : Ajouter une nouvelle option de budget**

```typescript
// Dans step2Questions.questions, trouvez la question "budget" :
options: [
  { value: "moins-100k", text: "Moins de 100k€" },
  { value: "100k-200k", text: "100k€ - 200k€" },
  // Ajoutez ici :
  { value: "75k-100k", text: "75k€ - 100k€" },
  { value: "200k-300k", text: "200k€ - 300k€" },
  // ... reste
]
```

### **Exemple 3 : Ajouter une nouvelle caractéristique**

```typescript
// Dans step3Questions.questions, trouvez la question "features" :
options: [
  { value: "Balcon/Terrasse", text: "Balcon/Terrasse" },
  { value: "Jardin", text: "Jardin" },
  // Ajoutez ici :
  { value: "Garage", text: "Garage" },
  { value: "Parking", text: "Parking" },
  // ... reste
]
```

## ⚠️ **Points d'attention importants**

1. **Ne modifiez QUE ce fichier** `formQuestions.ts`
2. **Ne touchez PAS au fichier** `RealEstateForm.tsx`
3. **Gardez les `id` uniques** pour chaque question
4. **Respectez la structure** des objets
5. **Testez après modification** en rechargeant la page

## 🎨 **Personnalisation avancée**

### **Changer l'ordre des étapes**

Modifiez l'ordre dans `formConfig.steps` :

```typescript
export const formConfig = {
  totalSteps: 5,
  steps: [
    step1Questions,    // Étape 1
    step3Questions,    // Étape 2 (maintenant)
    step2Questions,    // Étape 3 (maintenant)
    step4Questions,    // Étape 4
    step5Questions     // Étape 5
  ]
};
```

### **Ajouter une nouvelle étape**

1. Créez une nouvelle constante (ex: `step6Questions`)
2. Ajoutez-la dans `formConfig.steps`
3. Incrémentez `totalSteps`

## 🧪 **Comment tester vos modifications**

1. Sauvegardez le fichier `formQuestions.ts`
2. Rechargez la page du formulaire dans votre navigateur
3. Vérifiez que vos changements apparaissent
4. Testez le formulaire pour vous assurer qu'il fonctionne

## 📞 **Besoin d'aide ?**

Si vous rencontrez des difficultés :
1. Vérifiez la syntaxe (virgules, accolades, guillemets)
2. Assurez-vous que chaque `id` est unique
3. Respectez la structure des objets
4. Testez une modification à la fois

---

**🎉 Félicitations ! Vous pouvez maintenant modifier facilement votre formulaire immobilier !**
