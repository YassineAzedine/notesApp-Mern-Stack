const express = require('express');
const {getAllNotes , addNote} = require('../controllers/node.controller');
const noteRoutes = express.Router();
noteRoutes.get('/notes',getAllNotes);
noteRoutes.post('/add',addNote);


module.exports = {
    noteRoutes

}