const map = document.querySelector("#world-map");
const container = document.querySelector("#map-container");
const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("#search-button");
const suggestionsContainer = document.querySelector("#search-suggestions");
const randomButton = document.querySelector("#random-country");
const curiosityElement = document.querySelector("#fun-fact");

const mapCountryCodes = new Set(
    Array.from(map.querySelectorAll("path"))
        .map(path => path.id)
);

const bounds = map.getBBox();
const aspectRatio = container.clientWidth / container.clientHeight;

let width = bounds.width;
let height = bounds.height;
let selectedCountry = null;
let selectionAnimation = 0;

if (width / height > aspectRatio) {
    height = width / aspectRatio;
} else {
    width = height * aspectRatio;
}

const centerX = bounds.x + bounds.width / 2;
const centerY = bounds.y + bounds.height / 2;

const original = {
    x: centerX - width / 2,
    y: centerY - height / 2,
    width,
    height
};

const INITIAL_ZOOM = 2;

let viewBox = {
    x: original.x + original.width * (1 - 1 / INITIAL_ZOOM) / 2,
    y: original.y + original.height * (1 - 1 / INITIAL_ZOOM) / 2,
    width: original.width / INITIAL_ZOOM,
    height: original.height / INITIAL_ZOOM
};

map.setAttribute(
    "viewBox",
    `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`
);

const MIN_ZOOM = 1;
const MAX_ZOOM = 10;


function updateViewBox() {
    map.setAttribute(
        "viewBox",
        `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`
    );
}

function zoomToCountry(path) {

    const bounds = path.getBBox();
    const countryCenterX = bounds.x + bounds.width / 2;
    const countryCenterY = bounds.y + bounds.height / 2;
    const isMobile = window.innerWidth <= 600;
    const padding = isMobile ? 1.15 : 1.5;
    const aspectRatio = original.width / original.height;

    let newWidth = Math.max(
        bounds.width * padding,
        bounds.height * padding * aspectRatio
    );

    const minZoomWidth = original.width / MAX_ZOOM;

    const maxZoomWidth = isMobile
        ? original.width / 3
        : original.width;

    newWidth = Math.max(
        minZoomWidth,
        Math.min(maxZoomWidth, newWidth)
    );

    const newHeight = newWidth / aspectRatio;

    const verticalOffset = isMobile ? -newHeight * 0.15 : 0;

    const target = {
        x: countryCenterX - newWidth / (isMobile ? 2 : 2.5),
        y: countryCenterY - newHeight / 2.1 - verticalOffset,
        width: newWidth,
        height: newHeight
    };

    animateViewBox(target);
}

let animationFrame = null;

function animateViewBox(target) {

    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
    }

    const start = { ...viewBox };

    const duration = 700;
    const startTime = performance.now();

    function animate(currentTime) {

        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);

        const eased = 1 - Math.pow(1 - progress, 3);

        viewBox.x = start.x + (target.x - start.x) * eased;
        viewBox.y = start.y + (target.y - start.y) * eased;

        viewBox.width =
            start.width + (target.width - start.width) * eased;

        viewBox.height =
            start.height + (target.height - start.height) * eased;

        updateViewBox();

        if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
        } else {
            animationFrame = null;
        }
    }

    animationFrame = requestAnimationFrame(animate);
}

function screenToSVG(clientX, clientY) {
    const point = map.createSVGPoint();

    point.x = clientX;
    point.y = clientY;

    return point.matrixTransform(
        map.getScreenCTM().inverse()
    );
}

container.addEventListener("wheel", (event) => {
    event.preventDefault();

    const mouse = screenToSVG(event.clientX, event.clientY);

    const factor = Math.exp(event.deltaY * 0.001);

    const newWidth = Math.max(
        original.width / MAX_ZOOM,
        Math.min(
            original.width / MIN_ZOOM,
            viewBox.width * factor
        )
    );

    const scale = newWidth / viewBox.width;
    const newHeight = viewBox.height * scale;

    const relativeX = (mouse.x - viewBox.x) / viewBox.width;
    const relativeY = (mouse.y - viewBox.y) / viewBox.height;

    viewBox.x = mouse.x - relativeX * newWidth;
    viewBox.y = mouse.y - relativeY * newHeight;

    viewBox.width = newWidth;
    viewBox.height = newHeight;

    updateViewBox();

}, { passive: false });


let dragging = false;

let startX = 0;
let startY = 0;
let startViewBox = null;
let startScaleX = 1;
let startScaleY = 1;
let pressedPath = null;
let pointerStartX = 0;
let pointerStartY = 0;
let didDrag = false;


