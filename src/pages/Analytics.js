import {compose} from "recompose";
import {inject, observer} from "mobx-react";
import {CardHeader, Card, CardContent, Typography} from "@material-ui/core";
import {Bar} from "react-chartjs-2"
import LoadingSpinner from "../components/common/spinner";
import {useEffect} from "react";
import {process} from "../utils"

function Analytics({StatisticsStore}){
    useEffect(()=>{
        console.log("death reating",StatisticsStore.deathRating)
    },[StatisticsStore.deathRating])
    return (
<>
    {StatisticsStore.loading ? <LoadingSpinner/> :(
        <>

<Card>
    <CardContent>
        <Typography>
            Analytics by death rating of countries
        </Typography>
    <div className="dashboard-chart dynamic-card">
    <Bar

        data={{
            labels: process(StatisticsStore.deathRating,"name")?.splice(0,10),
            datasets: [{
                label: '# of Votes',
                data: process(StatisticsStore.deathRating,"number")?.splice(0,10),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }}
        height={300}
        width={600}
        options={{maintainAspectRatio:false}
        }
    >

    </Bar>
</div>
    </CardContent>
</Card>
<Card>
    <CardContent>
        <Typography>
            Analytics by death rating of countries
        </Typography>
    <div className="dashboard-chart dynamic-card">
    <Bar

        data={{
            labels: process(StatisticsStore.deathRating,"name")?.splice(10,21),
            datasets: [{
                label: '# of Votes',
                data: process(StatisticsStore.deathRating,"number")?.splice(10,21),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }}
        height={300}
        width={600}
        options={{maintainAspectRatio:false}
        }
    >

    </Bar>
</div>
    </CardContent>
</Card>
<Card>
    <CardContent>
        <Typography>
            Analytics by death rating of countries
        </Typography>
    <div className="dashboard-chart dynamic-card">
    <Bar

        data={{
            labels: process(StatisticsStore.deathRating,"name")?.splice(20,31),
            datasets: [{
                label: '# of Votes',
                data: process(StatisticsStore.deathRating,"number")?.splice(20,31),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }}
        height={300}
        width={600}
        options={{maintainAspectRatio:false}
        }
    >

    </Bar>
</div>
    </CardContent>
</Card>
        </>

    )}
</>
    )
}

export default compose(
    inject('StatisticsStore')
)(observer(Analytics))