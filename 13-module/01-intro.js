/*
because of the CORS policy we need the server to have the real http request not the file upload

we can use serve-npm -> npm install -g serve

in navigated terminal to the project folder: serve

* **************************************************************************************** *

-- static import module:

our main script file should have this property --> type="module"
    <script src="assets/main.js" defer type="module"></script>


for export we use word "export const firstFunction ..."

for import we use "import { firstFunction } from './firstFile.js';"
    - in the path string ./ means in the same folder
    - the file extension can be .mjs too, to show it is a module 


todo) one point:
each code in our imported files, like console.log, runs "only one time" and when our file is imported or better when the request is sent. keep in mind!
*/
