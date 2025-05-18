# simple-app-example

## Installation

1. Install [VS Code](https://code.visualstudio.com/download).  
2. Install [Node.js](https://nodejs.org/en/download).  
3. Open VS Code.  
4. In VS Code, go to **File → Open Folder** and select the folder containing this file (README.md).  
5. In VS Code, go to **Terminal → New Terminal**; this should open a command line at the bottom of the screen.  
6. In the command line, type `npm install -g yarn` and wait until it finishes.  
7. In the command line, type `yarn install` and wait until it finishes.  
8. In the command line, type `node index.js`.  
9. A browser should open a new tab at **http://localhost:3000**.

Congratulations — you have just initialized your first full-stack JavaScript application.

## Orientation

1. The engine has created the default source‑code structure in `./src`.  
2. You will find static HTML files in `./src/public`.  
3. Front‑end JavaScript and CSS files are in `./src/frontend`.  
4. Back‑end JavaScript is in `./src/backend`.  
5. There is also a folder `./src/arc` for code that is shared by the front end and back end.

## Work process

The dev server automatically rebuilds and refreshes the application whenever files change.  
There is no need to add additional `<style>` or `<script>` elements to the `index.html` template.  
Write your code in `./src/frontend/index.js` and `./src/backend/index.js`; it will be autoloaded.

If you need to split your project into more files, do so via ES6 module commands:

- `import`
- `export`

You can also use the `.sass` format instead of `.css`.

Happy hacking!
