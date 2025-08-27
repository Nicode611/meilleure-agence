/**
 * 🏠 CONFIGURATION DES QUESTIONS DU FORMULAIRE IMMOBILIER
 * ======================================================
 * 
 * Ce fichier contient toutes les questions et options du formulaire immobilier.
 * 
 * 🎯 POUR MODIFIER LE FORMULAIRE :
 * 1. Modifiez les questions dans ce fichier
 * 2. Ajoutez ou supprimez des options
 * 3. Les changements seront automatiquement appliqués
 * 
 * ⚠️  ATTENTION : Ne modifiez que ce fichier, pas le composant RealEstateForm.tsx
 * 
 * 📝 STRUCTURE :
 * - Chaque étape a ses propres questions
 * - Chaque question a un label et des options
 * - Les options ont une valeur (pour le code) et un texte (pour l'affichage)
 */

// ============================================================================
// ÉTAPE 1 : TYPE DE PROJET
// ============================================================================
export const step1Questions: StepQuestions = {
  title: "Type de projet",
  subtitle: "Décrivez votre projet immobilier",
  questions: [
    {
      id: "projectType",
      label: "Quel est votre projet immobilier ?",
      type: "select",
      required: true,
      placeholder: "Sélectionnez votre projet",
      options: [
        { value: "achat-residence-principale", text: "Achat résidence principale" },
        { value: "achat-residence-secondaire", text: "Achat résidence secondaire" },
        { value: "investissement-locatif", text: "Investissement locatif" },
        { value: "construction-neuve", text: "Construction neuve" },
        { value: "renovation", text: "Rénovation" }
      ]
    },
    {
      id: "propertyType",
      label: "Type de bien recherché",
      type: "select",
      required: true,
      placeholder: "Sélectionnez le type de bien",
      options: [
        { value: "appartement", text: "Appartement" },
        { value: "maison", text: "Maison" },
        { value: "terrain", text: "Terrain" },
        { value: "local-commercial", text: "Local commercial" },
        { value: "immeuble", text: "Immeuble" }
      ]
    }
  ]
};

// ============================================================================
// ÉTAPE 2 : LOCALISATION ET BUDGET
// ============================================================================
export const step2Questions: StepQuestions = {
  title: "Localisation et budget",
  subtitle: "Définissez votre zone de recherche et votre budget",
  questions: [
    
    {
      id: "city",
      label: "Ville ou secteur précis",
      type: "text",
      required: true,
      placeholder: "Ex: Bruxelles, Charleroi, Liège..."
    },
    {
      id: "budget",
      label: "Budget envisagé",
      type: "select",
      required: true,
      placeholder: "Sélectionnez votre budget",
      options: [
        { value: "moins-100k", text: "Moins de 100k€" },
        { value: "100k-200k", text: "100k€ - 200k€" },
        { value: "200k-300k", text: "200k€ - 300k€" },
        { value: "300k-500k", text: "300k€ - 500k€" },
        { value: "500k-1m", text: "500k€ - 1M€" },
        { value: "plus-1m", text: "Plus de 1M€" }
      ]
    }
  ]
};

// ============================================================================
// ÉTAPE 3 : DÉTAILS DU BIEN
// ============================================================================
export const step3Questions: StepQuestions = {
  title: "Détails du bien",
  subtitle: "Précisez vos critères de recherche",
  questions: [
    {
      id: "surface",
      label: "Surface souhaitée (m²)",
      type: "select",
      required: true,
      placeholder: "Sélectionnez la surface",
      options: [
        { value: "moins-30", text: "Moins de 30m²" },
        { value: "30-50", text: "30m² - 50m²" },
        { value: "50-80", text: "50m² - 80m²" },
        { value: "80-120", text: "80m² - 120m²" },
        { value: "120-200", text: "120m² - 200m²" },
        { value: "plus-200", text: "Plus de 200m²" }
      ]
    },
    {
      id: "rooms",
      label: "Nombre de pièces",
      type: "select",
      required: true,
      placeholder: "Sélectionnez le nombre de pièces",
      options: [
        { value: "1", text: "1 pièce" },
        { value: "2", text: "2 pièces" },
        { value: "3", text: "3 pièces" },
        { value: "4", text: "4 pièces" },
        { value: "5", text: "5 pièces" },
        { value: "plus-5", text: "Plus de 5 pièces" }
      ]
    },
    {
      id: "features",
      label: "Caractéristiques souhaitées (plusieurs choix possibles)",
      type: "checkbox",
      required: false,
      options: [
        { value: "Balcon/Terrasse", text: "Balcon/Terrasse" },
        { value: "Jardin", text: "Jardin" },
        { value: "Parking", text: "Parking" },
        { value: "Cave", text: "Cave" },
        { value: "Piscine", text: "Piscine" },
        { value: "Ascenseur", text: "Ascenseur" }
      ]
    }
  ]
};

