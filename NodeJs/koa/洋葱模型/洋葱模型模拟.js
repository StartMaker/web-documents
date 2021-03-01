// 中间件
const middles = [
    async (ctx, next) => {
        console.log(1);
        await next();
        console.log(2);
    },
    async (ctx, next) => {
        console.log(3);
        await next();
        console.log(4);
    },
    async (ctx, next) => {
        console.log(5);
        await next();
        console.log(6);
    }
];

// 中间件执行
const compose = async (ctx = {}) => {
    let i = -1;
    return dispatch(0);
    function dispatch(index, next) {
        i = index;
        const fn = middles[i];
        if (!fn) {
            return Promise.resolve();
        }
        try {
            return Promise.resolve(fn(ctx, dispatch.bind(null, index + 1)));
        } catch (e) {
            return Promise.reject(e);
        }
    }
}

compose();
