const cloudinary = require("v2");
const fs = require("fs");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRETE,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        else {
            cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto",
            });
        }
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null;
    }
};
