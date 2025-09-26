
const ImageUpload = (props) => {

  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    if (file){
      props.UploadImageHandler(file);
    }
  }

  return (
    <div className="w-full flex justify-center items-center">
    <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 w-full max-w-2xl">
        <label htmlFor="fileInput" className="block w-full cursor-pointer border-2 border-dashed border-zinc-500 rounded-lg p-6 sm:p-8 text-center hover:border-blue-500 transition-all">
            <input type="file" id="fileInput" className="hidden" onChange={ShowImageHandler}/>
            <span className="text-base sm:text-lg font-medium text-zinc-700">
                Click to upload your image!
            </span>
        </label>
    </div>
    </div>
  )
}

export default ImageUpload
