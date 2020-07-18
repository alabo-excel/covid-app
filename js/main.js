var demo = '<h2>COUNTRIES UPDATE</h2>'


fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("heading").innerHTML = "Global Updates ";
        document.getElementById("output1").innerHTML =
          "New Confirmed " + data.Global.NewConfirmed;
        document.getElementById("output2").innerHTML =
          "Total Confirmed " + data.Global.TotalConfirmed;
        document.getElementById("output3").innerHTML =
          "New Deaths " + data.Global.NewDeaths;
        document.getElementById("output4").innerHTML =
          "Total Deaths " + data.Global.TotalDeaths;
        document.getElementById("output5").innerHTML =
          "New Recovered " + data.Global.NewRecovered;
        document.getElementById("output6").innerHTML =
          "Total Recovered " + data.Global.TotalRecovered;
      });

    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((data) => {
        var total = data.Countries;
        total.forEach(function (item){
          demo +=`
          <div>
          <h3>Country: ${item.Country}</h3>
          <p>NewConfirmed ${item.NewConfirmed}</p>
          <p>NewDeaths ${item.NewDeaths}</p>
          <p>NewRecovered ${item.NewRecovered}</p>

          <p>TotalConfirmed ${item.TotalConfirmed}</p>
          <p>TotalDeaths ${item.TotalDeaths}</p>
          <p>TotalRecovered ${item.TotalRecovered}</p>
          </div>
          `;
          let btn = document.getElementById('btn');
          let input = document.getElementById('input');

          btn.addEventListener('click', () =>{
            if(input.value === item.Country){
                var i = item;
                var span = document.createElement('span');
                span.innerHTML = `Country ${item.Country}<br>
                New Confirmed ${item.NewConfirmed}<br>
                New Deaths ${item.NewDeaths}<br>
                New Recovered ${item.NewRecovered}<br>

                Total Confirmed ${item.TotalConfirmed}<br>
                Total Deaths ${item.TotalDeaths}<br>
                Total Recovered ${item.TotalRecovered}    <br>            
                `;

                var select = document.getElementById('select');
                select.append(span)

                

            }else{

            }
        })
        });
        document.getElementById('demo').innerHTML = demo;
        });
