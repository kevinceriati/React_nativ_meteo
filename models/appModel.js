import {requestGet} from "../utils/requestApi";

export const app = {
    state: {
        name: '',
        informations: {},
    },
    reducers: {
        setName(state, name) {
            return {...state, name};
        },
        setInformations(state, informations) {

            return {...state, informations};
        },
    },
    effects: (dispatch) => ({
        async getMeteoInformations(location) {
            console.log(location);
            if (location) {
                const {coords: {latitude, longitude}} = location;
                const lat = Math.floor(latitude);
                const lon = Math.floor(longitude);

                const response = await requestGet('weather', `lat=${lat}&lon=${lon}`);
                if (response) {
                    this.setInformations(response);
                }
            }
        }
    })
};