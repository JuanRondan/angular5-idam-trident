import * as express from 'express';
import *  as path from 'path';

const app: express.Express = express();
const env: string = process.env.NODE_ENV || "localhost";
const PORT = process.env.PORT || 55000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname + '/dist'));

app.get('/*', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log("Running on " + env);
});