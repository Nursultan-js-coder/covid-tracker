import React, {useState} from "react"
import {TextField} from "@material-ui/core"
import {Autocomplete} from "@material-ui/lab"
import {inject, observer} from "mobx-react";
import {compose} from "recompose";


function CountryPicker({StatisticsStore}) {
    const countries = [
        {name: "Tajikstan", code: "tj"},
        {name: "Kyrgyzstan", code: "kg"},
        {name: "Kazakstan", code: "kz"},
        {name: "Uzbekstan", code: "uz"},
    ]
    const handleCountryChange = async (code, name) => {
        await StatisticsStore.getDataCountry(code, name);

    }
    return (
        <Autocomplete
            id="combo-box-demo"
            options={countries}
            getOptionLabel={(option) => option.name}
            style={{width: 300}}
            code={(option) => option.code}
            onChange={(e, value) =>
                value
                    ? handleCountryChange(value.code, value.name)
                    : handleCountryChange(e.target.value)
            }
            renderInput={(params) => <TextField {...params} label="countries" variant="outlined"/>}
        />
    )
}


export default compose(
    inject('StatisticsStore')
)(observer(CountryPicker))
