import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ['jpg', 'png', 'mp4', 'mov', 'pdf'],
  params: async (req, file) => {
    let resourceType = 'auto'; // auto-detect image, video, pdf
    const folder = req.originalUrl.includes('/hackathons') ? 'hackathons_media' : 'issues_media';
    return {
      folder,
      resource_type: resourceType,
      format: file.mimetype.split('/')[1], // get file extension
      public_id: `${Date.now()}-${file.originalname.split('.')[0]}`,
    };
  },
});

export { cloudinary, storage };
