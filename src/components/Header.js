import React, {useEffect} from "react";
import CountryPicker from "./CountryPicker"
import {compose} from "recompose";
import {inject, observer} from "mobx-react";

import logo from "../assets/img/logo.png"

function Header({StatisticsStore}){

    return (
        <div className="app-header">
            {!StatisticsStore.loading && <p>{StatisticsStore?.selectedCountry?.countryCode}, {StatisticsStore?.selectedCountry?.countryName }</p>}
            {StatisticsStore?.selectedCountry?.countryCode && <img src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/${StatisticsStore.selectedCountry.countryCode}.svg`} width={30}
  />}

        <img src={logo}/>
            <CountryPicker />
        </div>
    )
}
export default compose(
    inject('StatisticsStore')
)(observer(Header))