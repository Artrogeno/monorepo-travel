import React from 'react'

export interface ToastI {
  toggle: boolean
  direction?: string
  type?: string
  timeout?: number
  header?: string
  body?: string
  children?: React.ReactNode
}

export interface UtilsI {
  toast: ToastI
}
