// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


// ================================
// DARK MODE
// ================================

const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    else{

        localStorage.setItem("theme","light");

        themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

});


// ================================
// SCROLL TO TOP
// ================================

const scrollBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollBtn.style.display="block";

    }

    else{

        scrollBtn.style.display="none";

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ================================
// CONTACT FORM VALIDATION
// ================================

const form=document.getElementById("contact-form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name=document.getElementById("name").value.trim();

    const email=document.getElementById("email").value.trim();

    const subject=document.getElementById("subject").value.trim();

    const message=document.getElementById("message").value.trim();

    if(name==="" || email==="" || subject==="" || message===""){

        alert("Please fill all the fields.");

        return;

    }

    const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){

        alert("Please enter a valid email.");

        return;

    }

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});


// ================================
// ACTIVE NAV LINK
// ================================

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        const sectionHeight=section.clientHeight;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active-link");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active-link");

        }

    });

});


// ================================
// FADE-IN ANIMATION
// ================================

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:0.2

});

document.querySelectorAll(

".service-card,.testimonial-card,.pricing-card,.stat-box,.contact-form,.about-image,.about-content"

).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});