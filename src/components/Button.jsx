import Icon from './Icon.jsx'
import './Button.css'

export default function Button({
  href,
  children,
  variant = 'primary',
  type = 'button',
  onClick,
  disabled,
  className = '',
  withArrow = false,
}) {
  const classes = `btn btn--${variant} ${className}`.trim()
  const content = (
    <>
      {children}
      {withArrow ? <Icon name="arrow" /> : null}
    </>
  )

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} type={type} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}
