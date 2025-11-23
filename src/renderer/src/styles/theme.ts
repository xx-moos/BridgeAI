/**
 * 老王的LLM智能助手主题配色
 * 艹，这个配色方案老王我调了半天，颜值在线！
 */

export const themeColors = {
  // 主色调（科技蓝紫）
  primary: '#6366f1',
  primaryLight: '#818cf8',
  primaryDark: '#4f46e5',
  primaryGradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',

  // 背景色系（深色系）
  bgPrimary: '#0f0f0f', // 主背景（超深黑）
  bgSecondary: '#1a1a1a', // 左侧边栏背景
  bgTertiary: '#262626', // 卡片、消息气泡背景
  bgHover: '#2d2d2d', // 悬停态背景
  bgActive: '#333333', // 激活态背景

  // 文字色系
  textPrimary: '#ffffff', // 主文字（纯白）
  textSecondary: '#a3a3a3', // 次要文字（灰色）
  textTertiary: '#737373', // 辅助文字（深灰）

  // 边框色
  border: '#333333',
  borderLight: '#404040',

  // 功能色
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6'
}

export const themeLayout = {
  // 布局尺寸
  siderWidth: 280,
  headerHeight: 60,
  footerMinHeight: 60,
  footerMaxHeight: 120,

  // 圆角
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px'
  },

  // 阴影
  shadow: {
    sm: '0 2px 8px rgba(0,0,0,0.08)',
    md: '0 4px 16px rgba(0,0,0,0.12)',
    lg: '0 8px 24px rgba(0,0,0,0.16)'
  },

  // 间距
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  }
}

// Antd Design Token 配置
export const antdThemeToken = {
  colorPrimary: themeColors.primary,
  colorBgBase: themeColors.bgPrimary,
  colorBgContainer: themeColors.bgTertiary,
  colorBorder: themeColors.border,
  colorText: themeColors.textPrimary,
  colorTextSecondary: themeColors.textSecondary,
  colorTextTertiary: themeColors.textTertiary,
  colorSuccess: themeColors.success,
  colorWarning: themeColors.warning,
  colorError: themeColors.error,
  colorInfo: themeColors.info,
  borderRadius: 8,
  fontSize: 14,
  fontFamily:
    'pfs, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
}
