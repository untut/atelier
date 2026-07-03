document.addEventListener('DOMContentLoaded', () => {

    /* ===== БИРКИ УСЛУГ ===== */

    const services = document.querySelectorAll('.service-tag');
    const worksTitle = document.getElementById('worksTitle');
    const worksSection = document.querySelector('.works');

    services.forEach((service) => {

        service.addEventListener('click', function () {

            services.forEach((item) => {
                item.classList.remove('active-service');
            });

            this.classList.add('active-service');

            worksSection.className = 'works';

switch (this.dataset.title) {

    case 'Автомобильные салоны':
        worksSection.classList.add('auto');
        break;

    case 'Мебель':
        worksSection.classList.add('furniture');
        break;

    case 'Ателье':
        worksSection.classList.add('atelier');
        break;

    case 'Швейное оборудование':
        worksSection.classList.add('sewing');
        break;

    case 'Реставрация поролона':
        worksSection.classList.add('foam');
        break;
}

            if (worksTitle) {
                worksTitle.textContent =
                    this.dataset.title || 'Наши работы';
            }

        });

    });


/* ===== ОТЗЫВЫ — МОБИЛЬНАЯ КАРТОТЕКА ===== */


const cards = document.querySelectorAll(".review-card");

function update(activeIndex) {

    cards.forEach((card, i) => {

        card.classList.remove("active");

        const offset = (i - activeIndex);

        // активная карточка
        if (i === activeIndex) {
            card.style.transform = "translateX(0) scale(1)";
            card.style.zIndex = 100;
            card.classList.add("active");
        }

        // карточки справа (ПРИПРЯТАНЫ)
        else if (i > activeIndex) {
            card.style.transform = `
                translateX(${120 + (i - activeIndex) * 18}px)
                scale(0.96)
            `;
            card.style.zIndex = 50 - i;
        }

        // карточки слева (уходят назад)
        else {
            card.style.transform = `
                translateX(${-140 - (activeIndex - i) * 20}px)
                scale(0.92)
            `;
            card.style.zIndex = 10 - i;
        }
    });
}

let current = 0;
update(current);

cards.forEach((card, i) => {
    card.addEventListener("click", () => {
        current = i;
        update(current);
    });
});




layout(0);

folders.forEach((folder, index) => {

    folder.addEventListener("click", () => {

        layout(index);

    });

});
});
