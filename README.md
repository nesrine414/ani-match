# 🐾 AniMatch – Project Documentation

## 📌 Présentation du projet

**AniMatch** est une plateforme web dédiée à l’adoption d’animaux.  
Le projet a pour objectif de faciliter la recherche d’animaux à adopter grâce à une interface moderne, intuitive et dynamique, tout en intégrant un système de gestion des utilisateurs.

---

## 🌿 Branches Overview

Le projet contient **2 branches principales** :

### 🔹 1. main
Cette branche contient :
- 📄 Un fichier **README** expliquant :
  - le fonctionnement du projet  
  - l’objectif  
  - la logique globale  
- 🗄️ **Deux fichiers `.sql`** correspondant aux bases de données utilisées pour le backend  
### 🔹 2. **Ani-match_web_page** :
  - contient l’intégralité du projet **frontend et backend**

---

## 🧩 Description du projet

### 🎨 Interfaces utilisateur modernes
AniMatch propose une interface moderne et responsive avec les pages suivantes :

- Home Page  
- About Us  
- Adopt  
- Sign In  
- Sign Up  
- Search Result  
- Pet Profile  
- User Profile  

Toutes les interfaces sont conçues pour offrir une expérience utilisateur fluide sur **desktop et mobile**.

---

## 🧱 Choix du framework

Pour le développement du site web **AniMatch**, nous avons choisi **React.js**.

### 🎯 Pourquoi React.js ?
- ⚡ Haute performance grâce au **Virtual DOM**
- ♻️ Composants réutilisables facilitant la maintenance
- 🚀 Développement rapide avec **Vite**
- 🔧 Adapté aux applications web dynamiques

---

## ⚙️ Fonctionnalités développées

### 🔹 Frontend
- Toutes les pages citées ci-dessus sont **entièrement développées**
- Navigation fluide entre les pages
- Design responsive et moderne

---

### 🔹 Gestion des données

Le projet utilise **MySQL** avec **deux bases de données** :

- 🗄️ `animatchdb`  
  → utilisée pour :
  - Sign In
  - Sign Up
  - Gestion des utilisateurs

- 🗄️ `animatchsearchdb`  
  → utilisée pour :
  - la barre de recherche des animaux dans AniMatch

---

## 🖥️ Backend (Flask – Python)

### 🔹 Technologies utilisées
- **Flask (Python)** pour le développement de l’API
- **MySQL** pour la gestion des données
- API REST pour la communication avec le frontend

### 🔹 Fonctionnalités backend
Le backend est :
- ✅ Fonctionnel pour :
  - le processus de **Sign In**
  - le processus de **Sign Up**
  - la **barre de recherche** sur la Home Page
- ⚠️ Les APIs des autres pages sont déjà créées pour le frontend, mais ne sont pas encore entièrement fonctionnelles

---

### 🔹 Organisation du backend
Dans la branche du projet :

- 📁 `backend/`  
  - contient toutes les APIs développées avec Flask
   - contient le fichier principal `app.py`
  
- 📄 `requirements.txt`  
  - contient tous les modules nécessaires au fonctionnement du backend

---

### ▶️ Lancer le backend

1. Accéder au dossier `backend` :
```bash 
cd backend
```
Installer les dépendances :
```
pip install -r requirements.txt
```

Lancer le serveur :
```
python app.py
```
📌 Le backend fonctionne sur le port 5000 

###  🚀 Lancement du projet (Frontend)

```
git clone https://github.com/nesrine414/ani-match.git
cd .\frontend
```
#✔️ Installation
```
npm install
```
✔️ Lancer en mode développement
```
cd .Ani-match\src\pages
npm run dev
```
✔️ Build production
```
npm run build
```
👥 Contributeurs

@nesrine414

@Amaal122 

@eslem10
