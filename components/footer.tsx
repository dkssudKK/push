import { Component as BgGradient } from "@/components/ui/bg-gradient"
import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      <BgGradient
        gradientFrom="#2a2a2a"
        gradientTo="#000000"
        gradientSize="200% 100%"
        gradientPosition="50% 0%"
        gradientStop="0%"
        className="bg-black opacity-80"
      />

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-20">
        <div className="text-center mb-16 pb-16 border-b border-white/10">
          <h3 className="text-3xl md:text-4xl font-light mb-4">함께 일하고 싶으신가요?</h3>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            새로운 기회를 찾고 있습니다. 언제든지 연락 주세요!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:your.email@example.com"
              className="px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-colors font-medium flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              이메일 보내기
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 border border-white/20 rounded-lg hover:border-white/40 transition-colors font-medium flex items-center gap-2"
              rel="noreferrer"
            >
              <FileText className="w-4 h-4" />
              이력서 다운로드
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-sm font-medium mb-4 text-white/80 uppercase tracking-wider">연락처</h4>
            <div className="space-y-3">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">your.email@example.com</span>
              </a>
              <a
                href="tel:+821012345678"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">010-1234-5678</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-white/80 uppercase tracking-wider">소셜 미디어</h4>
            <div className="space-y-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-white/80 uppercase tracking-wider">빠른 이동</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/70 hover:text-white text-sm transition-colors block">
                  자기소개
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-white text-sm transition-colors block">
                  작업물
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white/70 hover:text-white text-sm transition-colors block">
                  기술 스택
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white text-sm transition-colors block">
                  연락하기
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs">© 2025 Portfolio. 모든 권리 보유.</p>
          <p className="text-white/50 text-xs">채용 담당자님, 연락 주시면 감사하겠습니다!</p>
        </div>
      </div>
    </footer>
  )
}
