'use strict';

let random = Math.trunc(Math.random() * (0, 250));
let arr = [];

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v2/all');

request.send();

request.addEventListener('load', function () {
  const data1 = JSON.parse(request.responseText);

  console.log(data1);

  data1.forEach(element => {
    arr.push(element.name);
  });

  console.log(arr[random]);

  const request1 = new XMLHttpRequest();

  request1.open('GET', `https://restcountries.com/v2/name/${arr[random]}`);

  request1.send();

  request1.addEventListener('load', function () {
    console.log(request1.responseText);
    let [data] = JSON.parse(request1.responseText);
    let html = `      <article class="country">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${
      data.languages ? data.languages[0].name : data.language
    }</p>
    <p class="country__row"><span>💰</span>${
      data.currencies ? data.currencies[0].name : data.currencie
    }</p>
  </div>
</article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
});

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const request = new XMLHttpRequest();

// request.open('GET', 'https://restcountries.com/v2/name/china');

// request.send();

// request.addEventListener('load', function () {
//   const [data] = JSON.parse(request.responseText);
//   console.log(data);

//   let html = `      <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// });
