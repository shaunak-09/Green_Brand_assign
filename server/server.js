const express=require('express');
const app=express();
const mongoose=require('mongoose');
const routes=require('./routes');

const cors=require('cors');
require('dotenv').config();
app.use(cors({origin: '*',credentials: true}));
app.use(express.json());
const PORT=process.env.PORT||8080;
console.log(process.env.MONGODB_URI);

app.use('/api',routes);

mongoose.connect(`${process.env.MONGODB_URI}`, 
{ useNewUrlParser: true, 
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})