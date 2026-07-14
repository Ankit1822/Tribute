const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click',()=>{
    mobileMenu.classList.toggle("hidden");

    if(mobileMenu.classList.contains('hidden')){
        menuBtn.innerHTML = "☰";
    }else{
        menuBtn.innerHTML = "✖";
    }
}); 

const navLinks = mobileMenu.querySelectorAll('a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');

        menuBtn.innerHTML = "☰";
    });
});

document.addEventListener('click', (e)=> {
    if(
        !menuBtn.contains(e.target) &&
        !mobileMenu.contains(e.target)
    ){
        mobileMenu.classList.add('hidden');
        menuBtn.innerHTML = "☰";
    }
});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        mobileMenu.classList.add("hidden");
        menuBtn.innerHTML = "☰";

    }

});

window.addEventListener('resize',() => {
    if(window.innerWidth >= 768){
        mobileMenu.classList.add("hidden");
        menuBtn.innerHTML = "☰";
    }
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        backToTop.classList.remove("hidden");
    }else{
        backToTop.classList.add("hidden");
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const progressBar = document.getElementById('progressBar');

window.addEventListener("scroll", () => {
    const scrollTop = window.screenY;

    const scrollHeight = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;

        const progress = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = `${progress}%`
});

const reveals = document.querySelectorAll(".reveal");

function revealSection() {
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){
            section.classList.add("active")
        }
    });
}

window.addEventListener("scroll", revealSection);
revealSection();

const currentPage = window.location.pathname.split("/").pop();
const navlinks = document.querySelectorAll("#navMenu a, #mobileMenu a");

navlinks.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if(linkPage === currentPage){
        link.classList.add("active-link");
    }
});


const currentDate = document.getElementById('currentDate');
const currentTime = document.getElementById('currentTime');

function updateDateTime(){
    const now = new Date();

    const dateOption = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    const timeOption = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    if(currentDate){
        currentDate.textContent = now.toLocaleDateString("en-IN", dateOption);

    }
    if(currentTime){
        currentTime.textContent = now.toLocaleTimeString("en-IN", timeOption);
    }
}

updateDateTime();
setInterval(updateDateTime,1000);