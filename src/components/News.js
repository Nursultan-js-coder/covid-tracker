import {Card, CardActions, CardContent, CardHeader, CardMedia, Grid} from "@material-ui/core"
import {compose} from "recompose";
import {inject, observer} from "mobx-react";
import LoadingSpinner from "./common/spinner";
import {useEffect} from "react";
function News({StatisticsStore}){
    useEffect(()=>{
        StatisticsStore.news(StatisticsStore?.selectedCountry?.countryCode,StatisticsStore?.selectedCountry?.countryName)
    },[])
    return (
       <>
           {StatisticsStore.loading ? <LoadingSpinner/>:(
               StatisticsStore?.newsList && StatisticsStore.newsList.map(singleNews=>{
                   return (
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
               })
           )}
       </>

    )

}
export default compose(
    inject('StatisticsStore')
)(observer(News))