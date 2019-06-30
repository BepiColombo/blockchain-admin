import ApiService from '../api.service.js'
//币融
export const InvestmentService = {
    //币种记录
    investment_query(slug) {
        return ApiService.get(`system/${slug}/favorite`);
    },
}