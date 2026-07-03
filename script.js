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

const folders = document.querySelectorAll(".review-card");

function setActive(index) {
    folders.forEach((card, i) => {

        card.classList.remove("active");

        // активная карточка
        if (i === index) {
            card.style.transform = "translateY(0px) scale(1.03)";
            card.style.zIndex = 10;
            card.classList.add("active");
        }

        // карточки позади
        else {
            const offset = (i - index) * 18;

            card.style.transform = `
                translateY(${offset}px)
                scale(${i < index ? 0.95 : 0.97})
            `;

            card.style.zIndex = 10 - Math.abs(i - index);
        }
    });
}

// старт — первая карточка активна
setActive(0);

// клик по карточке переключает активную
folders.forEach((card, i) => {
    card.addEventListener("click", () => {
        setActive(i);
    });
});




layout(0);

folders.forEach((folder, index) => {

    folder.addEventListener("click", () => {

        layout(index);

    });

});
});

