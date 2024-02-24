
# Rule of thumb

Overview:

Our client's app Rule of Thumb™️ tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc. The website has the following requirement they need to present their users with an easy way to share their opinion on each presented celebrity, using votes (thumbs up and down), and display the results to the user while the poll is open. These features should be available to all users, regardless of where they're accessing the website from, whether it's a smartphone, a tablet or a desktop computer.

## About the Project

In the development of this project, our utmost priority is to ensure exceptional responsiveness and interactivity. Users will seamlessly navigate through a dynamic user interface featuring interactive elements such as voting buttons, login session, and the ability to reorder displayed content interactively. These features are meticulously designed to provide an engaging and intuitive user experience, enhancing user participation and interaction with the platform.

## Screenshots

![Grid Layout](public/grid-layout.png)
![Horizontal Layout](public/list-layout.png)
![Mobile Scroll](public/mobile-scroll.png)
![Resized Cover](public/resized-cover.png)

#### List of features
- [x]  Social login
- [x]  Interactive banner buttons and gauge bar
- [x]  Grid view mode
- [x]  List view mode
- [x]  Submit new vote individually
- [x]  Interactive 'suggest a name' button
- [x]  Informative toast on action
- [x]  State management
- [x]  Accessibility


## Stack

 - [Nextjs](https://nextjs.org/docs/app/building-your-application/routing)
 - [Typescript](https://www.typescriptlang.org/docs/handbook/intro.html)
 - [React](https://react.dev/learn)
 - [Json Server](https://github.com/typicode/json-server/tree/v0)
 - [NextAuth](https://next-auth.js.org/getting-started/introduction)
 - [Axios](https://axios-http.com/docs/intro)
 - [TailwindCss](https://tailwindcss.com/docs/installation)
 - [Shadcn](https://ui.shadcn.com/docs)



## Installation

Clone the project - [Rule of thumb](https://github.com/felipprodrigues/rule-of-thumb)

```bash
  git clone git@github.com:felipprodrigues/rule-of-thumb.git
```

Go to the project directory

```bash
  cd my-project
```

### Before installing the dependencies
#### Node.js Version Setup:

- Ensure you have Node Version Manager (NVM) installed on your system.
- Navigate to the root directory of this project where the .nvmrc file is located.
- The version specified in the file is **`v18.17.1`**
- Run the following command on the command line to set the Node.js version specified in .nvmrc:

```bash
nvm use
```

#### Installation of Dependencies:

- Run the following command to instal project Dependencies

```bash
npm install
```

#### Notes:
- The .nvmrc file contains the Node.js version **`v18.17.1`** required for the application. Ensure that this version is installed via NVM before proceeding with other steps.
- After installing Node.js using NVM, you can switch to the specified version by running nvm use in the project directory.
- Once Node.js is set up, you can install project dependencies using npm install.


Install dependencies

```bash
  npm install
```


### Run locally
Serve the front-end with

```bash
  npm run dev
```
The frontend server will be served at [http://localhost:3000](http://localhost:3000)

Serve the backend json-server mockup with

```bash
  npm run server
```
The frontend server will be served at [http://localhost:3333](http://localhost:3333)


## Authors

- [Felipe Rodrigues](https://github.com/felipprodrigues)



