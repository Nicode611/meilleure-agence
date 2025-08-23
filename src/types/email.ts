export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export interface RealEstateFormData {
  // Étape 1 - Type de projet
  projectType: string;
  propertyType: string;
  
  // Étape 2 - Localisation
  region: string;
  city: string;
  budget: string;
  
  // Étape 3 - Détails du bien
  surface: string;
  rooms: string;
  features: string[];
  
  // Étape 4 - Timeline et financement
  timeline: string;
  financing: string;
  currentSituation: string;
  
  // Étape 5 - Contact et validation
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  additionalInfo: string;
}

export interface EmailResponse {
  success: boolean;
  data?: unknown;
  error?: string;
}
