const User = require('../models/User');
const fetchUser = async (req, res) => { 
    try {
        const user = await User.findOne({ username: req.body.name });
        if (!user) {
            res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    }   
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
}
module.exports = fetchUser;