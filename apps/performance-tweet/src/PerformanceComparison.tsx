import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
  Audio,
} from 'remotion';

const NATIVEWIND_TIME = 180;
const UNIWIND_TIME = 110;

// Animated grid background component with royal theme
const AnimatedGrid: React.FC<{ opacity: number }> = ({ opacity }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        opacity: opacity * 0.12,
        backgroundImage: `
          linear-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        transform: `translateY(${frame * 0.5}px)`,
      }}
    />
  );
};

// Counting number component
const CountingNumber: React.FC<{
  target: number;
  progress: number;
  suffix?: string;
}> = ({ target, progress, suffix = 'ms' }) => {
  const current = Math.round(target * progress);
  return <>~{current}{suffix}</>;
};

export const PerformanceComparison: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene timing (in frames at 60fps, 22s total)
  const scene1End = 240;       // Scene 1 - Intro (5s)
  const contextEnd = 360;      // Context scene (3s)
  const scene2End = 760;      // Scene 2 - Benchmark (9s)
  const scene3End = 1020;      // Scene 3 - CTA (5s)

  // Scene 1: Intro
  const scene1Opacity = interpolate(
    frame,
    [0, 40, scene1End - 40, scene1End],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.33, 1, 0.68, 1),
    }
  );

  const scene1TitleY = interpolate(
    frame,
    [0, 60],
    [30, 0],
    {
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.cubic),
    }
  );

  const scene1SubtitleOpacity = interpolate(
    frame,
    [50, 90],
    [0, 1],
    {
      extrapolateRight: 'clamp',
    }
  );

  // Context Scene
  const contextOpacity = interpolate(
    frame,
    [scene1End, scene1End + 30, contextEnd - 30, contextEnd],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.33, 1, 0.68, 1),
    }
  );

  const contextTextY = interpolate(
    frame,
    [scene1End, scene1End + 40],
    [20, 0],
    {
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.cubic),
    }
  );

  // Scene 2: Benchmark
  const scene2Opacity = interpolate(
    frame,
    [contextEnd, contextEnd + 30, scene2End - 30, scene2End],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.33, 1, 0.68, 1),
    }
  );

  const scene2TitleY = interpolate(
    frame,
    [contextEnd, contextEnd + 50],
    [20, 0],
    {
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.cubic),
    }
  );

  // Benchmark bars animation - more time for comprehension
  const barsStartFrame = contextEnd+10;
  const nativewindProgress = interpolate(
    frame,
    [barsStartFrame, barsStartFrame + 120],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.cubic),
    }
  );

  const uniwindProgress = interpolate(
    frame,
    [barsStartFrame + 50, barsStartFrame + 170],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.cubic),
    }
  );

  const captionOpacity = interpolate(
    frame,
    [barsStartFrame + 200, barsStartFrame + 240],
    [0, 1],
    {
      extrapolateRight: 'clamp',
    }
  );

  // Glow effect on UniWind (pulses slightly)
  const glowIntensity = interpolate(
    frame,
    [barsStartFrame + 170, barsStartFrame + 210],
    [0, 1],
    {
      extrapolateRight: 'clamp',
    }
  );

  // Scene 3: CTA
  const scene3Opacity = interpolate(
    frame,
    [scene2End, scene2End + 50, scene3End - 40, scene3End],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.33, 1, 0.68, 1),
    }
  );

  const scene3Scale = spring({
    frame: frame - scene2End,
    fps,
    from: 0.9,
    to: 1,
    config: {
      damping: 15,
      mass: 0.8,
    },
  });

  return (
    <AbsoluteFill
      style={{
        background: 'radial-gradient(ellipse at top, #1a1540 0%, #0a0a1f 50%, #000000 100%)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* Royal accent glow */}
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(79, 70, 229, 0.15) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* Animated background grid */}
      <AnimatedGrid opacity={1} />

      {/* Scene 1: Intro */}
      {frame < scene1End && (
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            opacity: scene1Opacity,
          }}
        >
          <div
            style={{
              textAlign: 'center',
              transform: `translateY(${scene1TitleY}px)`,
            }}
          >
            <h1
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                letterSpacing: '-0.02em',
                wordSpacing: '0.15em',
                textShadow: '0 0 60px rgba(99, 102, 241, 0.5), 0 0 30px rgba(139, 92, 246, 0.3)',
              }}
            >
              gluestack-ui v4.1 alpha
            </h1>
            <div
              style={{
                fontSize: 38,
                color: '#a78bfa',
                marginTop: 20,
                fontWeight: 500,
                opacity: scene1SubtitleOpacity,
                textShadow: '0 0 20px rgba(167, 139, 250, 0.4)',
              }}
            >
              Now with Uniwind support
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* Context Scene */}
      {frame >= scene1End && frame < contextEnd && (
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            opacity: contextOpacity,
            padding: 80,
          }}
        >
          <div
            style={{
              textAlign: 'center',
              transform: `translateY(${contextTextY}px)`,
            }}
          >
            <div
              style={{
                fontSize: 50,
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: 30,
                letterSpacing: '-0.01em',
              }}
            >
              Performance matters.
            </div>
            <div
              style={{
                fontSize: 36,
                color: '#a78bfa',
                fontWeight: 500,
                lineHeight: 1.5,
              }}
            >
              Let's benchmark real components.
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* Scene 2: Benchmark */}
      {frame >= contextEnd && frame < scene2End && (
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            opacity: scene2Opacity,
            padding: 50,
          }}
        >
          <div style={{ width: '100%', maxWidth: 850 }}>
            {/* Title */}
            <h2
              style={{
                fontSize: 44,
                color: '#ffffff',
                textAlign: 'center',
                marginBottom: 10,
                fontWeight: 700,
                transform: `translateY(${scene2TitleY}px)`,
                letterSpacing: '-0.01em',
              }}
            >
              Rendering 1000 Buttons
            </h2>
            <p
              style={{
                fontSize: 22,
                color: '#94a3b8',
                textAlign: 'center',
                marginBottom: 40,
                fontWeight: 400,
                transform: `translateY(${scene2TitleY}px)`,
              }}
            >
              Lower time is better
            </p>

            {/* Vertical Bar Chart - Taller and Narrower */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                gap: 180,
                height: 480,
              }}
            >
              {/* NativeWind Bar */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 18,
                  flex: 1,
                  maxWidth: 130,
                }}
              >
                {/* Metric above bar */}
                <div
                  style={{
                    fontSize: 58,
                    fontWeight: 700,
                    color: '#f87171',
                    fontVariantNumeric: 'tabular-nums',
                    minHeight: 70,
                  }}
                >
                  <CountingNumber target={NATIVEWIND_TIME} progress={nativewindProgress} />
                </div>

                {/* Vertical Bar - Taller */}
                <div
                  style={{
                    width: '100%',
                    height: 320,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: `${(NATIVEWIND_TIME / 200) * 100 * nativewindProgress}%`,
                      background: 'linear-gradient(180deg, #ef4444 0%, #dc2626 100%)',
                      borderRadius: '14px',
                      boxShadow: '0 0 35px rgba(239, 68, 68, 0.5), 0 -10px 40px rgba(239, 68, 68, 0.2) inset',
                      position: 'relative',
                    }}
                  >
                    {/* Shine effect */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '20%',
                        width: '90%',
                        height: '90%',
                        opacity: 0.1,
                        background: 'linear-gradient(180deg, #ef4444 0%, transparent 100%)',
                        borderRadius: '14px 14px 0 0',
                      }}
                    />
                  </div>
                </div>

                {/* Label */}
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 600,
                    color: '#e5e7eb',
                    textAlign: 'center',
                  }}
                >
                  NativeWind
                </div>
              </div>

              {/* UniWind Bar */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 18,
                  flex: 1,
                  maxWidth: 130,
                }}
              >
                {/* Metric above bar with glow */}
                <div
                  style={{
                    fontSize: 58,
                    fontWeight: 700,
                    color: '#34d399',
                    fontVariantNumeric: 'tabular-nums',
                    minHeight: 70,
                    textShadow: glowIntensity > 0
                      ? `0 0 ${35 * glowIntensity}px rgba(52, 211, 153, 0.9)`
                      : 'none',
                  }}
                >
                  <CountingNumber target={UNIWIND_TIME} progress={uniwindProgress} />
                </div>

                {/* Vertical Bar with glow - Taller */}
                <div
                  style={{
                    width: '100%',
                    height: 320,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: `${(UNIWIND_TIME / 200) * 100 * uniwindProgress}%`,
                      background: 'linear-gradient(180deg, #10b981 0%, #059669 100%)',
                      borderRadius: '14px',
                      boxShadow: glowIntensity > 0
                        ? `0 0 ${45 * glowIntensity}px rgba(16, 185, 129, 0.7), 0 -10px 40px rgba(16, 185, 129, 0.3) inset`
                        : '0 0 35px rgba(16, 185, 129, 0.5), 0 -10px 40px rgba(16, 185, 129, 0.2) inset',
                      position: 'relative',
                    }}
                  >
                    {/* Shine effect */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '20%',
                        width: '90%',
                        height: '90%',
                        opacity: 0.1,
                        background: 'linear-gradient(180deg, #10b981 0%, transparent 100%)',
                        borderRadius: '14px 14px 0 0',
                      }}
                    />

                    {/* Winner badge */}
                    {glowIntensity > 0.5 && (
                      <div
                        style={{
                          position: 'absolute',
                          top: -55,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          fontSize: 18,
                          fontWeight: 600,
                          color: '#10b981',
                          backgroundColor: 'rgba(16, 185, 129, 0.2)',
                          border: '2px solid rgba(16, 185, 129, 0.5)',
                          padding: '8px 18px',
                          borderRadius: 10,
                          opacity: glowIntensity,
                          whiteSpace: 'nowrap',
                          boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)',
                        }}
                      >
                        ⚡ Winner
                      </div>
                    )}
                  </div>
                </div>

                {/* Label */}
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 600,
                    color: '#e5e7eb',
                    textAlign: 'center',
                  }}
                >
                  UniWind
                </div>
              </div>
            </div>

            {/* Performance improvement badge */}
            <div
              style={{
                marginTop: 25,
                display: 'flex',
                justifyContent: 'center',
                opacity: captionOpacity,
              }}
            >
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)',
                  border: '2px solid rgba(16, 185, 129, 0.4)',
                  borderRadius: 16,
                  padding: '18px 45px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 30px rgba(16, 185, 129, 0.2)',
                }}
              >
                <div
                  style={{
                    fontSize: 46,
                    fontWeight: 700,
                    color: '#10b981',
                    textAlign: 'center',
                    letterSpacing: '-0.01em',
                  }}
                >
                  ~ 40% Faster
                </div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* Scene 3: CTA */}
      {frame >= scene2End && (
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            opacity: scene3Opacity,
          }}
        >
          <div
            style={{
              textAlign: 'center',
              transform: `scale(${scene3Scale})`,
            }}
          >
            <div
              style={{
                fontSize: 64,
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.2,
                wordSpacing: '0.15em',
                letterSpacing: '-0.02em',
                textShadow: '0 0 40px rgba(139, 92, 246, 0.4)',
              }}
            >
              Try gluestack-ui v4.1 alpha
            </div>
            <div
              style={{
                fontSize: 34,
                color: '#a78bfa',
                marginTop: 20,
                fontWeight: 500,
                textShadow: '0 0 20px rgba(167, 139, 250, 0.3)',
              }}
            >
              Available now
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
