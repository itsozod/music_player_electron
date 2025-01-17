import { useEffect, useRef } from 'react'
import Wave from 'vanta/dist/vanta.halo.min.js'

const VantaWave = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const vantaEffect = Wave({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      baseColor: 0xff20ec
    })
    return () => {
      if (!vantaEffect) vantaEffect.destroy()
    }
  }, [])
  return <div ref={vantaRef} className="absolute w-full h-full" />
}

export default VantaWave
