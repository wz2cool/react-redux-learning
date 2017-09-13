import * as express from "express";
import * as path from "path";

const port = process.env.PORT || 8080;
const app: express.Express = express();

const isDevelopment = process.argv.indexOf("--development") !== -1;

if (isDevelopment) {
    const webpack = require("webpack");
    const webpackConfig = require("../webpack.config");

    const compiler = webpack(webpackConfig);
    const webpackDevMiddleware = require("webpack-dev-middleware");

    app.get("*", (req: express.Request, res: express.Response, next: express.NextFunction) => {
        // 如果不是静态文件则跳转到根目录"/"，webpackDevMiddleware只解析根目录
        const regExp = /^\/[0-9a-zA-Z\/]+$/;
        if (regExp.test(req.originalUrl)) {
            req.url = "/";
        }
        next();
    });

    app.use(webpackDevMiddleware(compiler, {
        hot: true,
        publicPath: webpackConfig.output.publicPath,
        stats: {
            colors: true,
        },
    }));

    app.use(require("webpack-hot-middleware")(compiler));
} else {
    app.use(express.static(path.join(__dirname, "static")));
    app.get("*", (req: express.Request, res: express.Response) => {
        const htmlPath = path.join(__dirname, "static", "index.html");
        res.sendFile(htmlPath);
    });
}

app.listen(port);
console.log(`server started on port: ${port}`);
