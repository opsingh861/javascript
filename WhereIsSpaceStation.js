const lat = document.getElementById("lat")
const lon = document.getElementById("lon")
const alt = document.getElementById("alt")
const vel = document.getElementById("vel")

const getSpaceStationData = async () => {
    try {
        const response = await fetch("https://api.wheretheiss.at/v1/satellites/25544")
        // console.log(response)
        const { latitude, longitude, velocity, altitude } = await response.json();
        // console.log(latitude)
        // console.log(longitude)
        // console.log(altitude)
        // console.log(velocity)
        lat.innerHTML = latitude.toFixed(5);
        lon.innerHTML = longitude.toFixed(5);
        alt.innerHTML = altitude.toFixed(0);
        vel.innerHTML = velocity.toFixed(0);


    } catch (error) {
        console.log(error)
    }
}

const interval = setInterval(getSpaceStationData, 1000)