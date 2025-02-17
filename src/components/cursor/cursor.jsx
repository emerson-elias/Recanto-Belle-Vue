import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import './cursor.scss'

export default function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current

    const Move_Cursor = (e) => {
      gsap.to(cursor, {
        duration: 0.3,
        x: e.clientX - cursor.offsetWidth / 2,
        y: e.clientY - cursor.offsetHeight / 2,
        ease: "power2.out"
      })
    }

    const Cursor_Element_Enter = () => {
      gsap.to(cursor, {
        scale: 3,
        duration: 0.3,
        ease: "power2.out",     
      })
    }

    const Cursor_Element_Out = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    document.addEventListener('mousemove', Move_Cursor)

    document.querySelectorAll('a').forEach(anchor => {
      anchor.addEventListener('mouseover', Cursor_Element_Enter)
      anchor.addEventListener('mouseout', Cursor_Element_Out)
    })

    return () => {
      document.removeEventListener('mousemove', Move_Cursor)

      document.querySelectorAll('a').forEach(anchor => {
        anchor.removeEventListener('mouseover', Cursor_Element_Enter)
        anchor.removeEventListener('mouseout', Cursor_Element_Out)
      })
    }
  }, [])

  return (
    <section id='cursor' ref={cursorRef}>
      <span></span>
    </section>
  )
}
