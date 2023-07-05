window.addEventListener("load", ()=> {
  let long;
  let lat;

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://dark-sky.p.rapidapi.com/forecast/e9a97d8095msh6af5c162e116edcp19b65cjsnc05d5f667bdd/${lat},${long}`;
    });
  } else {
    h1.textContent = "Please enable your location for accurate weather readings"
  }
});