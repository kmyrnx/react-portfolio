# React Portfolio

This is a simple portfolio that I have built using React for educational purposes only. While it is working, keep in mind it needs enhancements. However, clone/fork it happily and enjoy! :smile:

## Notes
- Sample data is stored in JSON files.
- Search functionality works locally using the `filter` function.
- Some components are built using `memo` to enhance performance.
- All components are using `useEffect` to update the state (No classes).
- I tried to keep the code as simple as possible, without extra libraries.
- This is built on React 18 and should work on any browser that supports JavaScript.

## Features
### Mini Profile
At the top, there's a mini profile that shows the name, title, and social links.

### Search
The search box will search through the projects and display the results (locally).

### Tags
You can filter out projects by clicking on tags.

### Projects (Cards)
The list of projects is displayed in cards.

### To-Do
- [ ] Add pagination or lazy scroll kmyrnx/react-portfolio#1
- [ ] Add admin panel kmyrnx/react-portfolio#2
- [ ] Add Redux for state management kmyrnx/react-portfolio#3
- [ ] Add unit tests (current coverage: 0%) kmyrnx/react-portfolio#4

## Installation
Just clone the repository and run `npm install` to install the dependencies then run `npm start` to start the application.

## Usage
The following structure organizes components. Each component has its own directory and needed API handler, which you can easily modify.

## Structure
```
├── README.md
├── package.json
├── public
│   ├── data
│   │   ├── cards.json
│   │   ├── profile.json
│   │   └── terms.json
│   ├── favicon.ico
│   ├── index.html
│   ├── robots.txt
│   └── static
│       └── imgs
│           ├── cards
│           │   ├── card1.jpg
│           │   ├── card2.jpg
│           │   ├── card3.jpg
│           │   ├── card4.jpg
│           │   └── card5.jpg
│           └── profile.jpeg
└── src
    ├── cards
    │   ├── Card.jsx
    │   ├── Card.scss
    │   ├── Card.test.jsx
    │   ├── CardList.jsx
    │   ├── CardList.scss
    │   ├── CardList.test.jsx
    │   ├── CardsAPI.js
    │   └── index.jsx
    ├── common
    │   ├── App.jsx
    │   ├── App.scss
    │   ├── App.test.jsx
    │   └── ErrorBoundary.jsx
    ├── footer
    │   ├── Footer.jsx
    │   ├── Footer.scss
    │   ├── Footer.test.jsx
    │   └── index.jsx
    ├── index.jsx
    ├── index.scss
    ├── profile
    │   ├── Profile.jsx
    │   ├── Profile.scss
    │   ├── Profile.test.jsx
    │   ├── ProfileAPI.js
    │   └── index.jsx
    ├── reportWebVitals.js
    ├── scss
    │   └── _variables.scss
    ├── search
    │   ├── SearchBox.jsx
    │   ├── SearchBox.scss
    │   ├── SearchBox.test.jsx
    │   └── index.jsx
    ├── setupTests.js
    └── tags
        ├── Tag.jsx
        ├── Tag.scss
        ├── Tag.test.jsx
        ├── TagList.jsx
        ├── TagList.scss
        ├── TagList.test.jsx
        ├── TagsAPI.js
        └── index.jsx
```

## Thanks
Photographers on Unsplash for providing the images:
- [Ivan Torres](https://unsplash.com/@ivant)
- [Di_An_h](https://unsplash.com/@di_an_h)
- [Lloyd Dirks](https://unsplash.com/@lloyddirks)
- [Myke Simon](https://unsplash.com/@myke_simon)
- [Eiliv-Sonas Aceron](https://unsplash.com/@shootdelicious)
- [Joseph Gonzalez](https://unsplash.com/@miracletwentyone)
