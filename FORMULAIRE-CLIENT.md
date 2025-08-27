# 🏠 GUIDE CLIENT - MODIFICATION DU FORMULAIRE IMMOBILIER

## 🎯 **Vue d'ensemble**

Ce projet contient un **formulaire immobilier entièrement personnalisable** que vous pouvez modifier facilement sans connaissances techniques.

## 📁 **Fichiers à modifier (POUR VOUS)**

### 🎨 **Fichier principal à modifier :**
```
src/config/formQuestions.ts
```

### 📚 **Fichiers de documentation :**
```
src/config/README.md          ← Guide détaillé
src/config/examples.ts        ← Exemples concrets
FORMULAIRE-CLIENT.md          ← Ce fichier
```

## 🚀 **Comment modifier le formulaire**

### **1. Ouvrir le fichier de configuration**
- Allez dans le dossier `src/config/`
- Ouvrez le fichier `formQuestions.ts`
- **NE MODIFIEZ QUE CE FICHIER !**

### **2. Modifier une question existante**
```typescript
// Trouvez la question que vous voulez modifier
{
  id: "projectType",
  label: "Quel est votre projet immobilier ?", // ← Changez ceci
  // ... reste inchangé
}

// Devenu :
{
  id: "projectType",
  label: "Quel type de projet immobilier envisagez-vous ?", // ← Nouveau texte
  // ... reste inchangé
}
```

### **3. Ajouter une nouvelle option**
```typescript
// Dans une question de type "select" ou "checkbox"
options: [
  { value: "option-existante", text: "Option existante" },
  { value: "nouvelle-option", text: "Nouvelle option" }, // ← Ajoutez ici
  { value: "autre-option", text: "Autre option" }
]
```

### **4. Ajouter une nouvelle question**
```typescript
// Dans l'étape de votre choix, ajoutez :
{
  id: "nouvelle-question",
  label: "Votre nouvelle question ?",
  type: "select", // ou "text", "email", "checkbox", "textarea"
  required: true, // ou false
  placeholder: "Placeholder optionnel",
  options: [ // Seulement pour select/checkbox
    { value: "option1", text: "Texte affiché 1" },
    { value: "option2", text: "Texte affiché 2" }
  ]
}
```

## 📋 **Types de questions disponibles**

| Type | Description | Exemple d'utilisation |
|------|-------------|----------------------|
| `text` | Champ texte simple | Prénom, nom, ville |
| `email` | Champ email | Adresse email |
| `tel` | Champ téléphone | Numéro de téléphone |
| `select` | Menu déroulant | Région, budget, type de bien |
| `checkbox` | Cases à cocher multiples | Caractéristiques du bien |
| `textarea` | Zone de texte longue | Informations supplémentaires |

## 🔧 **Exemples concrets de modifications**

### **Exemple 1 : Changer le texte d'une question**
```typescript
// Avant
label: "Quel est votre projet immobilier ?"

// Après
label: "Quel type de projet immobilier envisagez-vous ?"
```

### **Exemple 2 : Ajouter une nouvelle option de budget**
```typescript
// Dans la question "budget", ajoutez :
options: [
  { value: "moins-100k", text: "Moins de 100k€" },
  { value: "100k-200k", text: "100k€ - 200k€" },
  // Ajoutez ici :
  { value: "75k-100k", text: "75k€ - 100k€" },
  { value: "200k-300k", text: "200k€ - 300k€" }
]
```

### **Exemple 3 : Ajouter une nouvelle caractéristique**
```typescript
// Dans la question "features", ajoutez :
options: [
  { value: "Balcon/Terrasse", text: "Balcon/Terrasse" },
  { value: "Jardin", text: "Jardin" },
  // Ajoutez ici :
  { value: "Garage", text: "Garage" },
  { value: "Terrasse", text: "Terrasse" }
]
```

## ⚠️ **Points d'attention importants**

1. **Ne modifiez QUE le fichier** `src/config/formQuestions.ts`
2. **Ne touchez PAS au fichier** `src/components/RealEstateForm.tsx`
3. **Gardez les `id` uniques** pour chaque question
4. **Respectez la structure** des objets (virgules, accolades, guillemets)
5. **Testez après modification** en rechargeant la page

## 🎨 **Personnalisations avancées**

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

1. **Sauvegardez** le fichier `formQuestions.ts`
2. **Rechargez** la page du formulaire dans votre navigateur
3. **Vérifiez** que vos changements apparaissent
4. **Testez** le formulaire pour vous assurer qu'il fonctionne

## 📞 **Besoin d'aide ?**

### **Problèmes courants :**
1. **Erreur de syntaxe** → Vérifiez les virgules, accolades, guillemets
2. **Question qui n'apparaît pas** → Vérifiez que l'`id` est unique
3. **Formulaire qui ne fonctionne plus** → Vérifiez la structure des objets

### **Conseils :**
1. **Modifiez une chose à la fois** pour identifier les problèmes
2. **Testez après chaque modification**
3. **Gardez une copie de sauvegarde** du fichier original

## 🎉 **Félicitations !**

Vous pouvez maintenant **modifier facilement votre formulaire immobilier** sans toucher au code technique !

---

## 📚 **Fichiers de référence**

- **`src/config/formQuestions.ts`** ← **FICHIER À MODIFIER**
- **`src/config/README.md`** ← Guide détaillé
- **`src/config/examples.ts`** ← Exemples concrets
- **`src/config/index.ts`** ← Exports (ne pas modifier)

## 🔗 **Structure du projet**

```
hoogstoel/
├── src/
│   ├── config/                    ← DOSSIER À MODIFIER
│   │   ├── formQuestions.ts       ← FICHIER PRINCIPAL
│   │   ├── examples.ts            ← Exemples
│   │   ├── README.md              ← Guide détaillé
│   │   └── index.ts               ← Exports
│   └── components/
│       └── RealEstateForm.tsx     ← NE PAS MODIFIER
└── FORMULAIRE-CLIENT.md           ← Ce fichier
```
