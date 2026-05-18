import React from 'react';

const NeuralCube3D = () => {
  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center pointer-events-none select-none">
      {/* Centered soft golden technical radial glow */}
      <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-[#f5c518]/12 via-[#f5c518]/2 to-transparent blur-[100px] md:blur-[140px] opacity-75" />
      
      {/* Decorative technical concentric coordinate vectors */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-64 h-64 border border-[#f5c518]/5 rounded-full flex items-center justify-center">
          <div className="w-48 h-48 border border-white/5 rounded-full flex items-center justify-center">
            <div className="w-32 h-32 border border-white/5 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#f5c518]/50 shadow-[0_0_10px_#f5c518]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralCube3D;
