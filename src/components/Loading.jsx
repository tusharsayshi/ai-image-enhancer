const Loading = () => {
  return (
    <div
      className="flex justify-center items-center w-full p-4 sm:p-6 min-h-[150px] sm:min-h-[200px] md:min-h-[250px]"
      role="status"
      aria-label="Loading"
    >
      <div className="animate-spin rounded-full border-4 border-t-transparent border-red-300
                      w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"></div>
    </div>
  );
};

export default Loading;
