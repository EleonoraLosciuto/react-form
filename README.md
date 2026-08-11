# React Form
This is the 25th exercise I have completed as part of the web development master. It focuses on handling user input in React, managing state with forms, dynamic list rendering, and component modularity.

## Repository name: react-form

## 📝 Task
The objective of this assignment is to build a blog article manager in React, broken down into the following requirements:
* Milestone 1: 
Create a page that displays a list of articles, showing only their titles.
* Milestone 2: 
Add a simple form containing an input field to enter the title of a new blog article. Upon form submission, render the updated list of articles.
### 🌟 Bonus
* Delete functionality: Add the ability to remove individual articles using a delete icon.
* Component Architecture: Split the application logic and UI into multiple reusable React components.

## 📂 Project Structure
```
REACT-FORM/
├── node_modules/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── articles.js
│   ├── components/
│   │   ├── Form.css
│   │   └── Form.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## 🛠️ Technologies Used
* HTML5: Semantic structure.
* CSS3: Custom styling and layout.
* JavaScript (ES6): Logic, state management, and DOM manipulation.
* React: Component-based UI library and hook management.
* Vite: Build tool and development server.
* VSCode: IDE.



Ciao ragazzi,
esercizio di oggi: React Blog Form

repo: react-form

Continuiamo a estendere il blog in react. Aggiungiamo un form con più campi per creare un nuovo post all’interno di un blog.

I dati che il form dovrà inviare sono i seguenti:

author (string) - L’autore del post
title (string) - Il titolo del post
body (string) - Il testo del post
public (boolean) - Se il post deve essere pubblico (true) o una bozza (false)

BONUS

per gestire il campo "public" proviamo a usare una checkbox, invece di un input in cui scrivere "true" o "false". possiamo distinguere il campo public verificando il suo .name (o il suo .type) con un if.