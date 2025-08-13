import mongoose from 'mongoose';

const connecToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Mongo DB connected');
    }
    catch (error) {
        console.log("Somehting Happened! :", error.message);
        process.exit(1);
    }
}

export default connecToDb;

