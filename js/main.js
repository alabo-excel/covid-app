// // document.getElementsById("submit").addEventListener('click', addCountries);
// let countryMan = document.getElementsById('country').value;


// fetch("https://api.covid19api.com/summary")
//   .then((response) => response.json())
//   .then((data) => {
//     document.getElementById("output1").innerHTML =
//       "New Confirmed" + data.Global.NewConfirmed;
//     document.getElementById("output2").innerHTML =
//       "Total Confirmed" + data.Global.TotalConfirmed;
//     document.getElementById("output3").innerHTML =
//       "New Deaths" + data.Global.NewDeaths;
//     document.getElementById("output4").innerHTML =
//       "Total Deaths" + data.Global.TotalDeaths;
//     document.getElementById("output5").innerHTML =
//       "New Recovered" + data.Global.NewRecovered;
//     document.getElementById("output6").innerHTML =
//       "Total Recovered" + data.Global.TotalRecovered;
//   });

  
// function addCountries(){
//   fetch('https://api.covid19api.com/total/country/+"country"')
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       console.log(this.country);

//     });

// }