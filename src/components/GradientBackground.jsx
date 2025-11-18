import { useEffect, useRef } from 'react';

const GradientBackground = () => {
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);

  useEffect(() => {
    // Slow movement animation for blobs
    const animateBlobs = () => {
      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate(${Math.sin(Date.now() / 20000) * 50}px, ${Math.cos(Date.now() / 20000) * 50}px)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate(${Math.cos(Date.now() / 25000) * 40}px, ${Math.sin(Date.now() / 25000) * 40}px)`;
      }
      if (blob3Ref.current) {
        blob3Ref.current.style.transform = `translate(${Math.sin(Date.now() / 30000) * 60}px, ${Math.cos(Date.now() / 30000) * 60}px)`;
      }
      requestAnimationFrame(animateBlobs);
    };
    
    animateBlobs();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Blue Blob */}
      <div
        ref={blob1Ref}
        className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl opacity-[0.15]"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%)',
          transition: 'transform 20s ease-in-out'
        }}
      />
      
      {/* Purple Blob */}
      <div
        ref={blob2Ref}
        className="absolute top-3/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl opacity-[0.15]"
        style={{
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.3), transparent 70%)',
          transition: 'transform 30s ease-in-out'
        }}
      />
      
      {/* Amber Blob */}
      <div
        ref={blob3Ref}
        className="absolute bottom-1/4 left-1/2 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl opacity-[0.15]"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3), transparent 70%)',
          transition: 'transform 25s ease-in-out'
        }}
      />
    </div>
  );
};

export default GradientBackground;

