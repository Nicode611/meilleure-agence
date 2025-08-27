/**
 * 🎨 EXEMPLES DE PERSONNALISATION DU FORMULAIRE
 * ==============================================
 * 
 * Ce fichier contient des exemples concrets de modifications que vous pouvez
 * appliquer au fichier formQuestions.ts pour personnaliser votre formulaire.
 * 
 * 📝 UTILISATION :
 * 1. Copiez l'exemple qui vous intéresse
 * 2. Collez-le dans formQuestions.ts en remplaçant la section correspondante
 * 3. Adaptez le contenu selon vos besoins
 */

// ============================================================================
// EXEMPLE 1 : AJOUTER UNE NOUVELLE QUESTION DANS L'ÉTAPE 1
// ============================================================================
export const exampleStep1WithNewQuestion = {
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
    },
    // 🆕 NOUVELLE QUESTION AJOUTÉE
    {
      id: "urgency",
      label: "Quel est le niveau d'urgence de votre projet ?",
      type: "select",
      required: false,
      placeholder: "Sélectionnez l'urgence",
      options: [
        { value: "tres-urgent", text: "Très urgent (dans le mois)" },
        { value: "urgent", text: "Urgent (dans les 3 mois)" },
        { value: "normal", text: "Normal (dans l'année)" },
        { value: "pas-urgent", text: "Pas urgent (plus d'un an)" }
      ]
    }
  ]
};

// ============================================================================
// EXEMPLE 2 : MODIFIER LES OPTIONS DE BUDGET
// ============================================================================
export const exampleBudgetOptions = {
  id: "budget",
  label: "Budget envisagé",
  type: "select",
  required: true,
  placeholder: "Sélectionnez votre budget",
  options: [
    { value: "moins-75k", text: "Moins de 75k€" },
    { value: "75k-100k", text: "75k€ - 100k€" },
    { value: "100k-150k", text: "100k€ - 150k€" },
    { value: "150k-200k", text: "150k€ - 200k€" },
    { value: "200k-300k", text: "200k€ - 300k€" },
    { value: "300k-500k", text: "300k€ - 500k€" },
    { value: "500k-750k", text: "500k€ - 750k€" },
    { value: "750k-1m", text: "750k€ - 1M€" },
    { value: "plus-1m", text: "Plus de 1M€" }
  ]
};

// ============================================================================
// EXEMPLE 3 : AJOUTER DE NOUVELLES CARACTÉRISTIQUES
// ============================================================================
export const exampleFeaturesOptions = {
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
    { value: "Ascenseur", text: "Ascenseur" },
    // 🆕 NOUVELLES CARACTÉRISTIQUES
    { value: "Garage", text: "Garage" },
    { value: "Terrasse", text: "Terrasse" },
    { value: "Loggia", text: "Loggia" },
    { value: "Cheminée", text: "Cheminée" },
    { value: "Climatisation", text: "Climatisation" },
    { value: "Domotique", text: "Domotique" }
  ]
};

// ============================================================================
// EXEMPLE 4 : MODIFIER LES RÉGIONS POUR LA BELGIQUE
// ============================================================================
export const exampleBelgianRegions = {
  id: "region",
  label: "Région souhaitée",
  type: "select",
  required: true,
  placeholder: "Sélectionnez une région",
  options: [
    { value: "bruxelles-capitale", text: "Région de Bruxelles-Capitale" },
    { value: "wallonie", text: "Wallonie" },
    { value: "flandre", text: "Flandre" },
    { value: "brabant-wallon", text: "Brabant wallon" },
    { value: "brabant-flamand", text: "Brabant flamand" },
    { value: "anvers", text: "Province d'Anvers" },
    { value: "limbourg", text: "Province de Limbourg" },
    { value: "liege", text: "Province de Liège" },
    { value: "namur", text: "Province de Namur" },
    { value: "hainaut", text: "Province de Hainaut" },
    { value: "luxembourg", text: "Province de Luxembourg" },
    { value: "flandre-occidentale", text: "Flandre occidentale" },
    { value: "flandre-orientale", text: "Flandre orientale" }
  ]
};

