// components/ui/Heading.tsx
import React from 'react'

interface HeaderProps {
  children: React.ReactNode
  level?: 1 | 2 | 3
  className?: string
  centered?: boolean
}

export default function Header({
  children,
  level = 1,
  className = '',
  centered = false,
}: HeaderProps) {
  const styles = {
    1: 'text-5xl font-bold text-gray-900',
    2: 'text-3xl font-bold text-gray-900',
    3: 'text-xl font-semibold text-gray-800',
  }

  const alignment = centered ? 'text-center' : ''
  const classes = `${styles[level]} ${alignment} ${className}`

  // Простой switch вместо динамического Tag
  switch (level) {
    case 1:
      return <h1 className={classes}>{children}</h1>
    case 2:
      return <h2 className={classes}>{children}</h2>
    case 3:
      return <h3 className={classes}>{children}</h3>
    default:
      return <h1 className={classes}>{children}</h1>
  }
}
