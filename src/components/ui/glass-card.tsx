import { cn } from "@/lib/utils"
import { forwardRef, HTMLAttributes } from "react"

// GlassCard Component
export const GlassCard = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { blur?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' }
>(({ className, blur = 'lg', ...props }, ref) => {
  const blurClass = {
    'sm': 'backdrop-blur-sm',
    'md': 'backdrop-blur-md',
    'lg': 'backdrop-blur-lg',
    'xl': 'backdrop-blur-xl',
    '2xl': 'backdrop-blur-2xl',
    '3xl': 'backdrop-blur-3xl',
  }[blur]

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-white/20 bg-white/10",
        "shadow-xl shadow-black/5 transition-all duration-300 hover:shadow-2xl hover:shadow-black/10",
        "p-6",
        blurClass,
        className
      )}
      {...props}
    />
  )
})
GlassCard.displayName = "GlassCard"

// GlassPanel Component
export const GlassPanel = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { 
    blur?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
    opacity?: number
  }
>(({ className, blur = 'lg', opacity = 10, ...props }, ref) => {
  const blurClass = {
    'sm': 'backdrop-blur-sm',
    'md': 'backdrop-blur-md',
    'lg': 'backdrop-blur-lg',
    'xl': 'backdrop-blur-xl',
    '2xl': 'backdrop-blur-2xl',
    '3xl': 'backdrop-blur-3xl',
  }[blur]

  return (
    <div
      ref={ref}
      className={cn(
        'rounded-xl border border-white/20',
        'shadow-xl shadow-black/5',
        'transition-all duration-300',
        'bg-white/[0.03] hover:bg-white/[0.05]',
        blurClass,
        className
      )}
      style={{
        '--tw-bg-opacity': `${opacity}%`,
      } as React.CSSProperties}
      {...props}
    />
  )
})
GlassPanel.displayName = 'GlassPanel'
