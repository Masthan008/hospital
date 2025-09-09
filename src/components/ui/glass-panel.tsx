import { cn } from "@/lib/utils"
import { forwardRef, HTMLAttributes } from "react"

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  blur?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  opacity?: number
}

const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ className, blur = 'lg', opacity = 10, ...props }, ref) => {
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
  }
)
GlassPanel.displayName = 'GlassPanel'

export { GlassPanel }
