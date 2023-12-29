// Задача

// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.

const url = "https://jsonplaceholder.typicode.com/users";
const btnEl = document.querySelector(".addBtn");

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

btnEl.addEventListener("click", async () => {
  try {
    const data = await getData(url);
    const body = document.querySelector("body");
    data.forEach((element) => {
      body.insertAdjacentHTML(
        "beforeend",
        `
      <div class="card" id="${element.id}">
      <h3>Пользователь ${element.id}</h3>
      <p class="name">Имя: ${element.name}</p>
      <p class="username">Ник: ${element.username}</p>
      <p class="email">Email: ${element.email}</p>
      <p class="adress">Адрес: ${element.address.street}, ${element.address.city}, ${element.address.zipcode}</p>
      <p class="phpne">Телефон: ${element.phone}</p>
      <p class="website">Сайт: ${element.website}</p>
      <button class="dellBtn">Удалить пользователя</button>
      </div>`
      );
    });

    console.log(data);
  } catch (error) {
    console.log("Что-то пошло не так");
  }

  const deleteBtn = document.querySelectorAll(".dellBtn");
    deleteBtn.forEach((button) => {
      button.addEventListener("click", () => {
        const product = button.closest(".card");
        product.remove();
      });
    });
});


