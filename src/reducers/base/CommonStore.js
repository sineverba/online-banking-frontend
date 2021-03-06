import { TOTAL_ELEMENTS } from "../../utils/constants/constant";

export default class CommonStore {

    create(entity) {

        const ucEntity = entity.toUpperCase();

        // INDEX ITEMS
        const TRY_INDEX_ITEMS = `TRY_INDEX_${ucEntity}_ITEMS`;
        const INDEX_ITEMS_SUCCEEDED = `INDEX_${ucEntity}_ITEMS_SUCCEEDED`;
        const INDEX_ITEMS_FAILED = `INDEX_${ucEntity}_ITEMS_FAILED`;

        // POST ITEMS
        const TRY_POST_ITEMS = `TRY_POST_${ucEntity}_ITEMS`;
        const POST_ITEMS_SUCCEEDED = `POST_${ucEntity}_ITEMS_SUCCEEDED`;
        const POST_ITEMS_FAILED = `POST_${ucEntity}_ITEMS_FAILED`;

        const isLoading = (state = false, { type } = {}) => {
            if (type === TRY_INDEX_ITEMS || type === TRY_POST_ITEMS) {
                return true;
            }
            if ( 
                (type === INDEX_ITEMS_SUCCEEDED || type === POST_ITEMS_SUCCEEDED)
                ||
                (type === INDEX_ITEMS_FAILED || type === POST_ITEMS_FAILED)
                ){
                return false;
            }
            return state;
        };

        const items = (state = [], { type, data } = {}) => {
            if (type === INDEX_ITEMS_SUCCEEDED) {
                /**
                 * Check if we have a structure like
                 * {
                 *  content: [...],
                 *  last: ...
                 *  first: ...
                 * }
                 */
                if ('content' in data) {
                    const {content} = data;
                    return content;
                }
                return data;
            }
            return state;
        }

        const total = (state = null, {type, data} = {}) => {
            if (type === INDEX_ITEMS_SUCCEEDED) {
                if(data.hasOwnProperty(TOTAL_ELEMENTS)) {
                    return data[TOTAL_ELEMENTS];
                }
            }
            return state;
        }

        return {
            isLoading,
            items,
            total,
        }
    }
}
