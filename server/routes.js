const router= require('express').Router();
const sendMessage=require('./controllers/sendMessage');
const fetchUser=require('./controllers/fetchUser');


router.post('/chat',sendMessage)
router.post('/user',fetchUser)

module.exports=router;