// Function to fetch and return cat gif
async function returnCatGif() {
  const catApiUrl = "http://thecatapi.com/api/images/get?format=src&type=gif";
  const response = await fetch(catApiUrl);
  const catGifUrl = response.url;

  return catGifUrl; // Return the URL
}

// Function to call `returnCatGif` and log the result
async function asyncFunction() {
  const catGifUrl = await returnCatGif(); // Call the `returnCatGif` function

  console.log("Random Cat GIF URL:", catGifUrl);
}
// Call the `asyncFunction` to execute the logic to display cat gif URL
asyncFunction();
