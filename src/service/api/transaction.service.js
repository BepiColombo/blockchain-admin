import ApiService from '../api.service.js'

export const TransactionService = {
    //交易流水
    transaction_turnover_query(slug) {
        return ApiService.get(`system/${slug}/favorite`);
    },
    //兑换记录
    transaction_exchange_query() {
        return ApiService.get(`system/${slug}/favorite`);
    }
}