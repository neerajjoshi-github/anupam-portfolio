import AnimatedBlob from "./AnimatedBlob";

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] w-full bg-background">
      <div
        className="absolute inset-0"
        style={{
          background: `
    radial-gradient(
      125% 125% at 50% 10%, 
      var(--background) 50%, 
      oklch(from var(--primary) l c h / 0.2) 100%
    )
  `,
        }}
      />
      <AnimatedBlob />
      <div id="blur" className="absolute inset-0 backdrop-blur-[12vmax] z-5" />
      <div className="absolute inset-0 z-15 bg-background/20 [filter:url(#noiseFilter)]" />
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1"
            numOctaves="4"
            stitchTiles="stitch"
            result="colorNoise"
          />
          <feColorMatrix
            in="colorNoise"
            type="matrix"
            values="1 0 0 0 0  
                    0 1 0 0 0  
                    0 0 1 0 0  
                    0 0 0 1 0"
          />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
        </filter>
      </svg>
    </div>
  );
};

export default Background;
