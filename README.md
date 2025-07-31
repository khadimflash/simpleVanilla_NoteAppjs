
# NoteIt

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Description du projet

NoteIt est une application web simple et intuitive de prise de notes. Elle permet aux utilisateurs de créer, d'afficher, d'épingler, d'archiver et de supprimer des notes. L'application utilise le stockage local du navigateur pour persister les notes, ce qui signifie que vos notes sont sauvegardées sur votre propre appareil.

## Fonctionnalités principales

*   **Créer une note :** Ajoutez un titre et un contenu pour créer une nouvelle note.
*   **Afficher les notes :** Visualisez toutes vos notes sur la page d'accueil.
*   **Épingler une note :** Mettez en évidence les notes importantes en les épinglant en haut de la liste.
*   **Archiver une note :** Déplacez les notes moins importantes vers une page d'archive pour désencombrer votre vue principale.
*   **Supprimer une note :** Supprimez définitivement les notes dont vous n'avez plus besoin.
*   **Stockage local :** Les notes sont sauvegardées dans le `localStorage` de votre navigateur.

## Architecture du projet

L'application est construite avec une architecture front-end simple utilisant HTML, CSS et JavaScript.

*   **`index.html`**: La page principale où les utilisateurs peuvent créer et voir leurs notes.
*   **`archive.html`**: La page où les notes archivées sont affichées.
*   **`src/style.css`**: Contient tous les styles pour l'application.
*   **`src/app.js`**: Un module JavaScript qui contient la logique partagée, comme le rendu des notes et la gestion du `localStorage`.
*   **`src/main.js`**: Le script principal pour la page `index.html`. Il gère l'ajout, l'épinglage, l'archivage et la suppression des notes.
*   **`src/archive.js`**: Le script pour la page `archive.html`. Il gère l'affichage et la manipulation des notes archivées.

L'état de l'application (la liste des notes) est géré dans un tableau JavaScript et synchronisé avec le `localStorage` du navigateur.

```
NoteAppJs/
├───.gitignore
├───archive.html
├───index.html
├───package.json
├───README.md
├───assets/
│   └───...
└───src/
    ├───app.js
    ├───archive.js
    ├───main.js
    └───style.css
```

## Installation et exécution

Ce projet utilise Vite pour le développement.

1.  **Clonez le dépôt :**
    ```bash
    git clone https://github.com/votre-nom-utilisateur/NoteAppJs.git
    cd NoteAppJs
    ```

2.  **Installez les dépendances :**
    ```bash
    npm install
    ```

3.  **Exécutez le serveur de développement :**
    ```bash
    npm run dev
    ```
    Ouvrez votre navigateur et allez à l'adresse indiquée (généralement `http://localhost:5173`).

## Utilisation

1.  Ouvrez l'application dans votre navigateur.
2.  Entrez un titre et un contenu pour votre note dans les champs prévus à cet effet.
3.  Cliquez sur le bouton "+" pour ajouter la note.
4.  Utilisez les icônes sur chaque note pour l'épingler, l'archiver ou la supprimer.
5.  Visitez la page "Archive" pour voir vos notes archivées.

## Auteurs

*   **[khadim GNING]** - *Développement initial* - [khadimflash](https://github.com/khadimflash)
## Deploy on sevalla:
* https://simplevanilla-noteappjs.onrender.com


