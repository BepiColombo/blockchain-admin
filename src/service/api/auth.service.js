import ApiService from '../api.service.js'

export const AuthService = {
    login(slug) {
        return ApiService.get(`system/${slug}/favorite`);
    }
}