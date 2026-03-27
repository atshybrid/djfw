interface ReporterMicSVGProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function ReporterMicSVG({
  className = "",
  width = 420,
  height = 440,
}: ReporterMicSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420 440"
      width={width}
      height={height}
      className={className}
      aria-label="Reporter with microphone illustration"
      role="img"
    >
      <defs>
        {/* Navy gradient for jacket */}
        <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#001a5e" />
          <stop offset="100%" stopColor="#00072a" />
        </linearGradient>
        {/* Mic gradient */}
        <linearGradient id="micGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9ca3af" />
          <stop offset="100%" stopColor="#4b5563" />
        </linearGradient>
        {/* DJF(W) badge gradient */}
        <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f6be3b" />
          <stop offset="100%" stopColor="#d4a017" />
        </linearGradient>
        {/* Skin tone */}
        <radialGradient id="skinGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fcd5a8" />
          <stop offset="100%" stopColor="#e8a87c" />
        </radialGradient>
        {/* Press badge */}
        <linearGradient id="pressBadge" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#bc0100" />
          <stop offset="100%" stopColor="#8b0000" />
        </linearGradient>
        {/* Glow filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Shadow */}
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="6" floodColor="#00072a" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* ── Background circle ── */}
      <circle cx="210" cy="210" r="195" fill="url(#jacketGrad)" opacity="0.08" />
      <circle cx="210" cy="210" r="160" fill="url(#jacketGrad)" opacity="0.06" />

      {/* ── Body / Torso ── */}
      {/* Jacket */}
      <path
        d="M110 310 Q100 380 105 420 L315 420 Q320 380 310 310 Q280 285 255 275 L210 265 L165 275 Q140 285 110 310 Z"
        fill="url(#jacketGrad)"
        filter="url(#shadow)"
      />
      {/* Jacket lapels */}
      <path d="M165 275 L210 295 L210 380 L130 360 L110 310 Z" fill="#001a5e" />
      <path d="M255 275 L210 295 L210 380 L290 360 L310 310 Z" fill="#001a5e" />
      {/* Shirt / tie area */}
      <path d="M185 275 L210 290 L235 275 L225 265 L210 268 L195 265 Z" fill="#f8f7f4" />
      {/* Tie */}
      <path d="M207 272 L213 272 L216 300 L210 312 L204 300 Z" fill="#bc0100" />
      <path d="M207 272 L213 272 L211 280 L209 280 Z" fill="#8b0000" />

      {/* ── Press Badge on jacket ── */}
      <rect x="118" y="310" width="52" height="30" rx="4" fill="url(#pressBadge)" filter="url(#shadow)" />
      <text x="144" y="322" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">PRESS</text>
      <text x="144" y="333" textAnchor="middle" fill="#fde68a" fontSize="6" fontFamily="sans-serif">DJF(W)</text>

      {/* ── Neck ── */}
      <rect x="196" y="240" width="28" height="35" rx="6" fill="url(#skinGrad)" />

      {/* ── Head ── */}
      <ellipse cx="210" cy="185" rx="58" ry="65" fill="url(#skinGrad)" filter="url(#shadow)" />

      {/* Hair */}
      <path
        d="M152 175 Q148 130 175 115 Q190 108 210 107 Q230 108 245 115 Q270 130 268 175 Q262 148 240 138 Q225 132 210 132 Q195 132 180 138 Q158 148 152 175 Z"
        fill="#1a0a00"
      />
      {/* Sideburns */}
      <rect x="152" y="165" width="8" height="25" rx="4" fill="#1a0a00" />
      <rect x="260" y="165" width="8" height="25" rx="4" fill="#1a0a00" />

      {/* Ear left */}
      <ellipse cx="153" cy="190" rx="10" ry="13" fill="#e8a87c" />
      <ellipse cx="153" cy="190" rx="5" ry="8" fill="#d4956a" />
      {/* Ear right */}
      <ellipse cx="267" cy="190" rx="10" ry="13" fill="#e8a87c" />
      <ellipse cx="267" cy="190" rx="5" ry="8" fill="#d4956a" />

      {/* ── Face features ── */}
      {/* Eyebrows */}
      <path d="M178 168 Q188 163 198 167" stroke="#2d1a00" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M222 167 Q232 163 242 168" stroke="#2d1a00" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Eyes */}
      <ellipse cx="188" cy="178" rx="10" ry="9" fill="white" />
      <ellipse cx="232" cy="178" rx="10" ry="9" fill="white" />
      <circle cx="190" cy="179" r="6" fill="#2d1a00" />
      <circle cx="234" cy="179" r="6" fill="#2d1a00" />
      <circle cx="192" cy="177" r="2" fill="white" />
      <circle cx="236" cy="177" r="2" fill="white" />
      {/* Eyelashes */}
      <path d="M178 172 Q183 169 188 169" stroke="#1a0a00" strokeWidth="1" fill="none" />
      <path d="M232 169 Q237 169 242 172" stroke="#1a0a00" strokeWidth="1" fill="none" />

      {/* Nose */}
      <path d="M207 185 Q204 200 200 206 Q206 210 214 210 Q220 206 220 206 Q216 200 213 185" fill="#d4956a" />
      <circle cx="202" cy="206" r="4" fill="#c4855a" />
      <circle cx="218" cy="206" r="4" fill="#c4855a" />

      {/* Mouth — slight confident smile */}
      <path d="M196 220 Q210 232 224 220" stroke="#b06040" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M198 221 Q210 226 222 221" fill="#e8907a" />

      {/* Light stubble */}
      <ellipse cx="210" cy="228" rx="22" ry="8" fill="#d4956a" opacity="0.3" />

      {/* ── Right Arm extended holding mic ── */}
      {/* Upper arm */}
      <path
        d="M255 278 Q275 280 295 295 Q315 315 328 340"
        stroke="url(#jacketGrad)" strokeWidth="32" fill="none" strokeLinecap="round"
      />
      {/* Forearm (sleeve ending, hand visible) */}
      <path
        d="M313 325 Q326 345 332 365"
        stroke="#001a5e" strokeWidth="28" fill="none" strokeLinecap="round"
      />
      {/* Hand */}
      <ellipse cx="335" cy="375" rx="16" ry="20" fill="url(#skinGrad)" transform="rotate(-20 335 375)" />
      {/* Fingers gripping mic */}
      <rect x="327" y="363" width="8" height="14" rx="4" fill="#e8a87c" transform="rotate(-15 330 370)" />
      <rect x="336" y="360" width="8" height="14" rx="4" fill="#e8a87c" transform="rotate(-5 340 367)" />
      <rect x="344" y="362" width="8" height="14" rx="4" fill="#e8a87c" transform="rotate(5 348 369)" />

      {/* ── Microphone ── */}
      {/* Mic handle */}
      <rect x="326" y="295" width="16" height="75" rx="8" fill="url(#micGrad)" filter="url(#shadow)" />
      {/* Mic grip lines */}
      <line x1="326" y1="330" x2="342" y2="330" stroke="white" strokeWidth="1" opacity="0.3" />
      <line x1="326" y1="340" x2="342" y2="340" stroke="white" strokeWidth="1" opacity="0.3" />
      <line x1="326" y1="350" x2="342" y2="350" stroke="white" strokeWidth="1" opacity="0.3" />
      {/* Mic head (capsule) */}
      <rect x="322" y="260" width="24" height="38" rx="12" fill="#6b7280" filter="url(#shadow)" />
      <rect x="324" y="262" width="20" height="34" rx="10" fill="#374151" />
      {/* Mic mesh lines */}
      <line x1="328" y1="267" x2="340" y2="267" stroke="#9ca3af" strokeWidth="1" opacity="0.6" />
      <line x1="326" y1="273" x2="342" y2="273" stroke="#9ca3af" strokeWidth="1" opacity="0.6" />
      <line x1="326" y1="279" x2="342" y2="279" stroke="#9ca3af" strokeWidth="1" opacity="0.6" />
      <line x1="326" y1="285" x2="342" y2="285" stroke="#9ca3af" strokeWidth="1" opacity="0.6" />
      <line x1="328" y1="291" x2="340" y2="291" stroke="#9ca3af" strokeWidth="1" opacity="0.6" />

      {/* DJF(W) label on mic handle */}
      <rect x="324" y="302" width="20" height="12" rx="2" fill="url(#badgeGrad)" />
      <text x="334" y="311" textAnchor="middle" fill="#00072a" fontSize="5" fontWeight="bold" fontFamily="sans-serif">DJF(W)</text>

      {/* ── Mic sound waves (animated) ── */}
      <g opacity="0.7" filter="url(#glow)">
        <path d="M350 265 Q360 272 360 279 Q360 286 350 293" stroke="#f6be3b" strokeWidth="2" fill="none" strokeLinecap="round">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
        </path>
        <path d="M357 258 Q372 268 372 279 Q372 290 357 300" stroke="#f6be3b" strokeWidth="2" fill="none" strokeLinecap="round">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
        </path>
        <path d="M364 251 Q384 264 384 279 Q384 294 364 307" stroke="#f6be3b" strokeWidth="1.5" fill="none" strokeLinecap="round">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
        </path>
      </g>

      {/* ── Notepad in left hand ── */}
      {/* Left arm */}
      <path
        d="M165 278 Q145 282 130 300 Q115 318 108 340"
        stroke="url(#jacketGrad)" strokeWidth="30" fill="none" strokeLinecap="round"
      />
      {/* Notepad */}
      <rect x="70" y="315" width="62" height="78" rx="4" fill="#f8f7f4" filter="url(#shadow)" />
      <rect x="70" y="315" width="62" height="10" rx="4" fill="#bc0100" />
      <text x="101" y="323" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">PRESS</text>
      {/* Note lines */}
      <line x1="78" y1="335" x2="124" y2="335" stroke="#d1d5db" strokeWidth="1" />
      <line x1="78" y1="343" x2="124" y2="343" stroke="#d1d5db" strokeWidth="1" />
      <line x1="78" y1="351" x2="124" y2="351" stroke="#d1d5db" strokeWidth="1" />
      <line x1="78" y1="359" x2="124" y2="359" stroke="#d1d5db" strokeWidth="1" />
      <line x1="78" y1="367" x2="110" y2="367" stroke="#d1d5db" strokeWidth="1" />
      {/* Pen */}
      <rect x="122" y="330" width="5" height="50" rx="2.5" fill="#00072a" transform="rotate(8 125 355)" />
      <polygon points="122,378 127,378 124.5,386" fill="#f6be3b" transform="rotate(8 125 355)" />

      {/* Left hand on notepad */}
      <ellipse cx="100" cy="390" rx="18" ry="10" fill="url(#skinGrad)" />

      {/* ── ID Lanyard ── */}
      <path d="M185 272 Q175 295 180 315" stroke="#f6be3b" strokeWidth="2" fill="none" strokeDasharray="4,3" />
      <path d="M235 272 Q245 295 240 315" stroke="#f6be3b" strokeWidth="2" fill="none" strokeDasharray="4,3" />
      {/* ID card */}
      <rect x="190" y="315" width="40" height="30" rx="3" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="190" y="315" width="40" height="9" rx="3" fill="url(#jacketGrad)" />
      <text x="210" y="322" textAnchor="middle" fill="#f6be3b" fontSize="5" fontWeight="bold" fontFamily="sans-serif">DJF(W)</text>
      <circle cx="200" cy="333" r="6" fill="#e8a87c" />
      <line x1="210" y1="330" x2="224" y2="330" stroke="#d1d5db" strokeWidth="1.5" />
      <line x1="210" y1="335" x2="222" y2="335" stroke="#d1d5db" strokeWidth="1.5" />
      <line x1="210" y1="340" x2="220" y2="340" stroke="#d1d5db" strokeWidth="1.5" />

      {/* ── Ground shadow ── */}
      <ellipse cx="200" cy="428" rx="100" ry="8" fill="#00072a" opacity="0.12" />
    </svg>
  );
}
