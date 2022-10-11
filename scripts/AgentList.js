import { getBusinesses } from "./database.js"
let businesses = getBusinesses()
export const AgentMap = () => {
    // Generate a new array based on original array using .map()
    const agentsMap = businesses.map((business) => {
        return `<section class="agent">
        <h2 class="agent__name">${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}</h2>
        <div class="agent__company">
            ${business.companyName}
        </div>
        <div class="agent__phone">
            ${business.phoneWork}
        </div>`

    })
    // Return the new array of strings
    return agentsMap
}

export const AgentList = () =>{
    let agentHTML = AgentMap()
    agentHTML = agentHTML.join("")
    agentHTML +="</section>"
    return agentHTML
}

