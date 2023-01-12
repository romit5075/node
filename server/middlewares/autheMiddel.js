import mongoose from "mongoose";
// database model
const userSchema = mongoose.Schema({
    name:{
        required:true,
        type:String,
        trim: true,
    },
    email:{
        required:true,
        type:String,
        trim: true,
        validate: {
            validator: (value) => {
                const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                return value.match(re);
            },
            message: 'Please Enter a valid email address',
        }
    },

    phone:{
        required:true,
        type:Number,
        // validate: {
        //     validator: (value) => {
        //         const pe = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
        //         return value.match(pe);
        //     },
        //     message: 'Please Enter a valid Mobile Number',
        // }
    },

    password:{
        required:true,
        type:String,
    },
});

// mongo ma database nu name create thai
const User = mongoose.model('User', userSchema );
export default User;