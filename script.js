const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold:0.2
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));