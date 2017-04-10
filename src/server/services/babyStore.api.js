import * as express from "express";
import * as data from "../model/data";

let json = require('json-update');
let api = express.Router();

module.exports = function () {

    /* * * GET CONFIG * * */
    api.get('/config', function (req, res) {
        res.send(data.config);
    });

    /* * * REORDER * * */
    api.post('/reorder', function (req, res) {
      var toArray = req.body.order.split(',');
      json.update('server/model/data.json', { order: toArray })
      .then(function (data) {
        console.log('Order was changed');
        res.sendStatus(200);
      }).catch(function (err) {
        console.log(err);
        rest.send(err);
      });
    });

    /* * * GET PRODUCTS * * */
    api.get('/products', function (req, res) {
        res.send(data.products);
    });

    /* * * ADD A PRODUCT * * */
    api.get('/add', function (req, res) {
    });

    /* * * EDIT A PRODUCT * * */
    api.get('/edit:id', function (req, res) {
    });

    /* * * REMOVE A PRODUCT * * */
    api.get('/delete:id', function (req, res) {
        // var json = { "element1": "content1", "element2": "content2" };
        // var key = "element1";
        // delete json[key];
        // console.log(json);
        // var temperature = { temperature: { home: 24, work: 20 }};
    });

    return api;
};
