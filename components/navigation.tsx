"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "홈", href: "/" },
    { label: "팀", href: "/team" },
    { label: "채용", href: "/careers" },
    { label: "리소스", href: "/resources" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 flex justify-between items-center p-6 relative z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-sm border-b border-white/10" : "bg-transparent"
        }`}
      >
        <Link href="/" className="text-sm font-medium tracking-wider hover:text-white/80 transition-colors">
          voicetwoo
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-sm font-medium tracking-wider hover:text-white/80 transition-colors"
        >
          {isMenuOpen ? "닫기" : "메뉴"}
        </button>
      </header>

      {/* Full Screen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex items-center justify-center">
          <nav className="text-center">
            <ul className="space-y-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl md:text-6xl font-light hover:text-white/70 transition-colors block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-16 pt-8 border-t border-white/20">
              <div className="space-y-4 text-white/60">
                <p className="text-sm">문의하기</p>
                <p className="text-lg">hello@voicetwoo.agency</p>
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
