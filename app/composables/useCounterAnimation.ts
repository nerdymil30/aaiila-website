/**
 * Composable for animating counter values from 0 to target
 * @param target - The final value to count to
 * @param duration - Animation duration in milliseconds (default: 2000ms)
 * @returns A ref containing the current animated counter value
 */
export function useCounterAnimation(target: number, duration: number = 2000) {
  const current = ref(0)
  let animationFrame: number | null = null
  let timer: NodeJS.Timeout | null = null

  const animate = () => {
    const start = 0
    const increment = target / (duration / 16) // ~60fps

    let value = start

    timer = setInterval(() => {
      value += increment
      if (value >= target) {
        current.value = target
        if (timer) clearInterval(timer)
      } else {
        current.value = Math.floor(value)
      }
    }, 16)
  }

  onMounted(() => {
    // Start animation after a short delay
    setTimeout(animate, 500)
  })

  onUnmounted(() => {
    if (timer) clearInterval(timer)
    if (animationFrame) cancelAnimationFrame(animationFrame)
  })

  return current
}
