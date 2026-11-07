import { useEffect, useId, useState } from "react";
import {
  Check,
  Droplets,
  FlaskConical,
  LockKeyhole,
  RotateCcw,
  ScanLine,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import "./authentication-machine.css";

type Phase = "empty" | "inserting" | "scanning" | "checking-second" | "authorized" | "failed";

const messages = {
  empty: {
    title: "Insert vials",
    detail: "Both docks are empty. Ultrasound and dispensing are locked.",
    icon: LockKeyhole,
  },
  inserting: {
    title: "Inserting vials",
    detail: "The two single-use vials slide into their separate docks.",
    icon: FlaskConical,
  },
  scanning: {
    title: "Authenticating",
    detail: "The proposed system checks both consumables before allowing treatment setup.",
    icon: ScanLine,
  },
  "checking-second": {
    title: "Checking vial B",
    detail:
      "The microbubble vial is recognized. The active-ingredient vial is still being checked.",
    icon: ScanLine,
  },
  authorized: {
    title: "Treatment configuration loaded.",
    detail:
      "Both vials are recognized. The proposed system would load validated settings and wait for the provider to start.",
    icon: Check,
  },
  failed: {
    title: "Authentication failed.",
    detail:
      "Vial A is recognized. Vial B is unrecognized. Ultrasound and dispensing remain locked.",
    icon: LockKeyhole,
  },
} as const;

const vials = [
  { name: "Vial A · Microbubbles", x: 119, color: "#cf6391", light: "#f8d1e1" },
  { name: "Vial B · Active ingredients", x: 250, color: "#218b8c", light: "#a9e5df" },
] as const;

function vialStatus(phase: Phase, index: number) {
  if (phase === "empty") return "Empty dock";
  if (phase === "inserting") return "Inserting";
  if (phase === "scanning") return "Checking";
  if (phase === "checking-second") return index === 0 ? "Recognized" : "Checking";
  return phase === "failed" && index === 1 ? "Unrecognized" : "Recognized";
}

function MachineIllustration({ phase, revision }: { phase: Phase; revision: number }) {
  const id = useId();
  const fill = (name: string) => `url(#${id}-${name})`;
  const ready = phase === "authorized";
  const failed = phase === "failed";
  const checked = ready || failed;
  return (
    <svg className="block h-auto w-full" viewBox="0 0 900 440" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-shell`} x2="0" y2="1">
          <stop stopColor="#fffdfc" />
          <stop offset=".53" stopColor="#e6e9e8" />
          <stop offset="1" stopColor="#aebfbe" />
        </linearGradient>
        <linearGradient id={`${id}-metal`} x2="0" y2="1">
          <stop stopColor="#faffff" />
          <stop offset=".52" stopColor="#9fb6b6" />
          <stop offset="1" stopColor="#f8ffff" />
        </linearGradient>
        <linearGradient id={`${id}-glass`}>
          <stop stopColor="#fff" stopOpacity=".7" />
          <stop offset=".38" stopColor="#fff" stopOpacity=".06" />
          <stop offset="1" stopColor="#fff" stopOpacity=".35" />
        </linearGradient>
        <linearGradient id={`${id}-screen`} x2="0" y2="1">
          <stop stopColor="#18353d" />
          <stop offset="1" stopColor="#081c24" />
        </linearGradient>
      </defs>

      <ellipse cx="454" cy="414" rx="402" ry="16" fill="#315357" opacity=".16" />
      <rect
        x="48"
        y="81"
        width="805"
        height="325"
        rx="55"
        fill={fill("shell")}
        stroke="#9db4b5"
        strokeWidth="2"
      />
      <path d="M80 376H819" stroke="#fff" strokeWidth="2" opacity=".7" />
      <rect
        x="383"
        y="100"
        width="425"
        height="187"
        rx="25"
        fill="#637a7e"
        stroke="#f8ffff"
        strokeWidth="2"
      />
      <rect x="391" y="108" width="409" height="171" rx="19" fill={fill("screen")} />
      <path d="M411 120H778" stroke="#fff" opacity=".1" />

      {vials.map(({ x, color, light }, index) => {
        const rejected = failed && index === 1;
        const vialChecked = checked || (phase === "checking-second" && index === 0);
        const vialScanning = phase === "scanning" || (phase === "checking-second" && index === 1);
        const indicator = rejected
          ? "#d75580"
          : vialChecked
            ? "#279b83"
            : vialScanning
              ? "#59b8bb"
              : "#a0acaf";
        return (
          <g key={x} transform={`translate(${x} 0)`}>
            <rect
              x="-32"
              y="124"
              width="107"
              height="192"
              rx="22"
              fill="#bacbca"
              stroke="#f3f8f6"
              strokeWidth="3"
            />
            <rect x="-24" y="134" width="91" height="170" rx="16" fill="#29464a" />
            <ellipse cx="21" cy="281" rx="38" ry="15" fill="#142e34" />
            {phase !== "empty" && (
              <g key={revision} className="authentication-vial">
                <rect
                  x="-11"
                  y="170"
                  width="64"
                  height="110"
                  rx="12"
                  fill={light}
                  stroke={color}
                  strokeWidth="2"
                />
                <path
                  d="M-10 208Q21 200 52 208V267Q52 279 40 279H2Q-10 279-10 267Z"
                  fill={color}
                  opacity=".48"
                />
                <rect x="-11" y="170" width="64" height="110" rx="12" fill={fill("glass")} />
                <rect
                  x="-14"
                  y="152"
                  width="70"
                  height="25"
                  rx="6"
                  fill={fill("metal")}
                  stroke={color}
                />
                <path d="M-12 173H54" stroke={color} strokeWidth="5" />
                <circle cx="21" cy="233" r="14" fill="#faffff" opacity=".75" />
                {index === 0 ? (
                  <g fill={color}>
                    <circle cx="16" cy="236" r="3" />
                    <circle cx="24" cy="228" r="4" />
                    <circle cx="28" cy="237" r="2" />
                  </g>
                ) : (
                  <path
                    d="M21 223C18 228 14 232 14 237A7 7 0 0 0 28 237C28 232 24 228 21 223Z"
                    fill={color}
                  />
                )}
              </g>
            )}
            {vialScanning && (
              <path
                className="authentication-scan"
                d="M-20 156H63"
                stroke="#9cf4e9"
                strokeWidth="4"
                strokeLinecap="round"
              />
            )}
            <circle
              cx="21"
              cy="343"
              r={vialChecked ? 16 : 10}
              fill={indicator}
              className={vialChecked ? "authentication-signal" : undefined}
            />
            {vialChecked &&
              (rejected ? (
                <path
                  d="m15 337 12 12m0-12-12 12"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="m13 343 6 6 10-12"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              ))}
          </g>
        );
      })}

      <g opacity={ready ? 1 : 0.68}>
        <path
          d="M784 370Q861 372 843 321Q835 306 803 323"
          fill="none"
          stroke="#59767c"
          strokeWidth="11"
          strokeLinecap="round"
        />
        <rect
          x="548"
          y="312"
          width="262"
          height="42"
          rx="21"
          fill={fill("metal")}
          stroke="#788e90"
          strokeWidth="2"
        />
        <path
          d="M746 317h34"
          stroke={ready ? "#1e9a88" : "#92a4a5"}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <rect
          x="528"
          y="317"
          width="39"
          height="32"
          rx="8"
          fill={ready ? "#b7e8df" : "#c4d2d2"}
          stroke="#59767c"
        />
        <path
          d="M493 320q-12 13 0 26m-13-35q-20 22 0 44"
          fill="none"
          stroke={ready ? "#208f87" : "#859a9b"}
          strokeWidth="4"
          strokeLinecap="round"
          className={ready ? "authentication-signal" : undefined}
        />
      </g>
      <circle
        cx="419"
        cy="341"
        r="12"
        fill={ready ? "#229d87" : failed ? "#d75580" : "#98aaad"}
        className={checked ? "authentication-signal" : undefined}
      />
    </svg>
  );
}

export function AuthenticationMachine() {
  const [phase, setPhase] = useState<Phase>("empty");
  const [run, setRun] = useState<{
    authorized: boolean;
    revision: number;
    reduced: boolean;
  } | null>(null);
  const [revision, setRevision] = useState(0);
  const message = messages[phase];
  const Icon = message.icon;
  const enabled = phase === "authorized";

  useEffect(() => {
    if (!run || run.reduced) return;
    const scan = window.setTimeout(() => setPhase("scanning"), 700);
    const firstVial = window.setTimeout(() => setPhase("checking-second"), 1350);
    const result = window.setTimeout(
      () => setPhase(run.authorized ? "authorized" : "failed"),
      1950,
    );
    return () => {
      window.clearTimeout(scan);
      window.clearTimeout(firstVial);
      window.clearTimeout(result);
    };
  }, [run]);

  function play(authorized: boolean) {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nextRevision = revision + 1;
    setRevision(nextRevision);
    setRun({ authorized, revision: nextRevision, reduced });
    setPhase(reduced ? (authorized ? "authorized" : "failed") : "inserting");
  }

  function reset() {
    setRun(null);
    setPhase("empty");
  }

  return (
    <div className="mt-8 rounded-3xl border bg-card p-3 shadow-soft sm:p-6">
      <div className="rounded-2xl bg-linear-to-br from-accent via-card to-secondary/65 p-2 sm:p-5">
        <div className="relative mx-auto max-w-5xl" data-phase={phase}>
          <MachineIllustration phase={phase} revision={run?.revision ?? revision} />
          <div
            className="absolute left-[44%] top-[26%] flex h-[36%] w-[44%] flex-col items-center justify-center gap-1 px-1 text-center text-white sm:gap-2 sm:px-4"
            aria-hidden="true"
          >
            <Icon
              className={`size-3.5 shrink-0 sm:size-7 lg:size-9 ${phase === "failed" ? "text-blush" : "text-teal"} ${phase === "authorized" || phase === "failed" ? "authentication-signal" : ""}`}
            />
            <p className="text-balance text-[11px] font-semibold leading-tight sm:text-lg lg:text-2xl">
              {message.title}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {vials.map(({ name }, index) => (
          <div
            key={name}
            className={`flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-xl border px-3 py-2 ${index === 0 ? "bg-accent/55" : "bg-secondary/55"}`}
          >
            <span className="font-semibold">{name}</span>
            <span className="text-sm">{vialStatus(phase, index)}</span>
          </div>
        ))}
      </div>
      <div role="status" aria-atomic="true" className="mt-4 rounded-xl border bg-muted/40 p-4">
        <p className="font-semibold">{message.title}</p>
        <p className="mt-1 leading-relaxed text-muted-foreground">{message.detail}</p>
      </div>
      <div aria-label="Simulated treatment control status" className="mt-3 flex flex-wrap gap-2">
        {[
          { label: "Ultrasound", icon: Waves },
          { label: "Dispensing", icon: Droplets },
        ].map(({ label, icon: ControlIcon }) => (
          <span
            key={label}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold ${enabled ? "border-teal/70 bg-secondary" : "bg-muted"}`}
          >
            <ControlIcon aria-hidden className="size-4" />
            {label}: {enabled ? "Enabled in concept" : "Locked"}
          </span>
        ))}
      </div>
      <div
        role="group"
        aria-label="Authentication scenarios"
        className="mt-5 grid gap-2 sm:grid-cols-[1fr_1fr_auto]"
      >
        <Button
          type="button"
          variant="outline"
          className="h-auto min-h-12 whitespace-normal border-primary/50 bg-accent text-base"
          onClick={() => play(true)}
        >
          Try authorized vials
        </Button>
        <Button
          type="button"
          variant="outline"
          className="h-auto min-h-12 whitespace-normal border-primary/50 bg-accent text-base"
          onClick={() => play(false)}
        >
          Try an unrecognized vial
        </Button>
        <Button type="button" variant="ghost" className="min-h-12" onClick={reset}>
          <RotateCcw aria-hidden /> Reset simulation
        </Button>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Concept simulation of proposed control logic. Treatment would also require validated
        operating settings and additional safety controls.
      </p>
    </div>
  );
}
