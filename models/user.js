import { Schema, model, models } from "mongoose";

const UserSchema = Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email must be unique"],
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username must be unique"],
    },
    image: {
        type: String
    }
})

// in normal route, the route is always running.
// the route will only be created and running when it is being called 
// and it will be released when the route is done

// models holds the names which were already defined 
// if the model is not defined, it will be created
// this prevents us from redefining the models  
const User = models.User || model("User", UserSchema)

export default User;