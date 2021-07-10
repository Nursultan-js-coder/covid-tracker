
import React from "react"
import Cards from "./Cards"
import PieChart from "./PieCharts"
import News from "./News"

function Content(){
    return (
        <div className="content">
<Cards/>
<PieChart/>
            <News/>
        </div>
    )
}

export default Content
