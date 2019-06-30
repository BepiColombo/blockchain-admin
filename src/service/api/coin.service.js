import ApiService from '../api.service.js'

export const CoinsService = {
    //币种管理
    coins_query(slug) {
        return ApiService.get(`system/${slug}/favorite`);
    },
    coins_add(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    coins_update(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    coins_delete(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },

}