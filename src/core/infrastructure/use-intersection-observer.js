import { useEffect } from "react"

export default function useIntersectionObserver({
  refs,
  callback,
  options = {
    rootMargin: "0px",
    root: null,
    threshold: [0.1],
  },
}) {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback({
            target: entry.target,
          })
          observer.unobserve(entry.target)
        }
      })
    }, options)

    setTimeout(() => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.observe(ref.current)
        }
      })
    }, 500)
  }, [])
}
