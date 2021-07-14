import {Card, CardContent, Grid, Paper} from "@material-ui/core";
import TwitterWidget from "./TwitterWidget";
import Table from "./Table.js"
import {compose} from "recompose";
import {inject, observer} from "mobx-react";
import MyMap from "./map/MyMap";

function Sidebar({StatisticsScore}){
    return (
        <div className="sidebar">
            <Card style={{height:"100%",marginTop:40}}>
                <CardContent>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                    <Grid item>
                        <Grid item >
                            <MyMap/>
                        </Grid>
                        <Grid item >
                            <Table />
                        </Grid>
                    </Grid>
                        <TwitterWidget/>
                    </Grid>

                </CardContent>
            </Card>
        </div>
    )
}
export default compose(
    inject('StatisticsStore')
)(observer(Sidebar))

