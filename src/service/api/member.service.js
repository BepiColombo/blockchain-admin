import ApiService from '../api.service.js'

export const MemberService = {
    //会员管理
    member_query(slug) {
        return ApiService.get(`system/${slug}/favorite`);
    },
    member_add(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    member_update(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    //钱包管理
    wallet_query() {
        return ApiService.get(`system/${slug}/favorite`);
    },
    wallet_update() {
        return ApiService.post(`system/${slug}/favorite`, data);
    }
}