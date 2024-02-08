

let p= fetch("http://api.weatherapi.com/v1/forecast.json?key=b60cf792470a4829b09172137241101&q=india&days=10&aqi=yes&alerts=yes")
,{}
p.then((value1) =>{
    return value1.json()
}).then((data)=>{
  
  console.log(data);

})