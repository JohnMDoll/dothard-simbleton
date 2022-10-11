import { NewYorkBusinesses } from "./database.js"


export const NewYorkBusinessList = () => {
    const NYbusinessArray = NewYorkBusinesses()
    let NYbusinessListHTML = ``

    // Iterate the business array
    NYbusinessArray.forEach(
        // This function will be invoked on each iteration
        (NYbusinessObject) => {
            NYbusinessListHTML += `
                <section class="business">
                    <h2 class="business__name">${NYbusinessObject.companyName}</h2>
                    <div class="business__adress">
                        ${NYbusinessObject.addressFullStreet}
                        ${NYbusinessObject.addressCity}, ${NYbusinessObject.addressStateCode} ${NYbusinessObject.addressZipCode}
                    </div>
                </section>
            `
        }
    )

    return NYbusinessListHTML
}