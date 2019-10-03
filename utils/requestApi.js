const baseUrl = "http://api.openweathermap.org/data/2.5/";
const apiKey = "af8985493c7d88735f47cb5ff1e26cb2";

export function requestGet(endPoint, query="") {
    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
    };

    endPoint = `${endPoint}?${query}&APPID=${apiKey}&units=metric`;
    console.log(baseUrl+endPoint);

    return fetch(baseUrl + endPoint, {
        method:"GET",
        headers,
    }).then(response =>{
        if (response.status === 200) {
            return response
                .json()
                .then(json => {
                    return json !== undefined ? json : {};
                })
                .catch(e =>({}));
        }

        return response.status;
    })
}