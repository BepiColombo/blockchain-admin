// import ApiService from "../api.service.js";
import jwtService from "../jwt.service"
export default {
    login(data) {
        // return ApiService.get(`system/${slug}/favorite`);
        jwtService.saveToken(data.account)
    }
};
