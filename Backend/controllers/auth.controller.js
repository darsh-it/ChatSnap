import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from '../utils/generateToken.js'

export const signup = async (req,res) => {
    
    try{
          const {fullName,username,password,confirmPassword,gender} = req.body;

           if(password !== confirmPassword){
             return res.status(400).json({error : "Password is not matching"})
           }
            
           const user = await User.findOne({username});

           if(user) {
            return res.status(400).json({error : "User already exist"})
           }

           //hash password here
           const salt = await bcrypt.genSalt(10);
           const hashedPassword = await bcrypt.hash(password,salt);

           const boyProfilePic = 'https://avatar.iran.liara.run/public/boy?username=[value]'
           const girlProfilePic = 'https://avatar.iran.liara.run/public/girl?username=[value]'

           const newUser = new User ({
             fullName,
             username,
             password:hashedPassword,
             gender,
             profilePic : gender === "Male" ? boyProfilePic : girlProfilePic
           })

           if(newUser){
            //JWT token
            generateTokenAndSetCookie(newUser._id,res);
           await newUser.save()

           res.status(201).json({
              _id : newUser._id,
              fullName : newUser.fullName,
              username : newUser.username,
              profilePic : newUser.profilePic
           })
        }
        else{
            res.status(400).json({error : "Invalid User Data"})
        }

    } catch(error){
        console.log("error in signup controller",error.message);
         res.status(500).json({error : "Internal Server Error..."})
    }
}
 
export const  login = async (req,res) => {
     try{
           const { username, password } = req.body;
           const user = await User.findOne({ username });
           const isPasswordCorrect = await bcrypt.compare(password,user?.password || "");

           if(!user) {
            return res.status(400).json({error : "invalid username "});
           }

           if(!isPasswordCorrect){
            return res.status(400).json({error : "invalid  password"});
           }

           generateTokenAndSetCookie(user._id,res);

           res.status(200).json({
            _id : user._id,
            fullName : user.fullName,
            username : user.username,
            profilePic : user.profilePic
         })

     }catch(error){
        console.log("error in login controller",error.message);
        res.status(500).json({error : "Internal Server Error..."})
     }
}

export const logout =  (req,res) => {
      try{
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"logged out successfully "})

      }catch(error){
        console.log("error in logout controller",error.message);
        res.status(500).json({error : "Internal Server Error..."})
      }
}



