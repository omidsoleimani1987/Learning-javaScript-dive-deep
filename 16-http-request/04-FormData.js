// Section 18: Working with Http Requests , Episode : 383

// good to send text and file

const myFormData1 = new FormData();
myFormData1.append('title', 'omid');

// and good to use for html form tag to collect the data of form

const myHtmlForm = document.querySelector('form');
const myFormData2 = new FormData(myHtmlForm);
// js automatically collect the data from the form
// but our inputs have to include a name attribute to be able to specify them
