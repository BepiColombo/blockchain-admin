import ApiService from '../api.service.js'

export const InformationService = {
    //转账通知
    transaction_notice_query(slug) {
        return ApiService.get(`system/${slug}/favorite`);
    },
    member_add(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    member_update(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    //系统消息
    system_msg_query() {
        return ApiService.get(`system/${slug}/favorite`);
    },
    system_msg_add(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    system_msg_update() {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    system_msg_delete() {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    //资讯
    news_query() {
        return ApiService.get(`system/${slug}/favorite`);
    },
    news_add(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    news_update() {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    news_delete() {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
}