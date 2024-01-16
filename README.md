# React Project Setup
## Create A New Repository

1. Create `filmFlix-client` folder on your machine.
2. Create a new repository with the same folder name on your GitHub account.
3. In your terminal or VSCode terminal, navigate to the new folder.
4. Run `npm init -y` in the terminal to create the `package.json`.
5. Delete the line `"main": "index.js"` from the `package.json`.
6. Create a new `.gitignore` file and add the following:
```
node_modules
.cache
.parcel-cache
```
7. Commit your changes.

## Configuring Parcel for Your filmFlix App

To transpile and bundle your filmFlix app, configure Parcel to:

- Instruct Babel to transpile JSX into JavaScript.
- Transpile SCSS files into CSS.
- Bundle separate React code files into a single JavaScript file for optimized deployment.

## Installing the Right Dependencies

Make sure you're inside the `filmFlix-client` project folder in your terminal. Run the following commands:

```bash
npm install -g parcel
npm install --save react react-dom
```

## Installing Parcel as a Local Developer Dependency
Although Parcel is installed globally for now, consider installing it locally for version control. This ensures consistency for everyone accessing the app.

Creating Your First Files
Inside "filmFlix-client/src", create the following files:

1. index.jsx
```
import { createRoot } from 'react-dom/client';
import "./index.scss";

const FilmFlixApplication = () => {
  return (
    <div className="film-flix">
      <div>Good morning</div>
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<FilmFlixApplication />);
```

2. index.scss
```
$color: steelblue;
.film-flix {
  color: $color;
}
```

3. index.html
```
<!DOCTYPE html>
<html>
  <head>
    <title>filmFlix</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="index.jsx"></script>
  </body>
</html>
```

## Building An App
Navigate to `filmFlix-client` folder in the terminal and run:
```
parcel src/index.html
```

### Note! 
For some computers, Parcel v2 may return an error. Ensure you have Microsoft Visual C++ 2015 Redistributable (x64) installed. Also, install process globally if needed.

After running the command, Parcel will build the project, creating new files in the dist directory. Do not modify these files. The browser loads the updated index.html with hashed filenames to avoid caching.

View your project at http://localhost:1234. 

(To start the server; type <span style="font-family: 'Monaco'; font-size: 16px; font-weight:light; color: yellow">
parcel src/index.html</span> in terminal).


### books, setBooks
The following line of code is written in React and utilizes the `useState` hook:

```
const [books, setBooks] = useState([]);
```

1. `useState([])`: This is a call to the `useState` hook, which allows functional components to have state. It initializes the state variable with an empty array (`[]`).

2. `const [books, setBooks]`: This line uses destructuring assignment to create two variables, `books` and `setBooks`, from the result of calling `useState([])`.
   - `books`: Represents the current state value, initially set to an empty array.
   - `setBooks`: A function to update the state variable `books`.

In summary, this code initializes a state variable `books` with an empty array and provides a function `setBooks` to update the state, commonly used in React to manage component state.

### selectedBook, setSelectedBook
The following line of code is another example using the `useState` hook in React:

```
const [selectedBook, setSelectedBook] = useState(null);
```

1. `useState(null)`: This is a call to the `useState` hook, similar to the previous example. It initializes the state variable with `null` in this case.

2. `const [selectedBook, setSelectedBook]`: This line uses destructuring assignment to create two variables, `selectedBook` and `setSelectedBook`, from the result of calling `useState(null)`.
   - `selectedBook`: Represents the current state value, initially set to `null`.
   - `setSelectedBook`: A function to update the state variable `selectedBook`.

In summary, this code initializes a state variable `selectedBook` with `null` as its initial value and provides a function `setSelectedBook` to update the state. This pattern is commonly used in React to manage and update component state.
