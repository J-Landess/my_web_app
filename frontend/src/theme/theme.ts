// Wiseman Psychedelics Theme Configuration
// Centralized theme for easy maintenance and one-file palette editing

export const theme = {
  colors: {
    // Dark psychedelic background palette
    background: {
      primary: "#0a0015",
      secondary: "#1a0033", 
      tertiary: "#0d1b2a",
      card: "rgba(26, 0, 51, 0.8)"
    },
    
    // Dark rainbow gradient colors
    rainbow: {
      purple: "#1a0033",
      violet: "#2d0052", 
      indigo: "#1a0a3d",
      blue: "#0a1a33",
      teal: "#0a3322",
      green: "#1a3300",
      amber: "#332200",
      red: "#330a0a"
    },
    
    // Neon accent colors
    neon: {
      cyan: "#00f0ff",
      magenta: "#ff00ff",
      lime: "#39ff14",
      purple: "#bf00ff",
      blue: "#0080ff"
    },
    
    // Text colors
    text: {
      primary: "#ffffff",
      secondary: "#b8b8b8",
      accent: "#00f0ff"
    },
    
    // Gradient combinations
    gradients: {
      rainbow: "linear-gradient(45deg, #1a0033, #2d0052, #1a0a3d, #0a1a33, #0a3322, #1a3300, #332200, #330a0a)",
      cyanBlue: "linear-gradient(45deg, #00f0ff, #0080ff)",
      magentaPurple: "linear-gradient(45deg, #ff00ff, #bf00ff)",
      limeCyan: "linear-gradient(45deg, #39ff14, #00f0ff)",
      background: "linear-gradient(135deg, #0a0015 0%, #1a0033 50%, #0d1b2a 100%)"
    }
  },
  
  // Motion presets for consistent animations
  motion: {
    smooth: { 
      duration: 0.4, 
      ease: [0.4, 0, 0.2, 1] as const 
    },
    dramatic: { 
      duration: 0.6, 
      ease: [0.68, -0.55, 0.265, 1.55] as const 
    },
    fast: { 
      duration: 0.2, 
      ease: "easeOut" as const 
    },
    spring: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20
    },
    springBounce: {
      type: "spring" as const,
      stiffness: 300,
      damping: 10
    }
  },
  
  // Glow effects for consistent lighting
  shadows: {
    glowCyan: "0 0 20px #00f0ff, 0 0 40px #00f0ff, 0 0 60px #00f0ff",
    glowMagenta: "0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff",
    glowLime: "0 0 20px #39ff14, 0 0 40px #39ff14, 0 0 60px #39ff14",
    glowPurple: "0 0 20px #bf00ff, 0 0 40px #bf00ff, 0 0 60px #bf00ff",
    rainbowGlow: "0 0 30px #1a0033, 0 0 60px #1a0a3d, 0 0 90px #0a3322"
  },
  
  // Animation keyframes for CSS
  keyframes: {
    rainbowShift: {
      "0%, 100%": { 
        opacity: 0.8,
        transform: "scale(1) rotate(0deg)"
      },
      "25%": { 
        opacity: 0.6,
        transform: "scale(1.1) rotate(90deg)"
      },
      "50%": { 
        opacity: 0.9,
        transform: "scale(0.9) rotate(180deg)"
      },
      "75%": { 
        opacity: 0.7,
        transform: "scale(1.05) rotate(270deg)"
      }
    },
    rainbowRotate: {
      "0%": { transform: "rotate(0deg) scale(1)" },
      "50%": { transform: "rotate(180deg) scale(1.1)" },
      "100%": { transform: "rotate(360deg) scale(1)" }
    },
    pulse: {
      "0%, 100%": { transform: "scale(1)" },
      "50%": { transform: "scale(1.05)" }
    },
    shimmer: {
      "0%": { left: "-100%" },
      "100%": { left: "100%" }
    }
  },
  
  // Breakpoints for responsive design
  breakpoints: {
    mobile: "480px",
    tablet: "768px", 
    desktop: "1024px",
    wide: "1200px"
  },
  
  // Z-index layers
  zIndex: {
    background: -2,
    backgroundOverlay: -1,
    content: 1,
    navbar: 100,
    modal: 1000,
    tooltip: 1001
  }
} as const;

// Type definitions for theme usage
export type Theme = typeof theme;
export type ColorKey = keyof typeof theme.colors;
export type MotionKey = keyof typeof theme.motion;
export type ShadowKey = keyof typeof theme.shadows;

// Helper functions for theme usage
export const getColor = (path: string) => {
  const keys = path.split('.');
  let value: any = theme.colors;
  for (const key of keys) {
    value = value[key];
  }
  return value;
};

export const getMotion = (preset: MotionKey) => theme.motion[preset];

export const getShadow = (glow: ShadowKey) => theme.shadows[glow];

// CSS custom properties generator
export const generateCSSVariables = () => {
  const cssVars: Record<string, string> = {};
  
  // Background colors
  cssVars['--bg-primary'] = theme.colors.background.primary;
  cssVars['--bg-secondary'] = theme.colors.background.secondary;
  cssVars['--bg-tertiary'] = theme.colors.background.tertiary;
  cssVars['--bg-card'] = theme.colors.background.card;
  
  // Rainbow colors
  Object.entries(theme.colors.rainbow).forEach(([key, value]) => {
    cssVars[`--rainbow-${key}`] = value;
  });
  
  // Neon colors
  Object.entries(theme.colors.neon).forEach(([key, value]) => {
    cssVars[`--neon-${key}`] = value;
  });
  
  // Text colors
  cssVars['--text-primary'] = theme.colors.text.primary;
  cssVars['--text-secondary'] = theme.colors.text.secondary;
  cssVars['--text-accent'] = theme.colors.text.accent;
  
  // Shadows
  Object.entries(theme.shadows).forEach(([key, value]) => {
    cssVars[`--glow-${key.replace('glow', '').toLowerCase()}`] = value;
  });
  
  return cssVars;
};
