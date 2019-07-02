export default [
    {
        path: "/",
        component: () => import("@/views/index"),
        redirect: "/home",
        children: [
            {
                path: "home",
                name: "home",
                component: () => import("@/views/home"),
                meta: { title: "首页" }
            },
            {
                path: "/system",
                name: "system",
                component: () => import("@/views/system/index"),
                redirect: '/system/menu',
                meta: { title: "系统管理", affix: false },
                children: [
                    {
                        path: "menu",
                        name: "system_menu",
                        component: () => import("@/views/system/menu/list"),
                        meta: { title: "菜单管理" }
                    },
                    {
                        path: "menu_add",
                        name: "system_menu_add",
                        component: () => import("@/views/system/menu/add"),
                        meta: { title: "添加菜单" }
                    },
                    {
                        path: "role",
                        name: "system_role",
                        component: () => import("@/views/system/role/list"),
                        meta: { title: "角色管理" }
                    },
                    {
                        path: "role_add",
                        name: "system_role_add",
                        component: () => import("@/views/system/role/add"),
                        meta: { title: "添加角色" }
                    },
                    {
                        path: "setting",
                        name: "system_setting",
                        component: () => import("@/views/system/setting/index"),
                        redirect: "/system/setting/config",
                        children: [
                            {
                                path: "config",
                                name: "system_setting_config",
                                component: () => import("@/views/system/setting/config/config"),
                                meta: { title: "系统配置" }
                            },
                            {
                                path: "country",
                                name: "system_setting_country",
                                component: () =>
                                    import("@/views/system/setting/country/country"),
                                meta: { title: "区号管理" }
                            },
                            {
                                path: "country_add",
                                name: "system_setting_country_add",
                                component: () => import("@/views/system/setting/country/add"),
                                meta: { title: "添加区号" }
                            },
                            {
                                path: "cycle",
                                name: "system_setting_cycle",
                                component: () => import("@/views/system/setting/cycle/cycle"),
                                meta: { title: "周期管理" }
                            },
                            {
                                path: "cycle_add",
                                name: "system_setting_cycle_add",
                                component: () => import("@/views/system/setting/cycle/add"),
                                meta: { title: "添加周期" }
                            },
                            {
                                path: "helper",
                                component: () => import("@/views/system/setting/helper/helper"),
                                name: "system_setting_helper",
                                meta: { title: "帮助中心" }
                            }
                        ],
                        meta: { title: "配置管理" }
                    }
                ]
            },

            {
                path: "/transaction",
                name: "transaction",
                component: () => import("@/views/transaction/index"),
                redirect: '/transaction/turnover',
                meta: { title: "交易管理", affix: false },
                children: [
                    {
                        path: "turnover",
                        name: "turnover",
                        component: () => import("@/views/transaction/turnover/list"),
                        meta: { title: "交易流水" }
                    },
                    {
                        path: "exchange_record",
                        name: "exchange_record",
                        component: () => import("@/views/transaction/exchange/list"),
                        meta: { title: "兑换记录" }
                    }
                ]
            },
            {
                path: "/information",
                name: "information",
                component: () => import("@/views/information/index"),
                redirect: '/information/news',
                meta: { title: "站内消息", affix: false },
                children: [
                    {
                        path: "news",
                        name: "news",
                        component: () => import("@/views/information/news"),
                        meta: { title: "资讯" }
                    },
                    {
                        path: "news_add",
                        name: "news_add",
                        component: () => import("@/views/information/news/add"),
                        meta: { title: "添加资讯" }
                    },
                    {
                        path: "news_modify",
                        name: "news_modify",
                        component: () => import("@/views/information/news/modify"),
                        meta: { title: "编辑资讯" }
                    },
                    {
                        path: "system_msg",
                        name: "system_msg",
                        component: () => import("@/views/information/system_msg"),
                        meta: { title: "系统消息" }
                    },
                    {
                        path: "system_msg_add",
                        name: "system_msg_add",
                        component: () => import("@/views/information/system_msg/add"),
                        meta: { title: "添加系统消息" }
                    },
                    {
                        path: "system_msg_modify",
                        name: "system_msg_modify",
                        component: () => import("@/views/information/system_msg/modify"),
                        meta: { title: "编辑系统消息" }
                    },
                    {
                        path: "transaction_notice",
                        name: "transaction_notice",
                        component: () => import("@/views/information/transaction_notice"),
                        meta: { title: "转账通知" }
                    }
                ]
            },
            {
                path: "/member",
                name: "member",
                component: () => import("@/views/member/index"),
                redirect: '/member/list',
                meta: { title: "会员管理", affix: false },
                children: [
                    {
                        path: "list",
                        name: "member_list",
                        component: () => import("@/views/member/memberList"),
                        meta: { title: "会员列表" }
                    },
                    {
                        path: "wallet_list",
                        name: "wallet_list",
                        component: () => import("@/views/member/walletList"),
                        meta: { title: "钱包列表" }
                    }
                ]
            },
            {
                path: "/intelligent_dog",
                name: "intelligent_dog",
                component: () => import("@/views/intelligent_dog"),
                meta: { title: "智能狗管理", affix: false }
            },
            {
                path: "/investment",
                name: "investment",
                component: () => import("@/views/investment"),
                meta: { title: "币融", affix: false }
            },
            {
                path: "/coin",
                name: "coin",
                component: () => import("@/views/coin"),
                meta: { title: "币种管理", affix: false }
            }
            // {
            //     path: "/system_menu",
            //     name: "system_menu",
            //     component: () => import("@/views/system/menu")
            // },
        ]
    },
    {
        name: "login",
        path: "/login",
        component: () => import("@/layout/login")
    },
    {
        name: "401",
        path: "/401",
        component: () => import("@/views/error/401")
    }
];
