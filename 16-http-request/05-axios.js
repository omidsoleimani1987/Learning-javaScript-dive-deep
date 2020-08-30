// https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/16330288#questions

// with the CDN before our script tag :
<script src="https://unpkg.com/axios/dist/axios.min.js" defer></script>;
<script src="ourScript.js" defer></script>;

// like the code from xhr:

// GET:
// with async await :
async function ourFunction() {
  try {
    const ourResponse = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    // see what axios returns:
    console.log(ourResponse); // an object with all information

    // the part that contain our response data:
    const responseBody = ourResponse.data;

    for (const x of responseBody) {
      // do something here
    }
  } catch (error) {
    console.log(error.message);
    //we can take a look at the response error too:
    console.log(error.response);
  }
}

ourFunction();

// ********************************************************************** //

// POST:

// with async await:
async function postData(myTitle, myBody, myId) {
  // according to the API requirements
  const myPost = {
    title: myTitle,
    body: myBody,
    userId: myId
  };
  // axios analyze the data and if it is an array or an object, and then it transform it to json
  // do something here with the error
  // axios doesn't need header, i believe it sets it automatically
  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    myPost
  );
  // to see if the post were successful:
  console.log(response);
}

postData('my dummy title', 'my dummy content', 12);
