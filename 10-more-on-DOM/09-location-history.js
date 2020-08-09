/*
*) Location Object: https://developer.mozilla.org/en-US/docs/Web/API/Window/location

The Window.location read-only property returns a Location object with information about the current location of the document.
    
The window.location object can be written without the window prefix. Some examples:
    window.location.href returns the href (URL) of the current page
    window.location.hostname returns the domain name of the web host
    window.location.pathname returns the path and filename of the current page
    window.location.protocol returns the web protocol used (http: or https:)
    window.location.assign() loads a new document 

*/

// window.location -> we can omit the window and use just location
console.log(location);

/*
location can be used also to navigate user away with href property:
    location.href = 'https://academind.com';

or with a method:
    location.assign('https://....');
    
replace method which is like href, navigate the user to other url but the difference is that the user can not go back because it replace the url in history and back button won't be able to go back to the previous page
    location.replace('https://....');
    
some other useful properties - try these in any page in console:
    location.host --> "www.udemy.com"
    location.hostname --> "www.udemy.com"
    location.origin --> "https://www.udemy.com"
    location.pathname --> "/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/16156501"
*/

/*

*) Location Object: https://developer.mozilla.org/en-US/docs/Web/API/Window/history

The Window.history read-only property returns a reference to the History object, which provides an interface for manipulating the browser session history (pages visited in the tab or frame that the current page is loaded in).

See Manipulating the browser history for examples and details. In particular, that article explains security features of the pushState() and replaceState() methods that you should be aware of before using them.

*/

// history:
console.log(history);

/*
history.back(); --> take us back again to the page that we came from
history.forward(); --> go to the page again

to find out how many steps user did in this current tab of the browser:
console.log(history.length);

then we can define:

history.go(number|URL) :
    The parameter can either be a number which goes to the URL within the specific position (-1 goes back one page, 1 goes forward one page), or a string. The string must be a partial or full URL, and the function will go to the first URL that matches the string.

*/

/*

*) navigator Object: https://www.w3schools.com/js/js_window_navigator.asp

The Window.navigator read-only property returns a reference to the Navigator object, which has methods and properties about the application running the script (browser and a little operating system ).

--> navigatorObject = window.navigator


! - Warning !!!
The information from the navigator object can often be misleading, and should not be used to detect browser versions because:

Different browsers can use the same name
The navigator data can be changed by the browser owner
Some browsers misidentify themselves to bypass site tests
Browsers cannot report new operating systems, released later than the browser

Some examples:

navigator.appName
navigator.appCodeName
navigator.platform


-- Browser Cookies
The cookieEnabled property returns true if cookies are enabled, otherwise false
console.log(navigator.cookieEnabled);


-- Browser Application Name
The appName property returns the application name of the browser
console.log(navigator.appName);
    Strange enough, "Netscape" is the application name for both IE11, Chrome, Firefox, and Safari.

-- The Browser Language
The language property returns the browser's language:
console.log(navigator.language);

-- Is The Browser Online?
The onLine property returns true if the browser is online:
console.log(navigator.onLine);

and a lot more ...


todo) find out which browser has the user:
    - better -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
    - https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator#Example_1_Browser_detect_and_return_a_string

*/
