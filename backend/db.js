const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://kunalnakum045:xyz@cluster0.uwnyqei.mongodb.net/grocerymern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB!");

        const productCollection = mongoose.connection.db.collection("product");
        const productData = await productCollection.find({}).toArray();

        const productCategoryCollection = mongoose.connection.db.collection("product1");
        const productCategoryData = await productCategoryCollection.find({}).toArray();

        global.products = productData;
        global.productsCategory = productCategoryData;

        console.log("Data fetched successfully:", global.products.length, "products and", global.productsCategory.length, "categories");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = mongoDB;
