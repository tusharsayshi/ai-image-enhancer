import Home from './components/Home';

const App = () =>{
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 py-8 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-2">
          AI Image Enhancer
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          Upload your image here and enhance it in seconds!
        </p>
      </div>
    <div className="w-full max-w-3xl">
      <Home />
    </div> 
    

    <div className="text-md text-gray-300 mt-6">
      Powered by AI
    </div>
  </div>
  );
};

export default App;


