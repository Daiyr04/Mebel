const url = 'https://656b0275dac3630cf7278ec3.mockapi.io/clouthes/';
const table = document.querySelector('.two-image');

async function getUsers() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  renderUsers(data.slice(0, 8));
}
getUsers();

function renderUsers(array) {
  table.innerHTML = '';
  for (const user of array) {
    const userContainer = document.createElement('div');
    userContainer.innerHTML = `
      <h4>${user.name}</h4>
      <a href="/img.html">
      <img width='100%' height="50%" style='padding-left: 10px;' src=${user.avatar} />
      </a>
      <br><span>${user.price}</span>
    `;

    table.appendChild(userContainer);
  }
}

