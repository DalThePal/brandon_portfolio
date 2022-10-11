import { useCallback, useEffect, useState } from "react"

import {
  breakpoints,
} from "styles/media"

export default function useMedia(fw, d, t, m) {
  const handleUpdate = useCallback(() => {
    if (window.innerWidth > breakpoints.desktop) {
      setCurrent(fw)
    } else if (window.innerWidth > breakpoints.tablet) {
      setCurrent(d)
    } else if (window.innerWidth > breakpoints.mobile) {
      setCurrent(t)
    } else setCurrent(m)
  }, [fw, d, t, m])

  const [current, setCurrent] = useState(d)

  useEffect(() => {
    handleUpdate()
  }, [handleUpdate])

  useEffect(() => {

    window.addEventListener("resize", handleUpdate)
    return () => window.removeEventListener("resize", handleUpdate)
 
  }, [handleUpdate])

  return current
}