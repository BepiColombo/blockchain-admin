
/**
 * 币种
 * @param {*} value 
 */
export const coin_types_filter = (value) => {
    switch (value) {
        case 0:
            return "BTC"
            break;
        case 1:
            return "ETH"
            break;
        case 2:
            return "EOS"
            break;
        case 3:
            return "XRP"
            break;
        case 4:
            return "LTC"
            break;
    }
};

export const member_status_filter = (value) => {
    switch (value) {
        case 0:
            return "acitve"
            break;
        case 1:
            return "inactive"
            break;
        case 2:
            return "vip"
            break;
    }
}