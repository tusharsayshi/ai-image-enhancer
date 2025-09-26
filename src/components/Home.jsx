import { useState } from 'react';
import ImagePreview from './ImagePreview';
import ImageUpload from './ImageUpload';
import { enhancedImageAPI } from '../utils/enhancedImageAPI';

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const UploadImageHandler = async(file) => {
      setUploadImage(URL.createObjectURL(file));
      setLoading(true);

      try {
        const enhancedURL = await enhancedImageAPI(file);
        setEnhancedImage(enhancedURL);
        setLoading(false);
        //Code which may produce error                      
      } catch (error) {
        console.log(error);
        alert("Error while enhancing the image. Please try again later!");
        //Code to handle the error
      }

    };

  return (
    <>
      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <div className="w-full flex justify-center items-start px-4 sm:px-6 md:px-8">
      <ImagePreview 
      loading={loading} uploaded={uploadImage} enhanced={enhancedImage?.image} 
      />
      </div>
    </>
  )
}

export default Home
