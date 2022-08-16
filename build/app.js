"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jobRoutes_1 = __importDefault(require("./routes/jobRoutes"));
const jobsController_1 = require("./controllers/jobsController");
const models_1 = require("./models");
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Setting our view engine as Handlebars
app.set('view engine', 'hbs');
app.set('views', path_1.default.join(__dirname, "../src/views"));
app.set('view options', { layout: 'layout' });
app.use(express_1.default.static(path_1.default.join(__dirname, '../src/public')));
// TODO: Add routing middleware here
app.use('/jobs', jobRoutes_1.default);
app.use('/', jobsController_1.defaultJobs);
app.use((req, res, next) => {
    res.status(404).render('error', {
        message: "This is not the URL you are looking for!"
    });
});
// Syncing our database
models_1.db.sync().then(() => {
    console.info("connected to the database!");
});
app.listen(3000);
