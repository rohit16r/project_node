import User from '../models/UserControllers.js'

const register =async (req,res) => {
    try {
        const reg = new User({
            name: req.body.name,
            age: req.body.age,
            dob: req.body.dob,
            gender: req.body.gender,
            branch: req.body.branch,
            image: req.files?.image?.[0]?.filename,
            marksheet: req.files?.marksheet?.[0]?.filename,
            video: req.files?.video?.[0]?.filename

        })
        await reg.save()
        res.render("success.ejs")

    } catch(error){
        console.log("error ",error)
    }

}
export default register