'use strict';

import express from 'express';

import cases from '../../api/v1.0/cases/routes/cases.route';
import helpline from '../../api/v1.0/helpline/routes/helpline.route';
import news from '../../api/v1.0/news/routes/news.route';
import notifications from '../../api/v1.0/notifications/routes/notifications.route';
import reports from '../../api/v1.0/reports/routes/reports.route';
import testCentres from '../../api/v1.0/test-centres/routes/test-centres.route';
import countries from '../../api/v1.0/countries/routes/countries.route';
import states from '../../api/v1.0/states/routes/states.route';
import cities from '../../api/v1.0/cities/routes/cities.route';

let app = express();

app.use("/cases", cases);
app.use("/helpline", helpline);
app.use("/news", news);
app.use("/notifications", notifications);
app.use("/reports", reports);
app.use("/test-centres", testCentres);
app.use("/countries", countries);
app.use("/states", states);
app.use("/cities", cities);

export default app;
