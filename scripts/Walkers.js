import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (theClick) => {
        const whatWeClicked = theClick.target
        
        if(whatWeClicked.dataset.type === "walker"){
        window.alert(`This walker works in ${whatWeClicked.dataset.city}`)
        }
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}" data-city="${walker.city}" data-type="walker">${walker.name}</li>`
    }

    return walkerHTML += "</ul>"

}

