async function fetchAllURLs(urls) {
  try {
    const fetchPromises = urls.map(url => fetchURLData(url));
    const results = await Promise.all(fetchPromises);
    return results;
  } catch (error) {
    throw new Error(error.message);
  }
}

const urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://invalid.url'
];

fetchAllURLs(urls)
  .then(results => console.log(results))
  .catch(error => console.error(error.message));
