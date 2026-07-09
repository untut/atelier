document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       УСЛУГИ → WORKS
    ========================= */

    const services = document.querySelectorAll(".service-tag");
    const worksTitle = document.getElementById("worksTitle");
    const worksSection = document.querySelector(".works");

    const backgrounds = ["auto", "furniture", "atelier", "sewing", "foam"];

    const worksFolders = {
        auto: "car",
        furniture: "furniture",
        atelier: "atelier",
        sewing: "machine",
        foam: "foam"
    };

    services.forEach(service => {

        service.addEventListener("click", function () {

            services.forEach(item => item.classList.remove("active-service"));
            this.classList.add("active-service");

            worksSection.classList.remove(...backgrounds);
            worksSection.classList.add(this.dataset.bg);

            if (worksTitle) {
                worksTitle.textContent = this.dataset.title;
            }

            const folder = worksFolders[this.dataset.bg];

            for (let i = 1; i <= 6; i++) {
                document.getElementById(`work${i}`).src = `images/${folder}/${i}.jpg`;
            }

            /* =========================
   PRELOAD WORK IMAGES
========================= */

Object.values(worksFolders).forEach(folder => {

    for (let i = 1; i <= 6; i++) {

        const img = new Image();
        img.src = `images/${folder}/${i}.jpg`;

    }

});

            // Плавно показываем блок с работами
setTimeout(() => {

    const y = worksSection.offsetTop - 20;

    window.scrollTo({
        top: y,
        behavior: "smooth"
    });

}, 300);

        });

    });



/* =========================
   REVIEWS
========================= */

const cards = document.querySelectorAll(".review-card");

let activeIndex = 0;

function renderReviews(index) {

    const mobile = window.innerWidth <= 768;

    if (mobile) {

        const order = [];

        order.push(cards[index]);

        cards.forEach((card, i) => {
            if (i !== index) order.push(card);
        });

        order.forEach((card, i) => {

            card.classList.toggle("active", i === 0);

            card.style.transform = `
                translateY(${i * 50}px)
                scale(${1 - i * 0.04})
            `;

            card.style.zIndex = 100 - i;
            card.style.opacity = "1";

        });

        return;
    }

    cards.forEach((card, i) => {

        const diff = i - index;

        card.classList.remove("active");

        if (diff === 0) {

            card.style.transform = "translateY(0px) scale(1.03)";
            card.style.zIndex = 20;
            card.style.opacity = "1";
            card.classList.add("active");

        } else {

            const y = diff * 30;
            const scale = 1 - Math.abs(diff) * 0.03;

            card.style.transform = `translateY(${y}px) scale(${scale})`;
            card.style.zIndex = 20 - Math.abs(diff);
            card.style.opacity = Math.abs(diff) > 2 ? "0.6" : "1";

        }

    });

}

renderReviews(activeIndex);

cards.forEach((card, i) => {

    card.addEventListener("click", () => {

        activeIndex = i;
        renderReviews(activeIndex);

    });

});

window.addEventListener("resize", () => {
    renderReviews(activeIndex);
});

    window.addEventListener("resize", () => {
        renderReviews(activeIndex);
    });

    /* =========================
   IMAGE VIEWER
========================= */

const viewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");
const viewerClose = document.querySelector(".viewer-close");

/* открываем любые картинки сайта */

document.querySelectorAll(".work-image img, .review-photo img").forEach(img => {

    img.addEventListener("click", () => {

        viewerImage.src = img.src;

        viewer.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});

viewerClose.addEventListener("click", closeViewer);

viewer.addEventListener("click", e => {

    if (e.target === viewer) {

        closeViewer();

    }

});

function closeViewer(){

    viewer.classList.remove("show");

    document.body.style.overflow = "";

}

});