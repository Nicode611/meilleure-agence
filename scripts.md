# 🛠️ Scripts Utiles - HOOGSTOEL

## 🚀 **Scripts de développement**

### **Installation et démarrage**
```bash
# Installation des dépendances
npm install

# Démarrage en mode développement
npm run dev

# Construction pour la production
npm run build

# Démarrage en mode production
npm start

# Linting du code
npm run lint

# Vérification des types TypeScript
npm run type-check
```

## 🔧 **Scripts personnalisés utiles**

### **Nettoyage du projet**
```bash
# Supprimer les dossiers de build
rm -rf .next out build dist

# Supprimer les modules node
rm -rf node_modules

# Réinstaller proprement
npm install
```

### **Vérification de la qualité du code**
```bash
# Linting avec ESLint
npx eslint src/ --ext .ts,.tsx

# Formatage avec Prettier
npx prettier --write src/

# Vérification des types TypeScript
npx tsc --noEmit
```

### **Tests et validation**
```bash
# Test de l'API
curl -X POST http://localhost:3000/api/test

# Test de build
npm run build && npm start

# Vérification des performances
npx lighthouse http://localhost:3000 --view
```

## 📦 **Scripts de déploiement**

### **Vercel (recommandé)**
```bash
# Installation de Vercel CLI
npm i -g vercel

# Déploiement
vercel --prod

# Variables d'environnement
vercel env add RESEND_API_KEY
```

### **Déploiement manuel**
```bash
# Construction
npm run build

# Test local
npm start

# Upload des fichiers
# (selon votre hébergeur)
```

## 🧹 **Maintenance**

### **Mise à jour des dépendances**
```bash
# Vérifier les mises à jour
npm outdated

# Mise à jour interactive
npx npm-check-updates -u

# Réinstaller
npm install
```

### **Nettoyage du cache**
```bash
# Cache Next.js
rm -rf .next

# Cache npm
npm cache clean --force

# Cache Vercel
vercel --clear-cache
```

## 📊 **Monitoring**

### **Vérification des performances**
```bash
# Bundle analyzer
npm run build
npx @next/bundle-analyzer

# Lighthouse CI
npm install -g @lhci/cli
lhci autorun
```

### **Logs et debugging**
```bash
# Logs en temps réel
npm run dev | grep -E "(error|warn|info)"

# Vérification des variables d'environnement
node -e "console.log(process.env.RESEND_API_KEY ? '✅ API Key configurée' : '❌ API Key manquante')"
```

## 🆘 **Dépannage**

### **Problèmes courants**
```bash
# Port déjà utilisé
lsof -ti:3000 | xargs kill -9

# Problèmes de modules
rm -rf node_modules package-lock.json && npm install

# Cache corrompu
rm -rf .next && npm run dev
```

### **Vérification de l'environnement**
```bash
# Vérifier Node.js
node --version

# Vérifier npm
npm --version

# Vérifier les variables d'environnement
cat .env.local
```

---

## 💡 **Conseils d'utilisation**

1. **Toujours faire `npm run build` avant le déploiement**
2. **Vérifier les variables d'environnement avant chaque déploiement**
3. **Utiliser `npm run lint` avant chaque commit**
4. **Tester l'API avec l'endpoint `/api/test`**
5. **Vérifier la responsivité sur différents écrans**

## 📞 **En cas de problème**

- Consultez la **documentation client** (`DOCUMENTATION-CLIENT.md`)
- Vérifiez les **logs de la console**
- Testez avec l'**endpoint de test** (`/api/test`)
- Contactez le **développeur** pour assistance technique
