// import  loginUser from '../models/loginModel';
import SignupUser from '../models/signupmodel.js';
  
const userLogincontroller=async(req,res)=>{
   
    try{
          const{email,password,}=req.body;
           const user=await  SignupUser.findOne({email}) 
           if(!user){
            return res.status(400).send("User not find");

           }
        
           if (user.password===password) {
            return res.send(`
                <script>
                    alert("✅ Login successful!");
                    window.location.href = "/";
                </script>
            `);
          
        }
        else{
            return res.send(`
                <script>
                    alert("password incorrect");
                    window.location.href = "/login";
                   

                </script>
            `);
            }    

    }
    catch(error){
        console.log("error",error)
        res.status(500).send("Internal server error")

    }

}
export default userLogincontroller;