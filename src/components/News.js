import {Card, CardActions, CardContent, CardHeader, CardMedia, Grid} from "@material-ui/core"
import {compose} from "recompose";
import {inject, observer,reaction} from "mobx-react";
import LoadingSpinner from "./common/spinner";
import {useEffect} from "react";
import {Skeleton} from "@material-ui/lab";
function News({StatisticsStore}) {
    useEffect(() => {
        StatisticsStore.news(StatisticsStore?.selectedCountry?.countryCode, StatisticsStore?.selectedCountry?.countryName)
    }, [StatisticsStore.selectedCountry])

    return (
        <>

            {StatisticsStore.loading ? <SkeletonNews/> : (
                StatisticsStore?.newsList &&
                StatisticsStore?.newsList?.map(singleNews => {
                        return (

                            StatisticsStore.selectedCountry && (
                                <Card>
                                    <CardHeader>
                                        <h5>{singleNews.title}</h5>
                                    </CardHeader>
                                    <CardContent>
                                        <CardMedia>
                                            <img src={singleNews.urlToImage} alt="image"/>
                                        </CardMedia>
                                    </CardContent>
                                    <CardActions>
                                        <p>{singleNews.description}</p>
                                    </CardActions>
                                </Card>
                            )
                        )
                    }
                )
            )
            }

        </>

    )
}

export default compose(
    inject('StatisticsStore')
)(observer(News))


function SkeletonNews(){

    return (
        <Skeleton variant="rect" width={640} height={400} animation="wave">

        </Skeleton>
    )
}
