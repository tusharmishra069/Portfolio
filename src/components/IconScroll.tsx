const IconScroll = () => (
  <div className="flex justify-center my-8">
    <div className="relative w-10 h-20 rounded-full border-2 border-white flex items-center justify-center bg-white/10 shadow-lg">
      {/* Mouse wheel */}
      <div className="absolute left-1/2 top-5 -translate-x-1/2 w-1 h-6 bg-white rounded-full opacity-70" />
      {/* Animated dot */}
      <span className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full animate-scrollDotEnhanced shadow-md" />
    </div>
  </div>
);

export default IconScroll; 