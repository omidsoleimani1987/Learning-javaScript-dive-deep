function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error('Something went wrong!'));
      }
    };
    xhr.onerror = function () {
      reject(new Error('Unable to send the request!'));
    };
    xhr.send(JSON.stringify(data)); // changed
  });
  return promise;
}

// * ********************************************************************************************* * //

// GET:

// with then() method:
function getData() {
  sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
    .then((ourResponse) => {
      // if necessary JSON.parse(ourResponse);
      for (const x of ourResponse) {
        // do something here
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

// with async await :
async function getData() {
  try {
    const ourResponse = await sendHttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts'
    );
    // if necessary JSON.parse(ourResponse);
    for (const x of ourResponse) {
      // do something here
    }
  } catch (error) {
    console.log(error.message);
  }
}

getData();

// * ********************************************************************************************* * //

// POST:

// with async await:
async function postData(myTitle, myBody, myId) {
  // according to the API requirements
  const myPost = {
    title: myTitle,
    body: myBody,
    userId: myId
  };
  try {
    sendHttpRequest(
      'POST',
      'https://jsonplaceholder.typicode.com/posts',
      myPost
    );
  } catch (error) {
    // do something here with the error
    console.log(error.message);
  }
}

postData('my dummy title', 'my dummy content', 12);
