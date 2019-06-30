import ApiService from '../api.service.js'

//智能狗
export const IntelligentDogService = {
    //启动记录
    Intelligent_dog_query(slug) {
        return ApiService.get(`system/${slug}/favorite`);
    },
}