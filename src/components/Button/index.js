import React from "react"
import { StyledButton } from "./Button"
export default function Button({
  to = "/",
  title = "Link",
  variant = "dark",
  ...restProps
}) {
  return (
    <StyledButton {...restProps} variant={variant} to={to}>
      {title}
    </StyledButton>
  )
}