// ============================================================================
// ÉTAPE 4 : TIMELINE ET FINANCEMENT
// ============================================================================
export const step4Questions: StepQuestions = {
  title: "Timeline et financement",
  subtitle: "Planifiez votre projet immobilier",
  questions: [
    {
      id: "timeline",
      label: "Dans combien de temps souhaitez-vous concrétiser ?",
      type: "select",
      required: true,
      placeholder: "Sélectionnez une timeline",
      options: [
        { value: "immediat", text: "Immédiatement" },
        { value: "3-mois", text: "Dans les 3 mois" },
        { value: "6-mois", text: "Dans les 6 mois" },
        { value: "1-an", text: "Dans l'année" },
        { value: "plus-1-an", text: "Dans plus d'un an" }
      ]
    },
    {
      id: "financing",
      label: "Mode de financement",
      type: "select",
      required: true,
      placeholder: "Sélectionnez le financement",
      options: [
        { value: "credit-immobilier", text: "Crédit immobilier" },
        { value: "comptant", text: "Comptant" },
        { value: "mixte", text: "Mixte (crédit + apport)" },
        { value: "non-defini", text: "Pas encore défini" }
      ]
    },
    {
      id: "currentSituation",
      label: "Votre situation actuelle",
      type: "select",
      required: true,
      placeholder: "Sélectionnez votre situation",
      options: [
        { value: "locataire", text: "Locataire" },
        { value: "proprietaire", text: "Propriétaire" },
        { value: "heberge", text: "Hébergé" },
        { value: "premier-achat", text: "Premier achat" }
      ]
    }
  ]
};

// ============================================================================
// ÉTAPE 5 : COORDONNÉES
// ============================================================================
export const step5Questions: StepQuestions = {
  title: "Vos coordonnées",
  subtitle: "Finalisez votre demande",
  questions: [
    {
      id: "firstName",
      label: "Prénom *",
      type: "text",
      required: true
    },
    {
      id: "lastName",
      label: "Nom *",
      type: "text",
      required: true
    },
    {
      id: "email",
      label: "Email *",
      type: "email",
      required: true
    },
    {
      id: "phone",
      label: "Téléphone",
      type: "tel",
      required: false,
      placeholder: "06 12 34 56 78"
    },
    {
      id: "additionalInfo",
      label: "Informations supplémentaires",
      type: "textarea",
      required: false,
      placeholder: "Précisions sur votre projet, contraintes particulières...",
      rows: 4
    }
  ]
};

// ============================================================================
// CONFIGURATION GÉNÉRALE DU FORMULAIRE
// ============================================================================
export const formConfig: FormConfig = {
  totalSteps: 5,
  steps: [
    step1Questions,
    step2Questions,
    step3Questions,
    step4Questions,
    step5Questions
  ]
};

// ============================================================================
// TYPES TYPESCRIPT POUR LA VALIDATION
// ============================================================================
export interface QuestionOption {
  value: string;
  text: string;
}

export interface Question {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'checkbox' | 'textarea';
  required: boolean;
  placeholder?: string;
  options?: QuestionOption[];
  rows?: number;
}

export interface StepQuestions {
  title: string;
  subtitle: string;
  questions: Question[];
}

export interface FormConfig {
  totalSteps: number;
  steps: StepQuestions[];
}

// ============================================================================
// EXPORT PAR DÉFAUT DE TOUTE LA CONFIGURATION
// ============================================================================
export default formConfig;
