import { getBusinesses } from "./database.js"
const MFGfilterFunction = (business) => {
    if (business.companyIndustry ==="Manufacturing" ){
        return true
    } 
    return false
}

const MFGBusinesses = ()=>{
    let businesses=getBusinesses()
    const MFGBusinesses= businesses.filter(MFGfilterFunction)
    return MFGBusinesses
}

export const MFGBusinessList = () => {
    const MFGbusinessArray = MFGBusinesses()
    let MFGbusinessListHTML = ``

    // Iterate the business array
    MFGbusinessArray.forEach(
        // This function will be invoked on each iteration
        (MFGbusinessObject) => {
            MFGbusinessListHTML += `
                <section class="business">
                    <h2 class="business__name">${MFGbusinessObject.companyName}</h2>
                    <div class="business__adress">
                        ${MFGbusinessObject.addressFullStreet}
                        ${MFGbusinessObject.addressCity}, ${MFGbusinessObject.addressStateCode} ${MFGbusinessObject.addressZipCode}
                    </div>
                </section>
            `
        }
    )

    return MFGbusinessListHTML
}