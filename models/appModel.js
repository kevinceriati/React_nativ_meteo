import {requestGet} from "../utils/requestApi";

export const app = {
    state: {
        name: '',
        nameCity: [],
        informations: {},
    },
    reducers: {
        setName(state, name) {
            return {...state, name};
        },
        setNameCity(state, nameCity) {
            return {...state, nameCity};
        },
        setInformations(state, informations) {

            return {...state, informations};
        },
    },
    effects: (dispatch) => ({

        /*
         * Function used to get meteo data from dynamique geolocalisation
         */
        async getMeteoInformations(location) {
            if (location) {
                const {coords: {latitude, longitude}} = location;
                const lat = Math.floor(latitude);
                const lon = Math.floor(longitude);

                console.log(location);

                const response = await requestGet('weather', `lat=${lat}&lon=${lon}`);
                if (response) {
                    this.setInformations(response);
                }
            }
        },

        /*
         * Function used to get meteo from hard city enter in addCityScreen input
         */
        async getMeteoInformationsCity(nameCity) {
            const response = await requestGet('weather', `q=${nameCity}`);
            if (response) {
                this.setInformations(response);
            }
        }
    })
};