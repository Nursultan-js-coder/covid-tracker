import {useState} from "react";
import {action, makeAutoObservable, makeObservable,observable} from "mobx";
import apiClient from "../api/apiClient"
import {process,sortDescDeathRate} from "../utils"


class StatisticsStore{
    dailyNewCases;
    dailyNewDeaths;
    dailyNewRecoveries;
    totalConfirmed;
    totalRecovered;
    totalDeaths;
    topCountries;
    newsList;
    loading = false ;
    selectedCountry;
    deathRating;

    constructor() {
        makeAutoObservable(this,{
            // topCountries:false,
            // deathRating:false
        })
    }

    getDataGlobal(){
        this.loading = true;
        return apiClient.common.global()
            .then(action((res)=>{
                this.dailyNewCases = res.data.totalNewCases;
                this.dailyNewDeaths = res.data.totalNewDeaths;
                this.dailyNewRecoveries = this.dailyNewCases- this.dailyNewDeaths;
                this.totalConfirmed  = res.data.totalConfirmed;
                this.totalRecovered  = res.data.totalRecovered;
                this.totalDeaths  = res.data.totalDeaths;
                console.log("getGlobal",res.data);

            }))
            .finally(()=> {
            this.loading = false;
                this.news()
            })

    }

    getDataCountry(countryCode,countryName){
        this.selectedCountry = {
            countryCode,countryName
        }
        this.loading = true;
        return apiClient.common.fetchCountry(countryCode)
            .then(action((res)=>{
                this.dailyNewCases = res.data[0].dailyConfirmed;
                this.dailyNewDeaths = res.data[0].dailyDeaths;
                this.dailyNewRecoveries = this.dailyNewCases- this.dailyNewDeaths;
                this.totalConfirmed  = res.data[0].totalConfirmed;
                this.totalRecovered  = res.data[0].totalRecovered;
                this.totalDeaths  = res.data[0].totalDeaths;
            }))
            .finally(()=> {
                console.log("this is just console log out finally");
                console.log(this.dailyNewRecoveries)
                this.loading = false;
            })


    }
    getTopCountry(){
        this.laoding = true;
        return apiClient.common.fetchTopCountries()
            .then(action((res)=>{
                this.topCountries = res.data;
                console.log(res.data)
                console.log("getCountry is called")
                this.deathRating = sortDescDeathRate(process(res.data,"death"));

            }))
            .finally(()=>{
                this.loading = false;
            })
    }
    news(countryCode,countryName){
        this.loading = true;

        return apiClient.common.news(countryCode ?? "kg",countryName ?? "kyrgyzstan")
            .then((res)=>{
                this.newsList = res.data.items;
                console.log(this.newsList)
            })
            .finally(()=>{
                this.loading = false;
            })
    }
    analytics(){



    }




}
export default  new StatisticsStore()


/*
* Object
created: "2021-07-09T12:17:00.000Z"
totalActiveCases: 11856603
totalCasesPerMillionPop: 23921
totalConfirmed: 186460934
totalDeaths: 4028903
totalNewCases: 140363
totalNewDeaths: 2486
totalRecovered: 170575428
* */