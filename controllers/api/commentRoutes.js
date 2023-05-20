const router = require('express').Router();
const { Post, User } = require('../../models');

router.post ("/", async (req, res)=> {
    if (!req.session.logged_in){

    }
})