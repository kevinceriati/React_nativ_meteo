export const app = {
    state: {
        name:'',
    },
    reducers: {
        setName(state, name){
         return {...state, name};
        },
    },
    effects: dispatch => ({
        async loadName(payload, rootState) {
            const name = await Api.getName();
            dispatch.setName(name);
        }
    })
}