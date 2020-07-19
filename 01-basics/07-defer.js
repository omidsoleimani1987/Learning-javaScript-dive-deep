/*
by reading the html by browser from top to down, by reaching the script tags i will be download an then executed, to avoid executing the scripts before parsing the html we usually add our script add the end of the body to be sure that parsing the html is finished, but we can use some feature to download the script but wait until the parsing is finished

by adding the scripts in the head tag of the html, the browser download the html and then stops the parsing of the html and then download the script files and execute them and then finishing the parsing the html

executing the script cause already a lot of problems with the order given into the script file, but it makes also problem by blocking the parsing the html

to avoid that we can add 'defer attribute' without value to the script tag in html, defer tells the browser that it should download the scripts files right away, but it should not block parsing the html and only execute the script only when everything(html) is parsed completely

***************** adding the defer is recommended

we can use async keyword
it is like defer but the difference is that with 'async' script execute after the downloading of script is finished (as early as possible), regardless of the order of adding the scripts in the head tag , and parsing of the html will paused until the scripts are executed then it will continue parsing the html

the order of js files are guarantied by using the "defer"

*/
<script src="assets/scripts/app.js" defer></script>;
<script src="assets/scripts/app.js" async></script>;
