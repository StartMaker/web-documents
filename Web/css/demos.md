##### 如何实现一个自我旋转的时钟

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <style type="text/css">
            .container {
                width: 200px;
                margin-left: auto;
                margin-right: auto;
                position: relative;
            }
            .hour {
                background-color: red;
                animation: hour 86400s infinite linear;
            }
            .minute {
                background-color: aqua;
                animation: minute 3600s infinite linear;
            }
            .second {
                background-color: #007bff;
                animation: second 60s infinite linear;
            }
            .common {
                transform-origin: bottom;
                position: absolute;
                top: 0;
                bottom: 0;
                width: 3px;
                height: 30px;
            }
            @keyframes hour {
                from {
                    transform: rotateZ(0);
                }
                to {
                    transform: rotateZ(360deg);
                }
            }
            @keyframes minute {
                from {
                    transform: rotateZ(0);
                }
                to {
                    transform: rotateZ(360deg);
                }
            }
            @keyframes second {
                from {
                    transform: rotateZ(0);
                }
                to {
                    transform: rotateZ(360deg);
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="hour common"></div>
            <div class="minute common"></div>
            <div class="second common"></div>
        </div>
    </body>
    </html>