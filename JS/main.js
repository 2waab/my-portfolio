let skils = document.querySelectorAll(".filter div");
skils.forEach((el) => {
    el.addEventListener("click", () => {
        skils.forEach(e => {
            e.classList.remove("active");
            el.classList.add("active");
        });
    });
});