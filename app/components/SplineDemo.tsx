"use client";
import Spline from '@splinetool/react-spline';

export default function SplineDemo() {
  return (
    <div className="w-full h-[500px] bg-black rounded-lg overflow-hidden flex items-stretch relative">
      {/* Sol içerik */}
      <div className="flex-1 flex flex-col justify-center pl-12 pr-4 z-10">
        <h1 className="text-5xl font-bold text-white mb-4">Interactive 3D</h1>
        <p className="text-lg text-gray-200 max-w-md">
          Bring your UI to life with beautiful 3D scenes. Create immersive experiences that capture attention and enhance your design.
        </p>
      </div>
      {/* Sağ 3D model */}
      <div className="flex-1 relative">
        <iframe src="https://my.spline.design/your-public-link" frameBorder="0" width="100%" height="100%"></iframe>
      </div>
    </div>
  );
} 