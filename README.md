# React Form
This is the 25th exercise I have completed as part of the web development master. It focuses on handling user input in React, managing state with forms, dynamic list rendering, and component modularity.

## Repository name: react-form

## 📝 Task

### Part 1
The objective of this assignment is to build a blog article manager in React, broken down into the following requirements:
* Milestone 1: 
Create a page that displays a list of articles, showing only their titles.
* Milestone 2: 
Add a simple form containing an input field to enter the title of a new blog article. Upon form submission, render the updated list of articles.
### 🌟 Bonus
* Delete functionality: Add the ability to remove individual articles using a delete icon.
* Component Architecture: Split the application logic and UI into multiple reusable React components.

### Part 2 (multiple fields form)
We will add a form with multiple fields to create a new blog post.
The form will need to send the following data:
* author (string) - The author of the post
* title (string) - The title of the post
* body (string) - The content of the post
* public (boolean) - Whether the post should be public (true) or a draft (false)

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