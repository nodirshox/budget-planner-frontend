import Typography from '@mui/material/Typography'
import * as React from 'react'

export default function Footer(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Budget Planner - '}
      {new Date().getFullYear()}
    </Typography>
  )
}
