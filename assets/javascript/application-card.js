class ApplicationCard extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
      }

    set application(applications) {
        this.root.innerHTML = `
        <style>
            div.container {
                background-color: #21203E;
                border-radius: 20px;
                padding: 0.5rem;
            }
            .fa-star {
                height: 0.5rem;
                width: 0.5rem;
                color: #D7D7DE;
                float: right;
                margin-right: 1rem;
                margin-top: 0.5rem;
            }
            .fa-star:hover, .fa-star.fav {
                height: 0.5rem;
                width: 0.5rem;
                color: #A7CC23;
                float: right;
                margin-right: 1rem;
                margin-top: 0.5rem;
            }
            .card_postion {
                text-align: center;
                color: #D7D7DE;
            }
            .card_name {
                text-align: center;
                color: #D7D7DE;
            }
            .card_applied {
                text-align: center;
                color: #D7D7DE;
            }
            .panel {
                display: none;
            }
            .panel.expanded {
                display: block;
            }
            li {
                list-style: none;
            }
            .card_experience {
                color: #D7D7DE;
            }
            .card_availability {
                color: #D7D7DE;
            }
            .card_questions {
               color: #D7D7DE; 
            }
            #expander {
                background-color: #A7CC23;
                color: #D7D7DE;
                border: none;
                border-radius: 10px;
                font-size: 24px;
                font-weight: 900;
                padding: 0.15rem;;
                cursor: pointer;
                outline: inherit;
                width: 90%;
                margin-left: 5%;
                margin-right: 5%;
                align: center;
            }
        </style>
        <div class="container">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
            <i class="fas fa-star" onclick="favorite"></i>
            <h1 class="card_postion">${applications.position}</h2>
            <h3 class="card_name">${applications.name}</h4>
            <p class="card_applied">Applied: ${applications.applied}</p>
            <button id="expander" onClick="expand()">+</button>
            <div class="panel">
            <ul class="card_experience">
                    <h4>Experience</h4>
                    <li>${applications.experience} years</li>
                </ul>
                <ul class="card_availability">
                    <h4>Availability</h4>
                    <li>Monday: ${applications.availability.M}</li>
                    <li>Tuesday: ${applications.availability.T}</li>
                    <li>Wednesday: ${applications.availability.W}</li>
                    <li>Thursday: ${applications.availability.Th}</li>
                    <li>Friday: ${applications.availability.F}</li>
                    <li>Saturday: ${applications.availability.S}</li>
                    <li>Sunday: ${applications.availability.Su}</li>
                </ul>
                <ul class="card_questions">
                    <h4>${applications.questions[0].text}</h4>
                    <li>${applications.questions[0].answer}</li>
                    <h4>${applications.questions[1].text}</h4>
                    <li>${applications.questions[1].answer}</li>
                </ul>
            </div>
        </div>
        <script>
        const expand = () => {
            //gets elements with ID of panel
            const panel = this.getElementById('panel');
            panel.classList.toggle('expanded');
        }
        const favorite = () => {
            // gets array of elements by class name then sets the first result to star
            const starSelector = this.getElementsByClassName('fa-star');
            const star = starSelector[0];
            star.classList.toggle('fav');

            var.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        }
        </script>
        `;
    }

}

customElements.define('application-card', ApplicationCard);

// const getStyle = () => {
//     return ` 
//         container {
//             background-color: #21203E;
//             border-radius: 20px;
//             padding: 0.5rem;
//         }
//         .card_postion {
//             text-align: center;
//             color: #D7D7DE;
//         }
//         .card_name {
//             text-align: center;
//             color: #D7D7DE;
//         }
//         .card_applied {
//             text-align: center;
//             color: #D7D7DE;
//         }
//         .panel {
//             display: none;
//         }
//         .panel {
//             display: block;
//         }
//         li {
//             list-style: none;
//         }
//         .card_availability {
//             color: #D7D7DE;
//         }
//         .card_questions {
//             color: #D7D7DE; 
//         }
//         #expander {
//             background-color: #A7CC23;
//             color: #D7D7DE;
//             border: none;
//             border-radius: 10px;
//             font-size: 24px;
//             font-weight: 900;
//             padding: 0.15rem;;
//             cursor: pointer;
//             outline: inherit;
//             width: 90%;
//             margin-left: 5%;
//             margin-right: 5%;
//             align: center;
//         }
//     `
// }

// class ApplicationCard extends HTMLElement {
//     connectedCallback () {
//         this.createShadowRoot()
//         // can add attributes here 
//         //this.attributeVarName = this.getAttribute('attributeName')
//         this.render()
//     }
// }

// const addStyle = () => {
//     const styleTag = document.createElement('style')
//     this.ShadowRoot.appendChild(styleTag)
// }

// const addButtonEventListeners = (button) => {
//     button.addEventListener('click', () => {panel.classList.add('expanded') })
//     //change above to toggle
// }

// const createButton = () => {
//     const button = document.createElement('button')
//     button.classList.add('expander')
//     this.addButtonEventListeners(button)
//     return button
// }

// const createCard = (button) => {
//     const card = document.createElement('div')
//     const buttonContainer = card.getElementsByClassNameById('buttonContainer')
//     card.classList.add('card')
//     card.innerHTML = `
//         // <div class="container">
//             <h1 class="card_postion">${applications.position}</h2>
//             <h3 class="card_name">${applications.name}</h4>
//             <p class="card_applied">Applied: ${applications.applied}</p>
//             <div id="buttonContainer"></div>
//             <div class="panel">
//             <ul class="card_experience">
//                     <h4>Experience</h4>
//                     <li>${applications.experience} years</li>
//                 </ul>
//                 <ul class="card_availability">
//                     <h4>Availability</h4>
//                     <li>Monday: ${applications.availability.M}</li>
//                     <li>Tuesday: ${applications.availability.T}</li>
//                     <li>Wednesday: ${applications.availability.W}</li>
//                     <li>Thursday: ${applications.availability.Th}</li>
//                     <li>Friday: ${applications.availability.F}</li>
//                     <li>Saturday: ${applications.availability.S}</li>
//                     <li>Sunday: ${applications.availability.Su}</li>
//                 </ul>
//                 <ul class="card_questions">
//                     <h4>${applications.questions[0].text}</h4>
//                     <li>${applications.questions[0].answer}</li>
//                     <h4>${applications.questions[1].text}</h4>
//                     <li>${applications.questions[1].answer}</li>
//                 </ul>
//             </div>
//         // </div>
//         `;
//         buttonContainer.appendChild(button)
//     return card
// }

// const render = () => {
//     const div = document.createElement('div')
//     div.classList.add('container')
//     this.ShadowRoot.appendChild(div)
//     this.createCard()
//     this.addStyle()
// }

// customElements.define('application-card', ApplicationCard);