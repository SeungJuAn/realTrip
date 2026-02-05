export const theme = {
  colors: {
    primary: "#0EA5E9",
    primaryLight: "#E0F2FE",
    primaryDark: "#0369A1",
    primaryHover: "#0284C7",

    background: "#F8FAFC",
    surface: "#FFFFFF",

    text: "#1E293B",
    textSecondary: "#64748B",
    textLight: "#94A3B8",

    border: "#E2E8F0",
    borderLight: "#F1F5F9",

    error: "#EF4444",
    success: "#22C55E",

    white: "#FFFFFF",
  },

  shadow: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.07)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
  },

  borderRadius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    full: "9999px",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
} as const;

export type Theme = typeof theme;
