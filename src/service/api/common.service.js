import ApiService from '../api.service.js'

export const CommonService = {
    upload(slug) {
        return ApiService.get(`system/${slug}/favorite`);
    }
}