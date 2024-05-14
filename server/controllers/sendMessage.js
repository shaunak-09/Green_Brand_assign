const OpenAI = require('openai');
require('dotenv').config();

const User=require('../models/User');

console.log(process.env.API_KEY);

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.API_KEY,
    // dangerouslyAllowBrowser: true,
  })

const sendMessage=async (req,res)=>{
    try{

    const query=await User.find({username:req.body.author});
    const user=query[0];
    console.log(user);
    if(!user)
    {
        res.status(404).json({message:"User not found"});
    }
    user.message.push({author:user.username,message:req.body.message});

  const completion = await openai.chat.completions.create({
    model: "gryphe/mythomist-7b:free",
    messages: [
      { role: req.body.author, content: req.body.message }
    ],
  })
  console.log(completion.choices[0].message)
  user.message.push({author:completion.choices[0].message.role,message:completion.choices[0].message.content});
  user.save();
  res.json({"messages":user.message}).status(200);
}
catch(err){
    console.log(err);
    res.status(500).json({error:err});
}
}

module.exports=sendMessage;