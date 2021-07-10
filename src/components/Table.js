import {useEffect,useState} from "react";
import {sortDesc} from "../utils";
import {compose} from "recompose";
import {inject, observer} from "mobx-react";
import LoadingSpinner from "./common/spinner";


function Table({StatisticsStore}){
    useEffect(()=>{
        // StatisticsStore.getTopCountry();
        },[])
    const handleCountryChange = (countryCode,countryName)=>{
        StatisticsStore.getDataCountry(countryCode,countryName)
        StatisticsStore.news(StatisticsStore.selectedCountry.countryCode,StatisticsStore.selectedCountry.countryName)
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
            {StatisticsStore.loading ? (<LoadingSpinner/>): (StatisticsStore?.topCountries?.map((country,id)=>{
                return (
                    <tr>
                        <td onClick={()=>handleCountryChange(country.countryCode,country.country)}>
                            <img
                                src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/${(country.countryCode
                                        ? country.countryCode
                                        : ""
                                ).toLowerCase()}.svg`}
                                width="20"
                                style={{ paddingRight: "5px" }}
                                alt="country-flag"
                            />
                            {country.country}
                        </td>
                        <td>
                                <strong>{country.totalConfirmed.toLocaleString()}</strong>
                        </td>
                    </tr>
                )
            }))}
            <tr>
                <td></td>
            </tr>
            </tbody>
            </thead>
        </table>
            </div>
    )
}
export default compose(
    inject('StatisticsStore')
)(observer(Table))
