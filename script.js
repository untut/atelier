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


    /* ===== ОТЗЫВЫ-ПАПКИ ===== */

 const folders = document.querySelectorAll(".review-card");

function layout(activeIndex) {

    folders.forEach((folder, index) => {

        folder.classList.remove("active");

        if (index === activeIndex) {

            folder.style.transform =
                "translateX(0px) translateY(-18px) rotate(0deg) scale(1.02)";

            folder.style.zIndex = 100;

            folder.classList.add("active");

        } else {

            const offset = index < activeIndex ? -110 : 110;

            const rotate = index < activeIndex ? -4 : 4;

            folder.style.transform =
                `translateX(${offset}px) rotate(${rotate}deg)`;

            folder.style.zIndex =
                10 - Math.abs(index - activeIndex);

        }

    });

}

layout(0);

folders.forEach((folder, index) => {

    folder.addEventListener("click", () => {

        layout(index);

    });

});
});
