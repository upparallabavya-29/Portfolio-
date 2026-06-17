import React from 'react';

export default function BackgroundGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* Indigo glowing circle */}
      <div className="absolute top-[-10%] left-[-10%] md:top-[-20%] md:left-[-10%] w-[60vw] h-[60vw] bg-accentPurple/10 rounded-full blur-[100px] md:blur-[150px] animate-pulse-slow" />
      
      {/* Cyan glowing circle */}
      <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] bg-accentCyan/5 rounded-full blur-[120px] md:blur-[180px]" style={{ animationDuration: '10s' }} />
      
      {/* Teal glowing circle */}
      <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-accentTeal/10 rounded-full blur-[100px] md:blur-[150px] animate-pulse-slow" style={{ animationDelay: '3s' }} />
      
      {/* Technical grid lines overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:30px_30px]" />
    </div>
  );
}
