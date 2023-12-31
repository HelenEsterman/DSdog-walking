import { getPets, getWalkers } from "./database.js"

const pets = getPets()

document.addEventListener(
    "click",
    (theActualClick) => {
        const clickTarget = theActualClick.target
        const walkerId = clickTarget.dataset.walkerkey
        const allWalkers = getWalkers()

        for (const walker of allWalkers) {
            if(walker.id === parseInt(walkerId)){
                window.alert(`This pet is being walked by ${walker.name}`)
            }
        }

    }
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li data-walkerKey="${pet.walkerId}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

