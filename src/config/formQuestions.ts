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
// ÉTAPE 1 : VENTE IMMOBILIÈRE
// ============================================================================
export const step1Questions: StepQuestions = {
  title: "Votre vente immobilière",
  subtitle: "Décrivez-nous votre agence idéale",
  questions: [
    {
      id: "city",
      label: "Ville ou secteur",
      type: "text",
      required: true,
      placeholder: "Ex: Bruxelles, Charleroi, Liège..."
    },
    {
      id: "propertyValue",
      label: "Valeur du bien à vendre",
      type: "select",
      required: true,
      placeholder: "Sélectionnez la valeur",
      options: [
        { value: "moins-100k", text: "Moins de 100k€" },
        { value: "100k-200k", text: "100k€ - 200k€" },
        { value: "200k-300k", text: "200k€ - 300k€" },
        { value: "300k-500k", text: "300k€ - 500k€" },
        { value: "500k-1m", text: "500k€ - 1M€" },
        { value: "plus-1m", text: "Plus de 1M€" }
      ]
    },
    {
      id: "timeline",
      label: "Délai de votre projet",
      type: "select",
      required: true,
      placeholder: "Sélectionnez un délai",
      options: [
        { value: "immediat", text: "Immédiatement" },
        { value: "3-mois", text: "Dans les 3 mois" },
        { value: "6-mois", text: "Dans les 6 mois" },
        { value: "1-an", text: "Dans l'année" },
        { value: "plus-1-an", text: "Dans plus d'un an" }
      ]
    }
  ]
};

// ============================================================================
// ÉTAPE 2 : DÉTAILS DU BIEN À VENDRE
// ============================================================================
export const step2Questions: StepQuestions = {
  title: "Détails du bien à vendre",
  subtitle: "Précisez les caractéristiques de votre bien",
  questions: [
    {
      id: "propertyType",
      label: "Type de bien",
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
    },
    {
      id: "surface",
      label: "Surface (m²)",
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
      id: "features",
      label: "Caractéristiques (plusieurs choix possibles)",
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
// ÉTAPE 3 : COORDONNÉES
// ============================================================================
export const step3Questions: StepQuestions = {
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
      placeholder: "+32 475 12 34 56"
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
  totalSteps: 3,
  steps: [
    step1Questions,
    step2Questions,
    step3Questions
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
