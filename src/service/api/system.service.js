import ApiService from '../api.service.js'

export const SystemService = {
    /* 菜单管理 */
    menu_query(slug) {
        return ApiService.get(`system/${slug}/favorite`);
    },
    menu_add(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    menu_update(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    menu_delete(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    /* 角色管理 */
    role_query(slug) {
        return ApiService.get(`system/${slug}/favorite`);
    },
    role_add(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    role_update(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    role_delete(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    /* 配置管理
    *  country - 区号
    *  cycle   - 周期
    *  system  - 系统配置
    *  helper  - 帮助中心
    */
    //区号管理
    country_query(slug) {
        return ApiService.get(`system/${slug}/favorite`);
    },
    country_add(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    country_update(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    country_delete(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    //周期管理
    cycle_query(slug) {
        return ApiService.get(`system/${slug}/favorite`);
    },
    cycle_add(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    cycle_update(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    cycle_delete(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    //系统配置
    system_query(slug) {
        return ApiService.get(`system/${slug}/favorite`);
    },
    //帮助中心
    helper_query(slug) {
        return ApiService.get(`system/${slug}/favorite`);
    },
    helper_add(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    helper_update(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    },
    helper_delete(data) {
        return ApiService.post(`system/${slug}/favorite`, data);
    }
};