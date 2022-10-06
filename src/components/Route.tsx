import { useContext, useEffect, useState } from "react"
import { RouterContext } from "./Router"

interface RouteProps {
  path: string
  component: JSX.Element
}

export const Route = ({ path, component }: RouteProps) => {
  const { path: currentPath, setPath } = useContext(RouterContext)

  window.onpopstate = (event) => {
    setPath(window.location.pathname)
  }

  if (currentPath !== path) return (<></>) as JSX.Element
  else return component
}
