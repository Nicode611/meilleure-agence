# Composants Footer

Ce dossier contient les composants footer réutilisables du projet Hoogstoel.

## Composants disponibles

### MainFooter
Le footer principal utilisé sur la page d'accueil. Il contient :
- Logo et description de l'entreprise
- Liens vers les sections importantes
- Section bottom footer avec copyright et liens légaux

**Utilisation :**
```tsx
import { MainFooter } from '@/components';

export default function HomePage() {
  return (
    <div>
      {/* Contenu de la page */}
      <MainFooter />
    </div>
  );
}
```

### SimpleFooter
Le footer simple utilisé sur les autres pages. Il contient :
- Copyright
- Liens vers les pages légales

**Utilisation :**
```tsx
import { SimpleFooter } from '@/components';

export default function OtherPage() {
  return (
    <div>
      {/* Contenu de la page */}
      <SimpleFooter />
    </div>
  );
}
```

## Avantages de cette approche

1. **Réutilisabilité** : Les footers sont maintenant des composants réutilisables
2. **Maintenabilité** : Modifications centralisées dans un seul endroit
3. **Cohérence** : Garantit une apparence uniforme sur tout le site
4. **Flexibilité** : Facile d'ajouter de nouveaux liens ou de modifier le contenu

## Modification des footers

Pour modifier un footer :
1. Éditez le composant correspondant dans `src/components/`
2. Les changements seront automatiquement appliqués partout où le composant est utilisé

## Structure des fichiers

```
src/components/
├── MainFooter.tsx          # Footer principal
├── SimpleFooter.tsx        # Footer simple
├── index.ts                # Exports des composants
└── README.md               # Cette documentation
```
