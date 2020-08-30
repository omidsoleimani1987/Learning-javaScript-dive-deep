// without error handling:
function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    return response.json();
  });
}

// with error handling:
function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((error) => {
          console.log(error);
          throw new Error('Server-side problem!');
        });
      }
    })
    .catch((error) => {
      console.log(error);
      throw new Error('Something went wrong!');
    });
}

// * ********************************************************************************************* * //

// GET:

// with then() method:
function getData() {
  sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
    .then((ourResponse) => {
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
