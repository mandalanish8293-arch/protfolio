
const cars = [
    {
        name: "Porsche 911",
        category: "Sports",
        price: "₹2.00 Cr",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
        description: "Iconic sports car with incredible performance and premium design."
    },
    {
        name: "Mercedes Benz",
        category: "Luxury",
        price: "₹1.50 Cr",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
        description: "Experience luxury, comfort and advanced automotive technology."
    },
    {
        name: "BMW M4",
        category: "Sports",
        price: "₹1.60 Cr",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
        description: "Powerful performance combined with an aggressive sporty design."
    },
    {
        name: "Range Rover",
        category: "SUV",
        price: "₹2.30 Cr",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
        description: "Premium SUV with luxury interiors and outstanding capability."
    },
    {
        name: "Audi R8",
        category: "Sports",
        price: "₹2.72 Cr",
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800",
        description: "A stunning supercar delivering thrilling performance."
    },
    {
        name: "Lamborghini Urus",
        category: "SUV",
        price: "₹4.18 Cr",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
        description: "A high-performance luxury SUV with bold Italian styling."
    }
];

const grid = document.getElementById("carGrid");

function displayCars(list) {
    grid.innerHTML = "";

    if (list.length === 0) {
        grid.innerHTML = "<p>No cars found. Try another search.</p>";
        return;
    }

    list.forEach((car) => {
        const card = document.createElement("div");
        card.className = "car-card";

        const img = document.createElement("img");
        img.src = car.image;
        img.alt = car.name;

        const info = document.createElement("div");
        info.className = "car-info";

        const name = document.createElement("h3");
        name.textContent = car.name;

        const category = document.createElement("p");
        category.textContent = car.category + " | Premium Collection";

        const bottom = document.createElement("div");
        bottom.className = "car-bottom";

        const price = document.createElement("span");
        price.className = "price";
        price.textContent = car.price;

        const button = document.createElement("button");
        button.className = "details-btn";
        button.textContent = "View Details ↗";
        button.addEventListener("click", () => openModal(car));

        bottom.append(price, button);
        info.append(name, category, bottom);
        card.append(img, info);
        grid.appendChild(card);
    });
}

function filterCars(category, btn) {
    document.querySelectorAll(".filters button").forEach(button => {
        button.classList.remove("active");
    });

    btn.classList.add("active");

    const filtered = category === "All"
        ? cars
        : cars.filter(car => car.category === category);

    displayCars(filtered);
}

document.getElementById("search").addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    displayCars(cars.filter(car =>
        car.name.toLowerCase().includes(value) ||
        car.category.toLowerCase().includes(value)
    ));

    document.querySelectorAll(".filters button").forEach(btn => {
        btn.classList.remove("active");
    });
});

function openModal(car) {
    document.getElementById("modalImage").src = car.image;
    document.getElementById("modalName").textContent = car.name;
    document.getElementById("modalPrice").textContent = car.price;
    document.getElementById("modalDescription").textContent = car.description;

    document.getElementById("carModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("carModal").style.display = "none";
}

document.getElementById("carModal").addEventListener("click", (e) => {
    if (e.target.id === "carModal") closeModal();
});

displayCars(cars);
