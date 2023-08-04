import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (theClickToInvokeFunction) => {
        const cityClickTarget = theClickToInvokeFunction.target

        if(cityClickTarget.dataset.type === "cities"){
            
            window.alert(`${cityClickTarget.dataset.walkername} is servicing this city`)
        }
    }
)


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const walker of walkers) {
        citiesHTML += `<li data-walkername="${walker.name}" data-type="cities">${walker.city}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

