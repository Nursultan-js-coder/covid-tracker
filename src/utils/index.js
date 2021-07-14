export const sortDesc = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.activeCases > b.activeCases ? -1 : 1));
};
export const sortDescDeathRate = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.deathPercentage > b.deathPercentage ? -1 : 1));
};

export const sortAlph = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) =>
    a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
  );
};

export const nFormat = (num) => {
  return Math.abs(num) > 999999999
    ? [Math.sign(num) * (Math.abs(num) / 1000000000).toFixed(1) , "B"]
    : Math.abs(num) > 999999
    ? [Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) , "M"]
    : Math.abs(num) > 999
    ? [Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) ,"K"]
    : Math.sign(num) * Math.abs(num);
};

export const process = (data,type)=>{
  if(type === 'death'){
    return data.map(country=>({
      deathPercentage:(country.totalDeaths/country.totalConfirmed)*100,
      name:country.countryName

    }))
  }

  if(type === "all"){
    return data.map((country) =>({
    countryName:country.countryName,
      totalDeaths:country.totalDeaths
    }))
  }
  else if(type === "number")
    return data?.map(country => country.deathPercentage)
  else
    return data?.map(country =>country.name)

}

export const sortDeathRate = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.totalDeaths/a.totalConfirmed > b.totalDeaths/b.totalConfirmed ? -1 : 1));
};



