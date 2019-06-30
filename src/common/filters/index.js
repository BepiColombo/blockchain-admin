import Vue from "vue"

import DateFilter from "./date.filter";
import ErrorFilter from "./error.filter";
import { member_status_filter, coin_types_filter } from "./common.filter"

Vue.filter("date", DateFilter);
Vue.filter("error", ErrorFilter);
Vue.filter("member_status_filter", member_status_filter);
Vue.filter("coin_types_filter", coin_types_filter);

