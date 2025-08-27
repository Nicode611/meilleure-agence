/**
 * 📁 EXPORTS DU DOSSIER CONFIG
 * ============================
 * 
 * Ce fichier exporte tous les éléments de configuration du formulaire
 * pour faciliter leur utilisation dans le projet.
 */

// Configuration principale du formulaire
export { default as formConfig } from './formQuestions';
export * from './formQuestions';

// Exemples de personnalisation
export * from './examples';

// Types TypeScript
export type {
  QuestionOption,
  Question,
  StepQuestions,
  FormConfig
} from './formQuestions';