map.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;

    dragging = true;
    didDrag = false;

    pressedPath = event.target.closest("path");

    pointerStartX = event.clientX;
    pointerStartY = event.clientY;

    startX = event.clientX;
    startY = event.clientY;

    startViewBox = { ...viewBox };

    const matrix = map.getScreenCTM();

    startScaleX = matrix.a;
    startScaleY = matrix.d;

    map.setPointerCapture(event.pointerId);

    map.style.cursor = "grabbing";
});

map.addEventListener("pointermove", (event) => {
    if (!dragging) return;

    const distance = Math.hypot(
        event.clientX - pointerStartX,
        event.clientY - pointerStartY
    );

    if (distance > 5) {
        didDrag = true;
    }

    const deltaX = (event.clientX - startX) / startScaleX;
    const deltaY = (event.clientY - startY) / startScaleY;

    viewBox.x = startViewBox.x - deltaX;
    viewBox.y = startViewBox.y - deltaY;

    updateViewBox();
});

function stopDragging() {
    if (!dragging) return;

    dragging = false;

    map.style.cursor = "grab";

    if (!didDrag) {

        if (pressedPath) {
            chooseCountry(pressedPath);

        } else {
            deselectCountry();
        }
    }

    pressedPath = null;
}

map.addEventListener("pointerup", stopDragging);

map.addEventListener("pointercancel", () => {
    dragging = false;
    pressedPath = null;
    map.style.cursor = "grab";
});

map.addEventListener("lostpointercapture", () => {
    dragging = false;
    pressedPath = null;
    map.style.cursor = "grab";
});



let supportedCountries = null;
let countryCatalog = [];
let currentCountryRequest = 0;

async function loadSupportedCountries() {
    try {
        const response = await fetch(
            "https://countries.dev/countries?fields=name,alpha2Code"
        );

        if (!response.ok) {
            throw new Error("Não foi possível carregar a lista de países.");
        }

        const countries = await response.json();
        countryCatalog = countries;

        supportedCountries = new Set(
            countries.map(country => country.alpha2Code)
        );

        console.log(
            "Países disponíveis na API:",
            supportedCountries.size
        );

    } catch (error) {
        console.error("Erro ao carregar a lista de países:", error);
    }
}

const countriesReady = loadSupportedCountries();

function formatNumber(value) {
    if (value == null) {
        return "Unknown";
    }

    return new Intl.NumberFormat("en-US").format(value);
}


const countryNames = {
    US: "United States",
    GB: "United Kingdom",
    RU: "Russia",
    KP: "North Korea",
    KR: "South Korea",
    BO: "Bolivia",
    CD: "Democratic Republic of the Congo",
    CG: "Republic of the Congo",
    SY: "Syria",
    MF: "Saint Martin",
    SX: "Sint Maarten",
    TZ: "Tanzania",
    VE: "Venezuela",
    MD: "Moldova",
    VN: "Vietnam",
    LA: "Laos",
    BN: "Brunei",
    CZ: "Czechia",
    TR: "Türkiye",
    BN: "Brunei",
    BQ: "Bonaire",
    SH: "Saint Helena",
    SZ: "Eswatini",
    PS: "Palestine",
    XK: "Kosovo",
    IR: "Iran",
};

function normalizeText(text) {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function searchCountries(query) {

    const normalizedQuery = normalizeText(query);

    if (!normalizedQuery) return [];

    return countryCatalog
        .filter(country => {

            if (!mapCountryCodes.has(country.alpha2Code)) {
                return false;
            }

            const name = countryNames[country.alpha2Code] || country.name;
            return normalizeText(name).includes(normalizedQuery);
        })
        .slice(0, 6);
}

function showSuggestions(countries) {

    suggestionsContainer.innerHTML = "";

    if (countries.length === 0) {
        suggestionsContainer.classList.remove("active");
        return;
    }

    countries.forEach(country => {

        const suggestion = document.createElement("button");

        suggestion.type = "button";
        suggestion.classList.add("suggestion");

        suggestion.textContent =
            countryNames[country.alpha2Code] || country.name;

        suggestion.dataset.code = country.alpha2Code;

        suggestionsContainer.appendChild(suggestion);
    });

    suggestionsContainer.classList.add("active");
}

function selectCountryByCode(code) {

    const path = Array.from(map.querySelectorAll("path"))
        .find(path => path.id === code);

    if (!path) {
        console.warn(`País ${code} não encontrado no SVG.`);
        return;
    }

    chooseCountry(path);

    searchInput.value =
        countryNames[code] ||
        countryCatalog.find(country => country.alpha2Code === code)?.name ||
        "";

    suggestionsContainer.innerHTML = "";
    suggestionsContainer.classList.remove("active");
}

searchInput.addEventListener("input", () => {

    const results = searchCountries(searchInput.value);

    showSuggestions(results);
});


searchInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {

        const results = searchCountries(searchInput.value);

        if (results.length > 0) {
            selectCountryByCode(results[0].alpha2Code);
        }
    }

    if (event.key === "Escape") {
        suggestionsContainer.classList.remove("active");
    }
});

