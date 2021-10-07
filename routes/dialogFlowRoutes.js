const { response } = require('express');
const chatbot = require('../chatbot/chatbot');

module.exports = app => {

    // app.get('/', (req, res) => {
    //     res.send({'hello': 'Johnny'})
    // });

    app.post('/api/df_text_query', async (req, res) => {
        //let responses = await chatbot.textQuery(req.body.text, req.body.parameters);
        let responses = await chatbot.textQuery(req.body.text, req.body.userID, req.body.parameters);
        res.send(responses[0].queryResult);
            //res.send(responses[0].queryResult);
    });

    app.post('/api/df_event_query', async (req, res) => {
        //let responses = await chatbot.eventQuery(req.body.event, req.body.parameters);
        let responses = await chatbot.eventQuery(req.body.event, req.body.userID, req.body.parameters);
        res.send(responses[0].queryResult);
    });

    //api/df_tracking_query async 

    app.get('/api/trackingNumber', async (req, res) => {
        res.send({'hello': 'Misyah'})
    })
} 