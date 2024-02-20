const loginModel=require("./../model/loginModel")
exports.loginHandle=async(req,res)=>{
    const data=req.body
    const existingData = await loginModel.find({ sub: data.sub });
if (existingData.length > 0) {
    // User already exists in the database
    return res.status(200).json({ message: "User already logged in" });
} else {
    // User doesn't exist, create a new document
    await loginModel.create({
        email: data.email,
        given_name: data.given_name,
        name: data.name,
        picture: data.picture,
        sub: data.sub,
    });
    // User Login successfully
    return res.status(201).json({ message: "User Login successfully" });
}

}