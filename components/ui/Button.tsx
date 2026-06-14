// components/ui/Button.tsx
interface ButtonPropsType {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'green'
  type?: 'button' | 'submit'
  className?: string
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  className,
}: ButtonPropsType) {
  const baseStyles = 'px-6 py-3 rounded-lg transition font-medium inline-block text-center'

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    green: 'bg-green-600 text-white hover:bg-green-700',
  }

  const classes = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} type={type} className={classes}>
      {children}
    </button>
  )
}
