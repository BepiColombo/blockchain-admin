var _ = require('lodash');
export default {
    /**
    * 是否为移动设备
    */
    isMobileUserAgent: () => {
        return (/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase()));
    },
    /**
    * 是否为微信浏览器
    */
    isWeiXin: () => {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    },
    /**
     * 数组keyby
     * @param {*} arr 
     * @param {*} key 
    */
    keyBy: (arr, key) => {
        return arr.reduce((p, v) => {
            p[v[key]] = v;
            return p;
        }, {})
    },
    /**
     * 深克隆
     * @param {*} data 
     * 别改成箭头函数！
     */
    deepClone: function (data) {
        return _.cloneDeep(data)
    },
    /**
     * 数据显示千分位例如120,000,000
     * @param {*} num 
     */
    toThousands: (num) => {
        var num = (num || 0).toString(), result = '';
        while (num.length > 3) {
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        if (num) { result = num + result; }
        return result;
    },
    validate: {
        email: function (val) {
            return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(val);
        },
        phone: function (val) {
            return /^1[34578]\d{9}$/.test(val);
        },
        idCard: function (val) {
            return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(val)
        },
        //正数
        posNum: function (val) {
            return /^\d*\.?\d+$/.test(val)
        },
        //负数
        negNum: function (val) {
            return /^-\d*\.?\d+$/.test(val)
        },
        //数字包含整数和浮点数
        num: function (val) {
            return /^-?\d*\.?\d+$/.test(val)
        },
        //正整数
        posInt: function (val) {
            return /^\d+$/.test(val)
        },
        //负整数
        negInt: function (val) {
            return /^-\d+$/.test(val)
        },
        //整数
        int: function (val) {
            return /^-?\d+$/.test(val)
        }
    }
}

