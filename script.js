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

function setActive(activeIndex) {

    folders.forEach((card, i) => {

        card.classList.remove("active");

        const diff = i - activeIndex;

        // активная карточка
        if (diff === 0) {
            card.style.transform = "translateY(0px) scale(1.03)";
            card.style.zIndex = 10;
            card.style.opacity = "1";
            card.classList.add("active");
        }

        // карточки позади / впереди
        else {
            const y = diff * 28; // вертикальный сдвиг стопки
            const scale = 1 - Math.abs(diff) * 0.03;

            card.style.transform = `translateY(${y}px) scale(${scale})`;

            card.style.zIndex = 10 - Math.abs(diff);

            // важно: они ВСЕ видимы
            card.style.opacity = diff > 2 || diff < -2 ? "0.6" : "1";
        }
    });
}

// старт
setActive(0);

// клик переключает
folders.forEach((card, i) => {
    card.addEventListener("click", () => {
        setActive(i);
    });
});