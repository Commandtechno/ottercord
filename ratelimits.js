const { modifyGuildSticker } = require(".");

function RatelimitProvider() {
    this.routes = [],
    this.getLastRequestTime = function(route) {
        if (this.routes[route] !== undefined) {
            return this.routes[route]['lastRequestTime'] ? this.routes[route]['lastRequestTime'] : null;
        }
    }
    this.setLastRequestTime = function(route, time) {
        if (this.routes[route] == undefined) {
            this.routes[route] = {};
        }
        this.routes[route]['lastRequestTime'] = time;
    }
    this.getRequestAllowance = function(route) {
        if (this.routes[route] == undefined) {
            console.log("case1");
            return 0;
        }

        if (this.routes[route]['reset'] == undefined) {
            console.log("case2");
            return 0;
        }

        console.log("case3");

        console.log("case4", this.routes[route]['reset'] - Date.now());

        return this.routes[route]['reset'] - Date.now();
    }
    this.setRequestAllowance = function(route, remaining, reset) {
        console.log("!!!!", remaining, reset);
        if (remaining === undefined || reset === undefined) {
            return;
        }

        this.routes[route]['reset'] = reset;
    }
}

function RateLimiter() {
    this.provider = new RatelimitProvider();
    this.invoke = function(route) {
        console.log(route, this.getDelay(route));
        console.log("EVEN MORE IMPORTANT", this.getDelay(route));
        while (this.getDelay(route) > 0) {
            this.delay(this.getDelay(route));
        }

        this.provider.setLastRequestTime(route, Date.now());
    }
    this.getDelay = function(route) {
        console.log(this.provider.getRequestAllowance(route))
        console.log(Date.now())
        console.log(this.provider.getLastRequestTime(route))
        return Math.max(0, this.provider.getRequestAllowance(route) - (Date.now() - this.provider.getLastRequestTime(route)));
    }
    this.delay = function(mstime) {
        console.log("delay for", mstime);
        return new Promise(resolve => setTimeout(resolve, mstime));
    }
    this.setAllowance = function(route, remaining, reset) {
        this.provider.setRequestAllowance(route, remaining, reset);
    }
}

module.exports = {RatelimitProvider, RateLimiter};