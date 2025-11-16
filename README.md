AniMatch – Project Documentation

1. Branches Overview

Ce projet contient 3 branches principales, chacune représentant une interface différente du site :

🔹 1. homepage

Contient l’interface de la page d’accueil

Développement Frontend uniquement (React)

Composants UI, sections d’accueil, navigation…

🔹 2. loginpage

Contient la page de connexion / authentification

Frontend + Backend

Gestion de l’API, traitement des requêtes, sécurité de base

🔹 3. catspage & lora

Interface dédiée à la page des chats

Développement Frontend uniquement (React)

Affichage des animaux, cartes, filtres, etc.

Ces branches sont séparées afin de faciliter :

la maintenance

l’évolution de chaque interface

le travail en équipe

📌 2. Choix du framework

Pour le développement du site web AniMatch, nous avons choisi React.js.

🎯 Pourquoi ce choix ?

⚡ Performance élevée grâce au Virtual DOM

♻️ Composants réutilisables, facilitant la maintenance

🚀 Écosystème moderne grâce à Vite pour un développement rapide

🔧 Idéal pour un site dynamique comme AniMatch

📌 3. Fonctionnalités développées
🔹 Interface utilisateur moderne

Pages : Accueil, Adoption, Services, Contact…

Design responsive (mobile & desktop)



🔹 Gestion des données

Chargement d'informations (images, descriptions…)

Préparation pour une future API d’adoption


📌 4. Étapes de lancement du projet
✔️ Installation
git clone <lien-du-repo>
cd animatch-website
npm install

✔️ Lancer en développement
npm run dev

✔️ Build production
npm run build

✔️ Prévisualisation
npm run preview
