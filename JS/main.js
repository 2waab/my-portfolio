let project = document.querySelector(".project");
let lengthOfRespo = document.querySelector(".respo");

fetch("https://api.github.com/users/2waab/repos")
.then((res) => res.json())
.then(respo => {
    lengthOfRespo.innerHTML = respo.length;
    for (let i = 0; i < respo.length; i++) {
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

let switcher = document.querySelectorAll(".filter");
let articls = Array.from(document.querySelectorAll(".articls div"));
let skils = document.querySelectorAll(".filter div");
skils.forEach((el) => {
    el.addEventListener("click", removeActive);
    el.addEventListener("click", mangeDivs);
});

function removeActive() {
    skils.forEach(li => {
        li.classList.remove("active");
        this.classList.add("active");
    });
};

function mangeDivs() {
    articls.forEach(div => {
        div.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach(el => {
        el.style.display = "block";
    });
};
