import {useEffect,useState} from "react";
import {sortDeathRate, sortDesc} from "../utils";
import {compose} from "recompose";
import {inject, observer} from "mobx-react";
import LoadingSpinner from "./common/spinner";
import {Skeleton} from "@material-ui/lab";
import TopCountries from "./TopCountries";



function Table({StatisticsStore}){
    useEffect(()=>{
        fillTable();
        },[])

    const fillTable = async()=>{
        await StatisticsStore.getTopCountry();
    }

    const handleCountryChange = async (countryCode,countryName)=>{
        await StatisticsStore.getDataCountry(countryCode.toLowerCase(),countryName.toLowerCase())
        await StatisticsStore.news(StatisticsStore.selectedCountry.countryCode,StatisticsStore.selectedCountry.countryName)
        console.log("Selected Country :",StatisticsStore.selectedCountry)

    }

    return(
        <div className="table">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Country Name</th>
                            <th>Quantity</th>
                        </tr>
                        <tbody>
                        {StatisticsStore.loading ? <LoadingSpinner/> : (<TopCountries handleCountryChange={handleCountryChange}/>) }
                        </tbody>
                        </thead>
                    </table>


            </div>
    )
}
export default compose(
    inject('StatisticsStore')
)(observer(Table))

function SkeletonTable(){

    return (
        <Skeleton variant="rect" width={300} height={600} animation="wave">

        </Skeleton>
    )
}


