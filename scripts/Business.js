import { getBusinesses } from "./database.js"


export const BusinessList = () => {
    const businessArray = getBusinesses()
    let businessListHTML = "<h1>Active Businesses</h1>"

    // Iterate the supply array
    businessArray.forEach(
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