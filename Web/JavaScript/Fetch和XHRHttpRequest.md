##### Fetch

    无法自动携带cookie，需要设置 credentials
    原生无法中断请求，无法监控请求进度
    在400、500等错误，不会reject，只有在网络错误的时候抛出错误
    无法设置延时时间

##### XHRHttpRequest
