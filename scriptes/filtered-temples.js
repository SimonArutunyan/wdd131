const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893-04-06",
        area: 253000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/2013_Salt_Lake_Temple_%286%29.jpg/1200px-2013_Salt_Lake_Temple_%286%29.jpg"
    },
    {
        name: "Los Angeles California Temple",
        location: "Los Angeles, California, USA",
        dedicated:  11–14-1956
        area: 191000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-38945-main.jpg"
    },
    {
        name: "Washington D.C. Temple",
        location: "Kensington, Maryland, USA",
        dedicated: "1974-11-19",
        area: 160000,
        image: "https://churchofjesuhttpsschristtemples.org/washington-d.c.-temple/photographs/"
    },
    {
        name: "Phoenix Arizona Temple",
        location: "Phoenix, Arizona, USA",
        dedicated: "2014-12-14",
        area: 120000,
        image: "https://i.pinimg.com/originals/8e/18/c7/8e18c773c9385ead6bc328832905947b.jpg"
    },
    {
        name: "Fort Lauderdale Florida Temple",
        location: "Fort Lauderdale, Florida, USA",
        
        dedicated: "2014-01-18",
        area: 100000,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Fort_Lauderdale_Florida_Temple.jpg"
    },
    {
        name: "Pittsburgh Pennsylvania Temple",
        location: "Pittsburgh, Pennsylvania, USA",
        dedicated: "2008-04-13",
        area: 50000,
        image: "https://i.pinimg.com/736x/f9/f5/99/f9f599660be1fc49a88317ed81460a61.jpg"
    },
    {
        name: "San Diego California Temple",
        location: "San Diego, California, USA",
        dedicated: "1993-04-13",
        area: 120000,
        image: "https://static.wikia.nocookie.net/mormon/images/8/89/Sandiegotemple1.jpg/revision/latest?cb=20191214004104"
    },
    {
        name: "Atlanta Georgia Temple",
        location: "Atlanta, Georgia, USA",
        dedicated: "1983-06-01",
        area: 100000,
        image: "https://i.pinimg.com/736x/ea/54/f5/ea54f57716d67236547722cd0b603e52.jpg"
    },
    {
        name: "Oklahoma City Oklahoma Temple",
        location: "Oklahoma City, Oklahoma, USA",
        dedicated: "2000-04-09",
        area: 60000,
        image: "https://i.pinimg.com/originals/04/d4/85/04d4858b0c7d4cee56bafa96b8deb812.jpg"
    }
];

// Функция для создания карточек храмов
function createTempleCards(temples) {
    const templeCardsContainer = document.getElementById('temple-cards');
    templeCardsContainer.innerHTML = ''; // Очистить существующие карточки

    temples.forEach(temple => {
        const card = document.createElement('div');
        card.className = 'temple-card';
        card.innerHTML = `
            <h2>${temple.name}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.image}" alt="${temple.name}" loading="lazy">
        `;
        templeCardsContainer.appendChild(card);
    });
}

// Обработчики событий для навигации
document.getElementById('home').addEventListener('click', () => createTempleCards(temples));
document.getElementById('old').addEventListener('click', () => createTempleCards(temples.filter(t => new Date(t.dedicated) < new Date('1900-01-01'))));
document.getElementById('new').addEventListener('click', () => createTempleCards(temples.filter(t => new Date(t.dedicated) > new Date('2000-01-01'))));
document.getElementById('large').addEventListener('click', () => createTempleCards(temples.filter(t => t.area > 90000)));
document.getElementById('small').addEventListener('click', () => createTempleCards(temples.filter(t => t.area < 10000)));

// Установка года и даты последнего изменения в подвале
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Инициализация
createTempleCards(temples);