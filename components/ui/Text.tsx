// components/ui/Text.tsx
interface TextProps {
  children: React.ReactNode
  variant?: 'body' | 'lead' | 'small' | 'muted'
  className?: string
  as?: 'p' | 'span' | 'div'
}

export default function Text({
  children,
  variant = 'body',
  className = '',
  as: Component = 'p',
}: TextProps) {
  const variants = {
    body: 'text-gray-700',
    lead: 'text-xl text-gray-600',
    small: 'text-sm text-gray-500',
    muted: 'text-gray-500',
  }

  const sizes = {
    body: 'text-base',
    lead: 'text-xl',
    small: 'text-sm',
    muted: 'text-base',
  }

  const classes = `${sizes[variant]} ${variants[variant]} ${className}`

  return <Component className={classes}>{children}</Component>
}
