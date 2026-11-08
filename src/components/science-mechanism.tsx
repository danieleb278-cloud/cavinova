import { useId } from "react";
import "./science-mechanism.css";

const bubbles = [
  [145, 225, 19],
  [218, 200, 27],
  [286, 224, 16],
  [357, 191, 37],
  [438, 219, 21],
  [510, 200, 30],
  [582, 225, 16],
];

const particles = [
  [164, 246, 4],
  [238, 236, 5],
  [305, 244, 4],
  [337, 226, 4],
  [390, 238, 6],
  [456, 246, 4],
  [477, 231, 5],
  [553, 241, 4],
];

export function ScienceMechanism({
  step,
  title,
  description,
}: {
  step: number;
  title: string;
  description: string;
}) {
  const id = useId();
  const paint = (name: string) => `url(#${id}-${name})`;

  return (
    <svg
      viewBox="0 0 720 410"
      role="img"
      aria-labelledby={`${id}-title ${id}-desc`}
      className="block h-auto w-full"
    >
      <title id={`${id}-title`}>{title}</title>
      <desc id={`${id}-desc`}>{description}</desc>
      <defs>
        <linearGradient id={`${id}-background`} x2="1" y2="1" gradientUnits="objectBoundingBox">
          <stop stopColor="#fff4f7" />
          <stop offset="1" stopColor="#dcf4f0" />
        </linearGradient>
        <linearGradient id={`${id}-skin`} x1="0" x2="0" y2="1">
          <stop stopColor="#f8cbd0" />
          <stop offset="1" stopColor="#eaa6b1" />
        </linearGradient>
        <linearGradient id={`${id}-deep`} x1="0" x2="0" y2="1">
          <stop stopColor="#9ddbd4" />
          <stop offset="1" stopColor="#cceee8" />
        </linearGradient>
        <linearGradient id={`${id}-serum`} x1="0" x2="0" y2="1">
          <stop stopColor="#fff0f5" stopOpacity=".68" />
          <stop offset="1" stopColor="#f296b4" stopOpacity=".77" />
        </linearGradient>
        <radialGradient id={`${id}-bubble`} cx=".32" cy=".24" r=".75">
          <stop stopColor="#fff" />
          <stop offset=".36" stopColor="#fce3ee" />
          <stop offset=".84" stopColor="#ed92b5" />
          <stop offset="1" stopColor="#ce648e" />
        </radialGradient>
      </defs>
      <rect width="720" height="410" fill={paint("background")} />
      <path d="M0 326 Q180 314 360 327 T720 325 V410 H0Z" fill={paint("deep")} />
      <g fill="none" stroke="#69b3ae" strokeOpacity=".48" strokeWidth="2">
        {Array.from({ length: 9 }, (_, i) => (
          <ellipse key={i} cx={i * 91 - 3} cy={i % 2 ? 383 : 366} rx="48" ry="28" />
        ))}
      </g>
      <path
        d="M0 267 Q180 258 360 266 T720 266 V326 Q540 340 360 327 T0 326Z"
        fill={paint("skin")}
      />
      <g stroke="#fff5f7" strokeOpacity=".75" fill="#fbe4e6" fillOpacity=".55">
        {[272, 290, 308].map((y, row) =>
          Array.from({ length: 10 }, (_, column) => (
            <rect
              key={`${row}-${column}`}
              x={column * 82 - (row % 2 ? 42 : 5)}
              y={y}
              width="78"
              height="14"
              rx="7"
            />
          )),
        )}
      </g>
      <path
        d="M0 265 C97 261 114 240 175 249 S242 244 306 249 S414 245 461 249 S554 241 595 250 S676 255 720 265 V268 Q540 276 360 268 T0 269Z"
        fill={paint("serum")}
        stroke="#eaa3bb"
        strokeWidth="1.5"
      />

      {step >= 1 && (
        <g data-science-layer="waves" fill="none" stroke="#299e9c" strokeLinecap="round">
          {[0, 1, 2, 3].map((band) => (
            <path
              key={band}
              className="science-wave"
              style={{ animationDelay: `${band * 100}ms` }}
              opacity={0.75 - band * 0.12}
              strokeWidth={4 - band * 0.45}
              d={`M${268 - band * 29} ${41 + band * 24} Q360 ${111 + band * 26} ${452 + band * 29} ${41 + band * 24}`}
            />
          ))}
        </g>
      )}

      <g data-science-layer="bubbles" fill={paint("bubble")} stroke="#d47a9e" strokeWidth="1.5">
        {bubbles.map(([x, y, radius], index) => (
          <g key={x} transform={`translate(${x} ${y})`}>
            <g
              className={
                step >= 1 ? (step === 1 ? "science-bubble-soft" : "science-bubble") : undefined
              }
              style={{ animationDelay: `${index * 65}ms` }}
            >
              <circle r={radius} />
              <ellipse
                cx={-(radius ?? 0) * 0.32}
                cy={-(radius ?? 0) * 0.42}
                rx={(radius ?? 0) * 0.27}
                ry={(radius ?? 0) * 0.13}
                fill="#fff"
                stroke="none"
                opacity=".83"
                transform="rotate(-30)"
              />
            </g>
          </g>
        ))}
      </g>

      {step >= 2 && (
        <g data-science-layer="ripples" fill="none" stroke="#278f90" strokeWidth="2">
          {[218, 357, 510].map((x, index) => (
            <g key={x} transform={`translate(${x} 251)`}>
              <ellipse
                className="science-ripple"
                style={{ animationDelay: `${index * 150}ms` }}
                rx="38"
                ry="8"
                opacity=".65"
              />
              <ellipse rx="52" ry="12" opacity=".32" />
            </g>
          ))}
        </g>
      )}

      {step === 3 && (
        <g
          data-science-layer="delivery-guides"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          opacity=".85"
        >
          {[274, 360, 444].map((x) => (
            <path key={x} d={`M${x} 265 v57 m-7 -8 7 8 7 -8`} />
          ))}
        </g>
      )}
      <g data-science-layer="ingredients" fill="#c4497b" stroke="#fff4f8" strokeWidth="1.5">
        {particles.map(([x, y, radius], index) => {
          const moving = step === 3 && index > 0 && index < particles.length - 1;
          const finalY = moving ? 282 + (index % 3) * 19 : y;
          return (
            <circle
              key={x}
              cx={x}
              cy={finalY}
              r={radius}
              className={moving ? "science-ingredient" : undefined}
              style={
                moving
                  ? ({
                      "--science-travel": `${(y ?? 0) - (finalY ?? 0)}px`,
                      animationDelay: `${index * 110}ms`,
                    } as React.CSSProperties)
                  : undefined
              }
            />
          );
        })}
      </g>
      <g fill="#28545a" fontFamily="system-ui, sans-serif" fontSize="21" fontWeight="600">
        <text x="21" y="35">
          Concept illustration
        </text>
        <text x="21" y="356">
          Outer skin barrier
        </text>
        <path d="M135 335 153 316" fill="none" stroke="#28545a" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
