# simple-app-example

## Installation

1. Install [Git](https://git-scm.com/downloads).  
2. Install [VS Code](https://code.visualstudio.com/download).  
3. Install [Node.js](https://nodejs.org/en/download).  
4. Open VS Code.  
5. In VS Code, go to **File → Open Folder** and select the project folder.  
6. In VS Code, go to **Terminal → New Terminal**; this opens a command line at the bottom of the screen.  
7. In the terminal, run the following commands **one by one**, waiting for each to finish:  

```bash
git clone https://github.com/randajan/simple-app-example
cd simple-app-example
npm install -g yarn
yarn install
node index.js
```

A browser should automatically open a new tab at **http://localhost:3000**.  
Congratulations — you have just initialized your first full‑stack JavaScript application.

## Orientation

1. The engine has created the default source‑code structure in `./src`.  
2. You will find static HTML files in `./src/public`.  
3. Front‑end JavaScript and CSS files are in `./src/frontend`.  
4. Back‑end JavaScript is in `./src/backend`.  
5. There is also a folder `./src/arc` for code that is shared by the front end and back end.

## Work process

The development server automatically rebuilds and refreshes the application whenever files change.  
There is no need to add additional `<style>` or `<script>` elements to the `index.html` template.  
Write your code in `./src/frontend/index.js` and `./src/backend/index.js`; it will be autoloaded.

If you need to split your project into more files, do so with ES6 module commands:

- `import`
- `export`

You can also use the `.sass` format instead of `.css`.

Happy hacking!
