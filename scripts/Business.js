import { getBusinesses } from "./database.js"
const businesses = getBusinesses()

export const BusinessList = () => {

    let businessListHTML = "<h1>Active Businesses</h1>"

    // Iterate the supply array
    businesses.forEach(
        // This function will be invoked on each iteration
        (businessObject) => {
            businessListHTML += `
                <section class="business">
                    <h2 class="business__name">${businessObject.companyName}</h2>
                    <div class="business__adress">
                        ${businessObject.addressFullStreet}
                        ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}
                    </div>
                </section>
            `
        }
    )

    return businessListHTML
}

const FindBusiness = (textInput) => {
    const foundBusiness = businesses.find(business => business.companyName.includes(textInput))

    return foundBusiness
}

document
    .querySelector("#content")
    .addEventListener(
        "keypress",
        (keyPressEvent) => {
            const companySearchResultArticle = document.querySelector(".foundBusinesses")

            if (keyPressEvent.charCode === 13) {
                console.log('you pressed enter!')
                /*
                    When the user presses 'Enter', find the matching business.


                    You can use the `.includes()` string method to
                    see if a smaller string is part of a larger string.
                */

                if (FindBusiness(keyPressEvent.target.value)) {
                    let business = FindBusiness(keyPressEvent.target.value)
                    let resultHTML = `<section class="business">
                            <h2 class="business__name">${business.companyName}</h2>
                            <div class="business__adress">
                                ${business.addressFullStreet}
                                ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
                            </div>
                        </section>`
                    companySearchResultArticle.innerHTML = resultHTML
                }
                
                // Your callback function goes here
                // )

                // companySearchResultArticle.innerHTML = `build an HTML representation of the found business here`
                //     searchHTML = `
                //     <section class="business">
                //         <h2 class="business__name">${business.companyName}</h2>
                //         <div class="business__address">
                //             ${business.addressFullStreet}
                //             ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
                //         </div>
                //     </section>
                // `
            }
        });