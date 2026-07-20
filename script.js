document.addEventListener("DOMContentLoaded", () => {


/* =========================================
   SERVICES → WORKS
========================================= */


const services = document.querySelectorAll(".service-tag");

const worksTitle = document.getElementById("worksTitle");

const worksSection = document.querySelector(".works");


const backgrounds = [
    "auto",
    "furniture",
    "atelier",
    "sewing",
    "foam"
];


const worksFolders = {

    auto:"car",

    furniture:"furniture",

    atelier:"atelier",

    sewing:"machine",

    foam:"foam"

};



/* =========================================
   IMAGE CACHE
========================================= */


const imageCache = {};



Object.entries(worksFolders).forEach(([type, folder]) => {


    imageCache[type] = [];


    for(let i = 1; i <= 6; i++){


        const img = new Image();


        img.src = `images/${folder}/${i}.jpg`;


        imageCache[type].push(img);


    }


});




/* =========================================
   SWITCH WORKS
========================================= */


let currentService = "auto";



function changeWorks(type,title){


    currentService = type;



    worksSection.classList.remove(...backgrounds);

    worksSection.classList.add(type);



    if(worksTitle){

        worksTitle.textContent = title;

    }



    const images = imageCache[type];



    images.forEach((img,index)=>{


        const target =
        document.getElementById(`work${index+1}`);



        if(!target) return;



        target.classList.add("loading");



        if(img.complete){


            target.src = img.src;


            requestAnimationFrame(()=>{

                target.classList.remove("loading");

            });


        }
        else{


            img.onload = ()=>{


                target.src = img.src;


                target.classList.remove("loading");


            };


        }


    });


}




services.forEach(service=>{


    service.addEventListener("click",()=>{


        services.forEach(item=>{

            item.classList.remove("active-service");

        });



        service.classList.add("active-service");



        changeWorks(

            service.dataset.bg,

            service.dataset.title

        );



        setTimeout(()=>{


            const y =
            worksSection.offsetTop - 20;



            window.scrollTo({

                top:y,

                behavior:"smooth"

            });



        },150);



    });


});





/* =========================================
   REVIEWS
========================================= */


const cards =
document.querySelectorAll(".review-card");


let activeIndex = 0;



function renderReviews(index){


    const mobile =
    window.innerWidth <= 768;



    if(mobile){


        const order=[];


        order.push(cards[index]);



        cards.forEach((card,i)=>{


            if(i!==index){

                order.push(card);

            }


        });



        order.forEach((card,i)=>{


            card.classList.toggle(
                "active",
                i===0
            );



            card.style.transform =
            `
            translateY(${i*50}px)
            scale(${1-i*.04})
            `;



            card.style.zIndex =
            100-i;



            card.style.opacity = 1;



        });



        return;

    }





    cards.forEach((card,i)=>{


        const diff = i-index;



        card.classList.remove("active");



        if(diff===0){



            card.style.transform =
            "translateY(0) scale(1.03)";



            card.style.zIndex=20;



            card.style.opacity=1;



            card.classList.add("active");



        }
        else{


            card.style.transform =
            `
            translateY(${diff*30}px)
            scale(${1-Math.abs(diff)*.03})
            `;



            card.style.zIndex =
            20-Math.abs(diff);



            card.style.opacity =
            Math.abs(diff)>2 ? .6 : 1;



        }



    });


}




renderReviews(activeIndex);



cards.forEach((card,index)=>{


    card.addEventListener("click",()=>{


        activeIndex=index;


        renderReviews(activeIndex);


    });


});




window.addEventListener("resize",()=>{


    renderReviews(activeIndex);


});






/* =========================================
   IMAGE VIEWER
========================================= */


const viewer =
document.getElementById("imageViewer");


const viewerImage =
document.getElementById("viewerImage");


const viewerClose =
document.querySelector(".viewer-close");





document.querySelectorAll(
".work-image img, .review-photo img"
)
.forEach(img=>{


    img.addEventListener("click",()=>{


        viewerImage.src =
        img.src;



        viewer.classList.add("show");



        document.body.style.overflow =
        "hidden";



    });



});





function closeViewer(){


    viewer.classList.remove("show");


    document.body.style.overflow="";


}




viewerClose.addEventListener(
"click",
closeViewer
);



viewer.addEventListener(
"click",
(event)=>{


    if(event.target===viewer){

        closeViewer();

    }


});



});