// ============================================================================
// EXEMPLE 5 : AJOUTER UNE NOUVELLE ÉTAPE COMPLÈTE
// ============================================================================
export const exampleNewStep = {
  title: "Préférences personnelles",
  subtitle: "Décrivez vos goûts et préférences",
  questions: [
    {
      id: "styleArchitecture",
      label: "Quel style architectural préférez-vous ?",
      type: "select",
      required: false,
      placeholder: "Sélectionnez le style",
      options: [
        { value: "moderne", text: "Moderne/Contemporain" },
        { value: "classique", text: "Classique/Traditionnel" },
        { value: "haussmannien", text: "Haussmannien" },
        { value: "art-deco", text: "Art déco" },
        { value: "contemporain", text: "Contemporain" },
        { value: "rustique", text: "Rustique/Charmant" },
        { value: "pas-preference", text: "Aucune préférence particulière" }
      ]
    },
    {
      id: "environnement",
      label: "Quel type d'environnement recherchez-vous ?",
      type: "checkbox",
      required: false,
      options: [
        { value: "calme", text: "Quartier calme" },
        { value: "animé", text: "Quartier animé" },
        { value: "nature", text: "Proche de la nature" },
        { value: "commerce", text: "Proche des commerces" },
        { value: "transport", text: "Proche des transports" },
        { value: "ecole", text: "Proche des écoles" },
        { value: "hopital", text: "Proche des hôpitaux" }
      ]
    },
    {
      id: "contraintes",
      label: "Avez-vous des contraintes particulières ?",
      type: "textarea",
      required: false,
      placeholder: "Ex: accessibilité, animaux, travaux...",
      rows: 3
    }
  ]
};

// ============================================================================
// EXEMPLE 6 : MODIFIER LES TITRES ET SOUS-TITRES
// ============================================================================
export const exampleCustomTitles = {
  // Étape 1
  step1: {
    title: "🎯 Votre Projet Immobilier",
    subtitle: "Commençons par définir ensemble votre projet"
  },
  
  // Étape 2
  step2: {
    title: "📍 Localisation & Budget",
    subtitle: "Où et avec quel budget souhaitez-vous acheter ?"
  },
  
  // Étape 3
  step3: {
    title: "🏠 Caractéristiques du Bien",
    subtitle: "Décrivez le bien de vos rêves"
  },
  
  // Étape 4
  step4: {
    title: "⏰ Planning & Financement",
    subtitle: "Quand et comment souhaitez-vous procéder ?"
  },
  
  // Étape 5
  step5: {
    title: "👤 Vos Coordonnées",
    subtitle: "Finalisons votre demande ensemble"
  }
};

// ============================================================================
// EXEMPLE 7 : FORMULAIRE SIMPLIFIÉ (3 ÉTAPES)
// ============================================================================
export const exampleSimplifiedForm = {
  totalSteps: 3,
  steps: [
    {
      title: "Projet immobilier",
      subtitle: "Décrivez votre projet",
      questions: [
        {
          id: "projectType",
          label: "Quel est votre projet ?",
          type: "select",
          required: true,
          placeholder: "Sélectionnez",
          options: [
            { value: "achat", text: "Achat" },
            { value: "location", text: "Location" },
            { value: "investissement", text: "Investissement" }
          ]
        },
        {
          id: "propertyType",
          label: "Type de bien ?",
          type: "select",
          required: true,
          placeholder: "Sélectionnez",
          options: [
            { value: "appartement", text: "Appartement" },
            { value: "maison", text: "Maison" },
            { value: "terrain", text: "Terrain" }
          ]
        }
      ]
    },
    {
      title: "Localisation",
      subtitle: "Où souhaitez-vous acheter ?",
      questions: [
        {
          id: "city",
          label: "Ville ou secteur",
          type: "text",
          required: true,
          placeholder: "Ex: Bruxelles, Anvers..."
        },
        {
          id: "budget",
          label: "Budget",
          type: "select",
          required: true,
          placeholder: "Sélectionnez",
          options: [
            { value: "moins-200k", text: "Moins de 200k€" },
            { value: "200k-500k", text: "200k€ - 500k€" },
            { value: "plus-500k", text: "Plus de 500k€" }
          ]
        }
      ]
    },
    {
      title: "Contact",
      subtitle: "Vos coordonnées",
      questions: [
        {
          id: "name",
          label: "Nom complet",
          type: "text",
          required: true
        },
        {
          id: "email",
          label: "Email",
          type: "email",
          required: true
        },
        {
          id: "phone",
          label: "Téléphone",
          type: "tel",
          required: false
        }
      ]
    }
  ]
};

// ============================================================================
// COMMENT UTILISER CES EXEMPLES
// ============================================================================
/*
1. Choisissez l'exemple qui correspond à vos besoins
2. Copiez le contenu dans formQuestions.ts
3. Adaptez les valeurs selon vos besoins
4. Testez en rechargeant la page

⚠️  IMPORTANT : N'oubliez pas de modifier aussi formConfig.totalSteps
   si vous changez le nombre d'étapes !
*/
