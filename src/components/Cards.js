import React, {useEffect} from "react"
import {CardContent, CardHeader, Grid, Typography} from "@material-ui/core";
import {Card} from "@material-ui/core"
import {compose} from "recompose";
import {inject, observer} from "mobx-react";
import LoadingSpinner from "../components/common/spinner"
import CountUp from "react-countup"

function Cards({StatisticsStore}){
    useEffect(()=>{
        StatisticsStore.getDataGlobal();

    },[])

    return (
            <>
                { StatisticsStore.loading ? (<LoadingSpinner/>):(
        <Grid container spacing={2}>

            <Grid item sm={4}>
               <Card className="border-bottom-colored" ><CardContent><Typography variant="body1" align="center">Cases</Typography>
               <Typography className="text-gray" variant="body2" align="center">+{StatisticsStore.dailyNewCases}</Typography>
               <Typography variant="h5" align="center" style={{color:"#777"}}>
                   <CountUp
                       start={0}
                       end={StatisticsStore.totalConfirmed}
                       duration={1.5}
                       separator="."
                   />

               </Typography>
               <Typography variant="h4"  align="center">Total</Typography>
               </CardContent></Card>
            </Grid>
            <Grid item sm={4}>
                <Card className="border-bottom-colored" style={{borderBottom:"10px solid #cb01fb"}}><CardContent><Typography variant="body1" align="center"> Recoveries</Typography>
                    <Typography className="text-gray" variant="body2" align="center">+{StatisticsStore.dailyNewRecoveries}K</Typography>
                    <Typography variant="h5" align="center" style={{color:"#777"}}>

                        <CountUp
                            start={0}
                            end={StatisticsStore.totalRecovered}
                            duration={1.5}
                            separator="."
                        />
                    </Typography>
                    <Typography variant="h4" align="center">Total</Typography>
                </CardContent></Card>
            </Grid>
            <Grid item sm={4}>
                <Card className="border-bottom-colored" style={{borderBottom:"10px solid #ff1212"}}><CardContent><Typography variant="body1" align="center"> Deaths</Typography>
                    <Typography className="text-gray" variant="body2" align="center">+{StatisticsStore.dailyNewDeaths}</Typography>
                    <Typography variant="h5" align="center" style={{color:"#777"}}>


                        <CountUp
                            start={0}
                            end={StatisticsStore.totalDeaths}
                            duration={1.5}
                            separator="."
                        />
                    </Typography>

                    <Typography variant="h4" align="center">Total</Typography>
                </CardContent></Card>
            </Grid>

        </Grid>
                    )}
            </>


    )
}
export default compose(
    inject('StatisticsStore')
)(observer(Cards))