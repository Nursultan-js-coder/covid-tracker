import {compose} from "recompose";
import {inject, observer} from "mobx-react";

function TopCountries({StatisticsStore,handleCountryChange}){
    return (
        <>
        {
    !StatisticsStore.loading && StatisticsStore?.topCountries?.map((country,id)=> {
        return (
            <tr>
                <td onClick={() => handleCountryChange(country.countryCode, country.country)}>
                    <img
                        src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/${(country.countryCode
                                ? country.countryCode
                                : ""
                        ).toLowerCase()}.svg`}
                        width="20"
                        style={{paddingRight: "5px"}}
                        alt="country-flag"
                    />
                    {country.country}
                </td>
                <td>
                    <strong>{country.totalConfirmed.toLocaleString()}</strong>
                </td>
            </tr>
        )
    })}
        </>
    )

}
export default compose(
    inject('StatisticsStore')
)(observer(TopCountries))
