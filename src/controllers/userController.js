const createUser =(req, res)=>{
    console.log(req.body);
}


const getUser = ("/", (req, res)=>{
    return res.status(200).json("Hello API world")
});

module.exports ={createUser, getUser}