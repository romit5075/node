import mongoose from "mongoose";
// database connected
const connectDB = async () => {
    mongoose.set('strictQuery', false);//mongo error ave chhe atle
    const res = await mongoose.connect("mongodb+srv://manav:manav213@cluster0.ujqfjxj.mongodb.net/?retryWrites=true&w=majority");

    if (res) {
        console.log("Connected Successfully");
    };
};

export default connectDB;
