import { BusinessList } from "./Business.js"
import { NewYorkBusinessList } from "./NewYorkBusinesses.js"
import { MFGBusinessList } from "./ManufacturingBusinesses.js"
import { AgentList,AgentMap } from "./AgentList.js"
const contentTarget = document.querySelector("#content")
    // let content=BusinessList()
// contentTarget.innerHTML = content
const renderHTML = () => {
  contentTarget.innerHTML = `
  <input type="text" placeholder="Enter business name..." id="companySearch" />

  <article class="foundBusinesses"></article>

  <article class="businesses">
      <h2>All Businesses</h2>
      ${BusinessList()}
  </article>

   <article class="businesses--manufacturing">
       <h2>Manufacturing Businesses</h2>
       ${MFGBusinessList()}
   </article>

  <article class="businesses--newYork">
      <h2>New York Businesses</h2>
      ${NewYorkBusinessList()}
  </article>


  <article class="agents">
      <h2>Purchasing Agents</h2>
      ${AgentList()}
  </article>
`
}

renderHTML()

