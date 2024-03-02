const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise.then((response) => {
//executes .json() call asynchronously
  const jsonPromise = response.json();
  //similar to callback hell
  jsonPromise.then((products) => {
    products.forEach(product => {
      console.log(product.name);
    });
  });
});

console.log('Fetching products ... ');
