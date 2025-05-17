const menuData = {
    salads: [
        "Цезарь с курицей",
        "Греческий салат",
        "Овощной салат"
    ],
    mainDishes: [
        "Куриное филе на гриле",
        "Стейк из говядины",
        "Рыбное филе"
    ],
    drinks: [
        "Кола",
        "Фанта",
        "Минеральная вода"
    ]
};

function showMenu() {
    console.log("Функция showMenu вызвана");
    const saladsUl = document.getElementById('salads');
    const mainDishesUl = document.getElementById('main-dishes');
    const drinksUl = document.getElementById('drinks');

    // Очистка списков перед заполнением, чтобы не дублировались
    saladsUl.innerHTML = '';
    mainDishesUl.innerHTML = '';
    drinksUl.innerHTML = '';

    menuData.salads.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        saladsUl.appendChild(li);
    });

    menuData.mainDishes.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        mainDishesUl.appendChild(li);
    });

    menuData.drinks.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        drinksUl.appendChild(li);
    });

    document.getElementById('menu-container').style.display = 'block';
}

// Временно вызываем при загрузке
window.onload = () => {
    showMenu();
};