import {Doughnut} from "react-chartjs-2";
import React from "react";
import {Card, CardContent} from "@material-ui/core";
import {compose} from "recompose";
import {inject, observer} from "mobx-react";
import {Skeleton} from "@material-ui/lab";

function PieChart({StatisticsStore}) {
    return (
        <Card>
                {StatisticsStore.loading ? <PieChartSkeleton/>: (
                    <CardContent>

                    <Doughnut data={{
                    labels: ["total recovered" , "total confirmed", "total deaths"],
                    datasets: [{
                        label: '# of Votes',
                        data: [StatisticsStore.totalRecovered,StatisticsStore.totalConfirmed,StatisticsStore.totalDeaths],
                        backgroundColor: [
                            'rgba(237,169,31,0.5)',
                            'rgba(152,223,104,0.2)',
                            'rgba(245,5,5,0.2)',

                        ],
                        borderColor: [
                            'rgba(255, 206, 86, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 99, 132, 1)',

                        ],
                        hoverOffset: 4
                    }]
                }}
                          width={200}
                          height={200}
                          options={{maintainAspectRatio: false}}

                />
        </CardContent>)}
        </Card>
    )
}

export default compose(
    inject('StatisticsStore')
)(observer(PieChart))



function PieChartSkeleton(){

    return (
        <Skeleton variant="rect" width={640} height={250} animation="wave">

        </Skeleton>
    )
}