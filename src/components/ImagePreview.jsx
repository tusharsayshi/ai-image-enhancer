import Loading from "./Loading";

const ImagePreview = (props) => {
  return (
    <div className="mt-8 w-full px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-center gap-6">
      {/* Uploaded Image */}
      <div className="flex-1 max-w-full md:max-w-1/2 bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-lg sm:text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Uploaded Image
        </h2>
        <div className="flex items-center justify-center bg-gray-200 p-4 w-full">
          {props.uploaded ? (
            <img
              src={props.uploaded}
              alt="Uploaded"
              className="w-full h-auto max-h-[400px] sm:max-h-[500px] object-contain"
            />
          ) : (
            <div className="w-full h-[200px] sm:h-[250px] flex items-center justify-center text-zinc-900">
              No Image Selected
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Image */}
      <div className="flex-1 max-w-full md:max-w-1/2 bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-lg sm:text-xl font-semibold text-center bg-blue-800 text-white py-2">
          Enhanced Image
        </h2>
        <div className="flex items-center justify-center bg-gray-200 p-4 w-full">
          {props.loading ? (
            <Loading />
          ) : props.enhanced ? (
            <img
              src={props.enhanced}
              alt="Enhanced"
              className="w-full h-auto max-h-[400px] sm:max-h-[500px] object-contain"
            />
          ) : (
            <div className="w-full h-[200px] sm:h-[250px] flex items-center justify-center text-zinc-900">
              No Enhanced Image
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
