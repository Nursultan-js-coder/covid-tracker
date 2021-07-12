
import React from "react"
import Cards from "./Cards"
import PieChart from "./PieCharts"
import News from "./News"
import Analytics from "../pages/Analytics"

function Content(){
    return (
        <div className="content">
<Cards/>
<PieChart/>
            <Analytics/>
            <News/>
        </div>
    )
}

export default Content
