const express=require('express');
const app=express();
const port=4000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send('Hello World');
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

module.exports = app;