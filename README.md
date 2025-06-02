# Clippy Token - Site Web

Site web officiel pour Clippy Token, le retour du célèbre assistant de bureau sur la blockchain.

## Fonctionnalités

- Design moderne et réactif
- Graphique en temps réel avec intégration DexScreener
- Liens directs vers Uniswap pour l'achat
- Sections d'information claires
- Compatible mobile et desktop

## Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

## Installation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/clippy-token-website.git
   cd clippy-token-website
   ```

2. Installer les dépendances :
   ```bash
   npm install
   # ou
   yarn install
   ```

## Développement

Pour lancer le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## Construction pour la production

Pour créer une version de production optimisée :

```bash
npm run build
# ou
yarn build
```

Puis pour lancer le serveur de production :

```bash
npm start
# ou
yarn start
```

## Déploiement

Le site peut être déployé sur Vercel, Netlify, ou tout autre hébergeur supportant les applications Next.js.

## Personnalisation

- Pour mettre à jour les liens vers les réseaux sociaux, modifiez les liens dans le composant `Footer.jsx`
- Pour modifier les couleurs, éditez les variables dans `globals.css`
- Pour mettre à jour les liens d'achat, modifiez les URLs dans `index.js`

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Remerciements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DexScreener](https://dexscreener.com/)
