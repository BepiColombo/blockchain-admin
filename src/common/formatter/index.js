import Vue from "vue"
/**
 * 币种
 * @param {*} value 
 */
export const coin_types_formatter = (row, colom, cellvalue) => {
    switch (cellvalue) {
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

/**
 * 会员状态
 * @param {*} value 
 */
export const member_status_formatter = (row, colom, cellvalue) => {
    switch (cellvalue) {
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

/**
 * 币种状态
 * @param {*} row 
 */
export const coin_status_formatter = (row, colom, cellvalue) => {
    switch (cellvalue) {
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

/**
 * 转账类型
 * @param {*} row 
 */
export const transaction_types_formatter = (row, colom, cellvalue) => {
    switch (cellvalue) {
        case 0:
            return "转账类型1"
            break;
        case 1:
            return "转账类型2"
            break;
        case 2:
            return "转账类型3"
            break;
    }
}

/**
 * 转账状态
 * @param {*} row 
 */
export const transaction_status_formatter = (row, colom, cellvalue) => {
    switch (cellvalue) {
        case 0:
            return "未到账"
            break;
        case 1:
            return "已到账"
            break;
        case 2:
            return "失败"
            break;
    }
}


Vue.prototype._formatter = {
    coin_types_formatter,
    member_status_formatter,
    coin_status_formatter,
    transaction_types_formatter,
    transaction_status_formatter
}