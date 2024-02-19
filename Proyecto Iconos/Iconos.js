const ulElem = document.querySelector("ul");

const arrayDeObjetos = [
    {
        nombre: "Instagram",
        class: "fab fa-instagram",
        link: "https://instagram.com/untoldcoding?igshid=NzZhOTFlYzFmZQ==",
    },
    {
        nombre: "Gif-tub",
        class: "fab fa-github",
        link: "#"
    },
    {
        nombre: "Linkedin",
        class: "fab fa-linkedin",
        link: "#"
    },
    {
        nombre: "Telegram",
        class: "fab fa-telegram",
        link: "https://t.me/untoldcoding"
    },
];

// option 1
// for (let i = 0; i < arrayDeObjetos.length; i++){
//     console.log(arrayDeObjetos[i]);
//     const liElem = document.createElement("li");
//     const aElem = document.createElement("a");
//     const iElem = document.createElement("i");
//     iElem.className = arrayDeObjetos[i].class;
//     aElem.href = arrayDeObjetos[i].link;
//     aElem.target = "_blank";
//     aElem.appendChild(iElem);
//     liElem.appendChild(aElem);
//     ulElem.appendChild(liElem);
// }

// option 2


// for (const objeto of arrayDeObjetos) {
//     console.log(objeto);
//    ulElem.innerHTML += `
//    <li>
//        <a href="${objeto.link}" target="_blank">
//               <i class="${objeto.class}"></i>
//        </a>
//    </li>
//    `;
// }

// option 3 - Using arrow functions
const test = "hello world"; //string

const test2 = 7; // integer or number

const test3 = ["hola", "mundo"]; // array


const test4 = {username: "alex", password: "1234"}; // object

const test5 = [{username: "alex", password: "1234"}, {username: "alex", password: "1234"}]; // array of objects


// function suma(a, b) {
//     return a + b;
// }

function createIcon (objeto){
    const liElem = `
    <li>
        <a href="${objeto.link}" target="_blank">
            <i class="${objeto.class}"></i>
        </a>
    </li>
    `;
    return liElem;
}

// const createIcon = (objeto) => {
//     const liElem = `
//     <li>
//         <a href="${objeto.link}" target="_blank">
//             <i class="${objeto.class}"></i>
//         </a>
//     </li>
//     `;
//     return liElem;
// }

for (const objeto of arrayDeObjetos) {
    ulElem.innerHTML += createIcon(objeto);
}