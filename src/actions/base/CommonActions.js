export default class CommonActions {

    constructor(entity, api) {
        this.setEntity(entity);
        this.setApi(api);
    }

    setEntity(entity) {
        this.entity = entity.toUpperCase();
    }

    setApi(api) {
        this.api = api;
    }

    getEntity() {
        return this.entity;
    }

    getApi() {
        return this.api;
    }

    post(payload) {
        return dispatch => {
            dispatch(
                {
                    type: `TRY_POST_${this.getEntity()}_ITEMS`,
                }
            );
            return this.getApi()
                .post(payload)
                .then(data => {
                    dispatch({
                        type: `POST_${this.getEntity()}_ITEMS_SUCCEEDED`,
                        data
                    });
                })
                .catch(error => {
                    dispatch({
                        type: `POST_${this.getEntity()}_ITEMS_FAILED`,
                        error,
                    });
                })
        }
    }

}