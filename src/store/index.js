import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        train:{
            xx:12
        },
        trainInfo:[
            {outTime:"16:18",outSite:"成都东站",trainCode:"D2206",rideTime:"05小时54分",arriveTime:"22:12",arriveSite:"北京南"},

        ],
    }
    ,
    mutations: {}
    ,
    actions: {}
    ,
    modules: {}
});
