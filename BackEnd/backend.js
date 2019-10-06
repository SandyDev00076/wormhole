const express = require('express');
const app = express();

// Middlewares
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const resGenerator = require('./config/resGenerator');

// Mongo DB Atlas
const mongoose = require('mongoose');
const mongoKey = require('./config/mongoDB').CONNECTION_STRING;
mongoose.connect(mongoKey, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.error(err);
    console.log('Connected to MongoDB successfully');
});

// port to connect
const PORT = 4500;

// Schemas
const Session = require('./schemas/session');

// routes

// creating a new session
app.post('/session', (req, res) => {
    let newSession = new Session({...req.body, packets: [], count: 1});
    newSession.save((err) => {
        if (err) res.status(401).send(resGenerator('Cannot create a new session', 'error'));
        else res.send(resGenerator('Session has been succesfully created', 'success'));
    });
});

// connect to session
app.get('/session/:code/connect', (req, res) => {
    Session.findOneAndUpdate({ code: req.params.code }, { $inc: { count: 1 } }, (err, session) => {
        if (err) res.status(404).send(resGenerator(`Cannot find a session with code ${req.params.code}`, 'error'));
        else res.send(session.count);
    });
});

// get packets of session
app.get('/session/:code', (req, res) => {
    Session.findOne({ code: req.params.code }, (err, session) => {
        if (err) res.status(401).send(resGenerator(`Problem reading packets for session ${req.params.code}`, 'error'));
        else res.send(session.packets);
    });
});

// disconnect from a session
app.get('/session/:code/disconnect', (req, res) => {
    Session.findOneAndUpdate({ code: req.params.code }, { $inc: { count: -1 } }, (err, session) => {
        if (err) res.status(404).send(resGenerator(`Cannot find a session with code ${req.params.code}`, 'error'));
        else {
            if (session.count === 0) {
                // remove the session
                Session.findOneAndDelete({ code: req.params.code }, (err, session) => {
                    if (err) res.status(401).send(resGenerator(`Cannot delete session with code ${req.params.code}`, 'error'));
                    else res.send(resGenerator(`Deleted the session ${req.params.code} successfully`, 'success'));
                });
            }
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});