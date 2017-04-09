import * as express from "express";
import * as data from "../model/data";

let api = express.Router();

module.exports = function () {

    /* * * GET CONFIG * * */
    api.get('/config', function (req, res) {
        res.send(data.config);
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
