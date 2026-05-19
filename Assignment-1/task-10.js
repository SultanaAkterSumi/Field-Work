//Timer function
function createTimeout(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error("Request Timed Out"));
    }, ms);
  });
}

//Main wrapper function
function fetchWithTimeout(url, ms) {
  var fetchPromise = fetch(url);
  var timeoutPromise = createTimeout(ms);

  return Promise.race([fetchPromise, timeoutPromise]);
}

// Test 1 — 1ms
fetchWithTimeout("https://official-joke-api.appspot.com/random_joke", 1)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("Success:", data);
  })
  .catch(function (err) {
    console.log("Failed:", err.message);
  });

// Test 2 — 3000ms
fetchWithTimeout("https://official-joke-api.appspot.com/random_joke", 3000)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("Success:", data);
  })
  .catch(function (err) {
    console.log("Failed:", err.message);
  });
