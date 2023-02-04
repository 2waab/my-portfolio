let skils = document.querySelectorAll(".filter div");
skils.forEach((el) => {
    el.addEventListener("click", () => {
        skils.forEach(e => {
            e.classList.remove("active");
            el.classList.add("active");
        });
    });
});

let project = document.querySelector(".project");
let lengthOfRespo = document.querySelector(".respo");

fetch("https://api.github.com/users/2waab/repos")
.then((res) => res.json())
.then(respo => {
    lengthOfRespo.innerHTML = respo.length;
    for (let i = 0; i < respo.length; i++) {
        console.log(respo[i].url)
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="IMG/Subtract.svg" alt="Islamc vector" />
            <div class="text">
                <h4>${respo[i].name}</h4>
                <a href="https://github.com/2waab/${respo[i].name}" target="_Blank">Show Project</a>
            </div>
        `;
        project.appendChild(card);
    };
});