randomButton.addEventListener("click", () => {

    const availableCountries = countryCatalog.filter(country =>
    mapCountryCodes.has(country.alpha2Code)
    );

    if (availableCountries.length === 0) return;

    let candidates = availableCountries.filter(country =>
        country.alpha2Code !== selectedCountry?.id
    );

    if (candidates.length === 0) {
        candidates = availableCountries;
    }

    const randomIndex = Math.floor(Math.random() * candidates.length);

    const randomCountry = candidates[randomIndex];

    selectCountryByCode(randomCountry.alpha2Code);
});

searchButton.addEventListener("click", () => {

    const results = searchCountries(searchInput.value);

    if (results.length > 0) {
        selectCountryByCode(results[0].alpha2Code);
    }
});

suggestionsContainer.addEventListener("click", event => {

    const suggestion = event.target.closest(".suggestion");

    if (!suggestion) return;

    selectCountryByCode(suggestion.dataset.code);
});

function selectCountry(path) {

    if (selectedCountry) {
        selectedCountry.classList.remove("selected");
    }

    selectedCountry = path;
    selectedCountry.classList.add("selected");

    document.querySelector(".country-card").classList.add("visible");
}

function deselectCountry() {

    if (selectedCountry) {
        selectedCountry.classList.remove("selected");
        selectedCountry = null;
    }

    document.querySelector(".country-card").classList.remove("visible");

    currentCountryRequest++;
}

function chooseCountry(path) {

    if (!path) return;

    selectCountry(path);
    curiosityElement.textContent = funFacts[path.id] ?? "No fun fact available yet.";
    loadCountry(path.id);
    zoomToCountry(path);
}

async function loadLargestCity(code, requestId) {
    const largestCityElement = document.querySelector("#largest-city");

    largestCityElement.textContent = "Largest City: Loading...";

    try {
        const response = await fetch(
            `https://countries.dev/cities?country=${encodeURIComponent(code)}&limit=1`
        );

        if (!response.ok) {
            throw new Error("Could not load city data.");
        }

        const cities = await response.json();

        if (requestId !== currentCountryRequest) return;

        if (!cities.length) {
            largestCityElement.textContent = "Largest City: Unknown";
            return;
        }

        const city = cities[0];

        largestCityElement.innerHTML =
            `<strong>Largest City:</strong> ${city.name}`;

    } catch (error) {
        console.error("Error loading largest city:", error);

        if (requestId === currentCountryRequest) {
            largestCityElement.innerHTML =
                `<strong>Largest City:</strong> Unavailable`;
        }
    }
}

async function loadCountry(code) {
    
    const requestId = ++currentCountryRequest;
    await countriesReady;

    if (supportedCountries && !supportedCountries.has(code)) {
        console.warn(`O código ${code} não está disponível na API.`);
        return;
    }

    try {
        const response = await fetch(
            `https://countries.dev/alpha/${encodeURIComponent(code)}`
        );

        if (!response.ok) {
            throw new Error(`País não encontrado: ${code}`);
        }

        const data = await response.json();

        if (requestId !== currentCountryRequest) return;

        console.log("Dados recebidos:", data);

        const flag = document.querySelector("#flag");

        flag.src = data.flags?.svg || "";
        flag.alt = `Flag of ${data.name}`;

        document.querySelector("#country-name").textContent =
            countryNames[code] || data.name || "Unknown";

        document.querySelector("#capital").innerHTML =
            `<strong>Capital:</strong> ${data.capital || "Unknown"}`;

        loadLargestCity(code, requestId);

        document.querySelector("#population").innerHTML =
            `<strong>Population:</strong> ${formatNumber(data.population)}`;

        document.querySelector("#area").innerHTML =
            `<strong>Land Area:</strong> ${formatNumber(data.area)} km²`;

        const languages = data.languages
            ?.map(language => language.name)
            .join(", ");

        document.querySelector("#language").innerHTML =
            `<strong>Official Language(s):</strong> ${languages || "Unknown"}`;

        const currencies = data.currencies
            ?.map(currency => `${currency.name} (${currency.code})`)
            .join(", ");

        document.querySelector("#currency").innerHTML =
            `<strong>Currency:</strong> ${currencies || "Unknown"}`;

    } catch (error) {
        console.error("Erro ao carregar os dados do país:", error);
    }
}