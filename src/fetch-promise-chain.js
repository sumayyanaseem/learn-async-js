const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

  //remove nested layers and separate dependencies from then block
  fetchPromise
    .then((response) => response.json())
    .then((products) => {
        products.forEach(product => {
            console.log(product.name);
          });
    });

  console.log('Chaining promises ... ');
  