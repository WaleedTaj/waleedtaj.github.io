import type { ComponentType } from "react";
import type { ProjectSlug } from "@/content/projects";
import { cn } from "@/lib/cn";
import { Bar, Screen, TabBar } from "./phone";

/*
 * Illustrative app screens built from design tokens and the project's tone.
 * They suggest each product's kind of interface; they are not screenshots and
 * are always labelled as mockups where shown. Purely decorative (aria-hidden
 * is applied by the stage that renders them).
 */

/* ---------------------------------------------------------------- SLMS360 */

const slmsModules = ["Attendance", "Payroll", "Leave", "Documents", "Projects", "Reviews"];

function SlmsDashboard() {
  return (
    <Screen>
      <div className="mt-[6cqw] flex items-center gap-[3cqw]">
        <span className="size-[10cqw] rounded-full bg-tone-soft" />
        <div className="flex-1 space-y-[1.6cqw]">
          <span className="block text-[3cqw] text-muted">Good morning</span>
          <Bar className="w-[34cqw] bg-fg/70" />
        </div>
        <span className="size-[7cqw] rounded-[2.4cqw] border border-line" />
      </div>

      <div className="mt-[5cqw] rounded-[5cqw] bg-tone p-[4.5cqw] text-white">
        <span className="block text-[3cqw] opacity-80">Today&apos;s attendance</span>
        <span className="mt-[1.5cqw] block text-[6cqw] font-bold">Checked in</span>
        <div className="mt-[3.5cqw] flex items-center justify-between">
          <span className="rounded-full bg-white/20 px-[2.5cqw] py-[1cqw] text-[2.8cqw] font-semibold">
            ● Location verified
          </span>
          <span className="grid size-[9cqw] grid-cols-3 gap-[0.6cqw] rounded-[1.6cqw] bg-white p-[1.4cqw]">
            {[1, 0, 1, 0, 1, 1, 1, 1, 0].map((on, index) => (
              <span key={index} className={on ? "bg-tone-deep" : ""} />
            ))}
          </span>
        </div>
      </div>

      <div className="mt-[5cqw] grid grid-cols-3 gap-[2.5cqw]">
        {slmsModules.map((label, index) => (
          <div key={label} className="rounded-[3.5cqw] border border-line bg-surface p-[2.5cqw]">
            <span className={cn("block size-[6cqw] rounded-[2cqw]", index === 0 ? "bg-tone" : "bg-tone-soft")} />
            <span className="mt-[2cqw] block truncate text-[2.7cqw] font-semibold">{label}</span>
          </div>
        ))}
      </div>

      <div className="mt-[5cqw] space-y-[2.5cqw]">
        {[0.7, 0.5].map((width, index) => (
          <div key={index} className="flex items-center gap-[3cqw]">
            <span className="size-[7cqw] rounded-full bg-tone-wash ring-1 ring-line" />
            <div className="flex-1 space-y-[1.4cqw]">
              <Bar className="bg-fg/50" />
              <Bar className="w-1/2" />
            </div>
            <span style={{ width: `${width * 14}cqw` }} className="h-[4cqw] rounded-full bg-tone-wash" />
          </div>
        ))}
      </div>
      <TabBar />
    </Screen>
  );
}

function SlmsScan() {
  return (
    <Screen className="bg-tone-night text-white">
      <span className="mt-[7cqw] block text-center text-[4.4cqw] font-bold">Scan to check in</span>
      <span className="mt-[1.5cqw] block text-center text-[3cqw] opacity-70">Point at the campus QR code</span>

      <div className="relative mx-auto mt-[8cqw] aspect-square w-[62cqw]">
        {["top-0 left-0 border-t border-l", "top-0 right-0 border-t border-r", "bottom-0 left-0 border-b border-l", "right-0 bottom-0 border-r border-b"].map(
          (corner) => (
            <span key={corner} className={cn("absolute size-[12cqw] rounded-[2cqw] border-tone [border-width:1.2cqw]", corner)} />
          ),
        )}
        <div className="absolute inset-[11cqw] grid grid-cols-5 gap-[1.2cqw] opacity-80">
          {[1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1].map((on, index) => (
            <span key={index} className={cn("rounded-[0.6cqw]", on ? "bg-white" : "")} />
          ))}
        </div>
        <span className="absolute inset-x-[6cqw] top-1/2 h-[0.8cqw] rounded-full bg-tone shadow-[0_0_4cqw_var(--tone)]" />
      </div>

      <div className="mt-auto space-y-[2.5cqw]">
        <div className="flex items-center gap-[3cqw] rounded-[4cqw] bg-white/10 p-[3.5cqw]">
          <span className="grid size-[8cqw] place-items-center rounded-full bg-tone text-[4cqw]">✓</span>
          <div>
            <span className="block text-[3.4cqw] font-semibold">Location verified</span>
            <span className="block text-[2.8cqw] opacity-70">Within the allowed area</span>
          </div>
        </div>
        <span className="block rounded-[4cqw] bg-white py-[3.5cqw] text-center text-[3.6cqw] font-bold text-tone-night">
          Mark attendance
        </span>
      </div>
    </Screen>
  );
}

/* ------------------------------------------------------ Toddlers App Staff */

const childHues = [32, 350, 200, 140, 260, 60, 20, 180, 300];

function ToddlersClassroom() {
  return (
    <Screen className="bg-tone-wash">
      <div className="mt-[6cqw] flex items-end justify-between">
        <div>
          <span className="block text-[3cqw] text-muted">Classroom</span>
          <span className="block text-[5.6cqw] font-extrabold">Room B</span>
        </div>
        <span className="rounded-full bg-tone px-[3cqw] py-[1.2cqw] text-[2.8cqw] font-bold text-white">7 / 9 in</span>
      </div>

      <div className="mt-[4.5cqw] grid grid-cols-3 gap-[2.5cqw] rounded-[5cqw] bg-bg p-[3.5cqw] shadow-card">
        {childHues.map((hue, index) => (
          <div key={hue} className="flex flex-col items-center gap-[1.4cqw]">
            <span
              className={cn("relative size-[12cqw] rounded-full", index > 6 && "opacity-40")}
              style={{ backgroundColor: `oklch(0.82 0.09 ${hue})` }}
            >
              {index <= 6 && (
                <span className="absolute -right-[0.5cqw] -bottom-[0.5cqw] grid size-[4.4cqw] place-items-center rounded-full bg-tone text-[2.6cqw] text-white ring-[0.8cqw] ring-bg">
                  ✓
                </span>
              )}
            </span>
            <Bar className="w-[10cqw]" />
          </div>
        ))}
      </div>

      <span className="mt-[5cqw] block text-[3.6cqw] font-bold">Today&apos;s activities</span>
      <div className="mt-[2.5cqw] space-y-[2.2cqw]">
        {[
          ["Story time", "09:30", 32],
          ["Outdoor play", "10:15", 140],
          ["Lunch", "12:00", 200],
        ].map(([label, time, hue]) => (
          <div key={label} className="flex items-center gap-[3cqw] rounded-[3.5cqw] bg-bg p-[2.6cqw]">
            <span className="h-[8cqw] w-[1.4cqw] rounded-full" style={{ backgroundColor: `oklch(0.72 0.13 ${hue})` }} />
            <span className="flex-1 text-[3.2cqw] font-semibold">{label}</span>
            <span className="text-[2.8cqw] text-muted">{time}</span>
          </div>
        ))}
      </div>
      <TabBar active={1} />
    </Screen>
  );
}

function ToddlersTimetable() {
  const days = ["M", "T", "W", "T", "F"];
  return (
    <Screen>
      <span className="mt-[6cqw] block text-[5.4cqw] font-extrabold">Timetable</span>
      <div className="mt-[3.5cqw] flex justify-between">
        {days.map((day, index) => (
          <span
            key={index}
            className={cn(
              "grid size-[10cqw] place-items-center rounded-full text-[3.2cqw] font-bold",
              index === 2 ? "bg-tone text-white" : "bg-surface text-muted",
            )}
          >
            {day}
          </span>
        ))}
      </div>

      <div className="relative mt-[5cqw] flex-1 space-y-[2.4cqw] pl-[11cqw]">
        {["08", "09", "10", "11", "12"].map((hour, index) => (
          <span key={hour} className="absolute left-0 text-[2.6cqw] text-muted" style={{ top: `${index * 21}%` }}>
            {hour}:00
          </span>
        ))}
        {[
          [22, 140],
          [34, 32],
          [16, 260],
          [24, 350],
        ].map(([height, hue], index) => (
          <div
            key={index}
            className="rounded-[3.5cqw] p-[2.5cqw]"
            style={{ height: `${height}cqw`, backgroundColor: `oklch(0.9 0.05 ${hue})` }}
          >
            <span className="block h-[2cqw] w-[24cqw] rounded-full" style={{ backgroundColor: `oklch(0.5 0.12 ${hue})` }} />
            <span className="mt-[1.6cqw] block h-[1.6cqw] w-[14cqw] rounded-full" style={{ backgroundColor: `oklch(0.5 0.12 ${hue} / 0.4)` }} />
          </div>
        ))}
      </div>
      <TabBar active={2} />
    </Screen>
  );
}

/* --------------------------------------------------------------- DeenLink */

/** Right-aligned bars standing in for Arabic script; no real text is shown. */
function ScriptLines({ widths }: { widths: number[] }) {
  return (
    <div className="flex flex-col items-end gap-[2.6cqw]">
      {widths.map((width, index) => (
        <div key={index} className="flex w-full items-center justify-end gap-[2cqw]">
          {index % 2 === 1 && (
            <span className="grid size-[5cqw] shrink-0 place-items-center rounded-full border border-tone-ink/60 text-[2.2cqw] text-tone-ink">
              {Math.ceil(index / 2)}
            </span>
          )}
          <span className="h-[2.6cqw] rounded-full bg-fg/70" style={{ width: `${width}%` }} />
        </div>
      ))}
    </div>
  );
}

function DeenlinkReader() {
  return (
    <Screen className="bg-tone-wash">
      <div className="mt-[6cqw] flex items-center justify-between">
        <span className="text-[3cqw] text-muted">‹ Back</span>
        <span className="text-[3.6cqw] font-bold">Reading</span>
        <span className="h-[5cqw] w-[3.6cqw] rounded-b-[0.6cqw] bg-tone [clip-path:polygon(0_0,100%_0,100%_100%,50%_75%,0_100%)]" />
      </div>

      <div className="mt-[5cqw] rounded-t-[30cqw] rounded-b-[4cqw] border border-tone/40 bg-bg px-[5cqw] pt-[9cqw] pb-[5cqw]">
        <span className="mx-auto block h-[2.4cqw] w-[30cqw] rounded-full bg-tone-ink/70" />
        <div className="mt-[6cqw]">
          <ScriptLines widths={[92, 78, 100, 64, 86]} />
        </div>
        <div className="mt-[5cqw] space-y-[1.8cqw] border-t border-line pt-[4cqw]">
          <Bar className="bg-fg/25" />
          <Bar className="w-4/5 bg-fg/25" />
          <Bar className="w-3/5 bg-fg/25" />
        </div>
      </div>

      <div className="mt-auto rounded-[5cqw] bg-tone-deep p-[3.5cqw] text-bg">
        <div className="flex items-center gap-[3cqw]">
          <span className="grid size-[9cqw] place-items-center rounded-full bg-tone text-[3.4cqw] text-white">▶</span>
          <div className="flex-1">
            <span className="block h-[1.2cqw] rounded-full bg-bg/25">
              <span className="block h-full w-2/5 rounded-full bg-tone" />
            </span>
            <span className="mt-[1.6cqw] flex justify-between text-[2.4cqw] opacity-70">
              <span>1:12</span>
              <span>3:05</span>
            </span>
          </div>
        </div>
      </div>
    </Screen>
  );
}

function DeenlinkLibrary() {
  return (
    <Screen>
      <span className="mt-[6cqw] block text-[5.4cqw] font-extrabold">Library</span>
      <div className="mt-[3cqw] flex gap-[2cqw] text-[2.8cqw] font-semibold">
        {["English", "اردو", "عربي"].map((label, index) => (
          <span
            key={label}
            className={cn("rounded-full px-[3cqw] py-[1.2cqw]", index === 0 ? "bg-tone text-white" : "bg-surface text-muted")}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="mt-[5cqw] flex items-center gap-[4cqw] rounded-[5cqw] bg-tone-wash p-[4cqw]">
        <span className="relative grid size-[20cqw] shrink-0 place-items-center rounded-full border-[1.6cqw] border-tone-soft">
          <span className="absolute inset-[-1.6cqw] rounded-full border-[1.6cqw] border-tone [clip-path:polygon(50%_0,100%_0,100%_100%,0_100%,0_60%,50%_50%)]" />
          <span className="text-[5cqw] font-extrabold">33</span>
        </span>
        <div>
          <span className="block text-[3.6cqw] font-bold">Tasbeeh</span>
          <span className="mt-[1cqw] block text-[2.8cqw] text-muted">Tap to count</span>
        </div>
      </div>

      <div className="mt-[4.5cqw] divide-y divide-line">
        {["Quran", "Hadith", "Duas", "Adhkar"].map((label, index) => (
          <div key={label} className="flex items-center gap-[3cqw] py-[2.8cqw]">
            <span className="grid size-[8cqw] place-items-center rounded-[2.4cqw] bg-tone-wash text-[2.8cqw] font-bold text-tone-ink">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 text-[3.4cqw] font-semibold">{label}</span>
            {index === 2 && <span className="text-[2.6cqw] font-semibold text-tone-ink">Last read</span>}
            <span className="text-[3cqw] text-muted">›</span>
          </div>
        ))}
      </div>
      <TabBar active={1} />
    </Screen>
  );
}

/* --------------------------------------------------------- Service Square */

function ServiceDiscover() {
  return (
    <Screen>
      <span className="mt-[6cqw] block text-[3cqw] text-muted">Find a professional</span>
      <span className="block text-[5.4cqw] font-extrabold">Services near you</span>

      <div className="mt-[4cqw] flex items-center gap-[2.5cqw] rounded-[4cqw] border border-line bg-surface px-[3.5cqw] py-[3cqw]">
        <span className="size-[3.6cqw] rounded-full border-[0.8cqw] border-muted" />
        <span className="text-[3cqw] text-muted">Search services</span>
      </div>

      <div className="mt-[4cqw] grid grid-cols-4 gap-[2.5cqw]">
        {["Cleaning", "Repairs", "Tutors", "Care"].map((label, index) => (
          <div key={label} className="flex flex-col items-center gap-[1.5cqw]">
            <span className={cn("size-[13cqw] rounded-[4cqw]", index === 0 ? "bg-tone" : "bg-tone-wash ring-1 ring-line")} />
            <span className="text-[2.5cqw] font-semibold">{label}</span>
          </div>
        ))}
      </div>

      <span className="mt-[5cqw] block text-[3.6cqw] font-bold">Professionals</span>
      <div className="mt-[2.5cqw] space-y-[2.5cqw]">
        {[0.6, 0.45, 0.55].map((width, index) => (
          <div key={index} className="flex items-center gap-[3cqw] rounded-[4cqw] border border-line p-[2.8cqw]">
            <span className="size-[10cqw] rounded-[3cqw] bg-tone-soft" />
            <div className="flex-1 space-y-[1.6cqw]">
              <span className="block h-[2.2cqw] rounded-full bg-fg/70" style={{ width: `${width * 100}%` }} />
              <Bar className="w-2/5" />
            </div>
            <span className="rounded-full bg-tone px-[2.8cqw] py-[1.2cqw] text-[2.6cqw] font-bold text-white">Book</span>
          </div>
        ))}
      </div>
      <TabBar />
    </Screen>
  );
}

function ServiceRequest() {
  const steps = ["Requested", "Accepted", "Scheduled", "Completed"];
  return (
    <Screen className="bg-tone-wash">
      <span className="mt-[6cqw] block text-[3cqw] text-muted">Request #2048</span>
      <span className="block text-[5.4cqw] font-extrabold">Home cleaning</span>

      <ol className="mt-[5cqw] rounded-[5cqw] bg-bg p-[4cqw] shadow-card">
        {steps.map((step, index) => (
          <li key={step} className="relative flex items-center gap-[3cqw] pb-[3.6cqw] last:pb-0">
            {index < steps.length - 1 && (
              <span className={cn("absolute top-[5cqw] left-[2.4cqw] h-[calc(100%-4cqw)] w-[0.6cqw]", index < 2 ? "bg-tone" : "bg-line")} />
            )}
            <span
              className={cn(
                "relative size-[5.4cqw] shrink-0 rounded-full border-[0.8cqw]",
                index < 2 ? "border-tone bg-tone" : index === 2 ? "border-tone bg-bg" : "border-line bg-bg",
              )}
            />
            <span className={cn("text-[3.2cqw] font-semibold", index > 2 && "text-muted")}>{step}</span>
          </li>
        ))}
      </ol>

      <div className="mt-[4cqw] flex items-center gap-[3cqw] rounded-[4cqw] bg-bg p-[3.2cqw]">
        <span className="grid h-[11cqw] w-[10cqw] place-items-center rounded-[2.6cqw] bg-tone text-[2.6cqw] leading-none font-bold text-white">
          SAT
          <br />
          14
        </span>
        <div className="flex-1 space-y-[1.6cqw]">
          <Bar className="w-3/5 bg-fg/60" />
          <Bar className="w-2/5" />
        </div>
      </div>

      <div className="mt-[4cqw] space-y-[2cqw]">
        <span className="block w-[62%] rounded-[3.5cqw] rounded-bl-[1cqw] bg-bg px-[3cqw] py-[2.4cqw]">
          <Bar className="bg-fg/30" />
        </span>
        <span className="ml-auto block w-[50%] rounded-[3.5cqw] rounded-br-[1cqw] bg-tone px-[3cqw] py-[2.4cqw]">
          <span className="block h-[2cqw] rounded-full bg-white/70" />
        </span>
      </div>
      <TabBar active={2} />
    </Screen>
  );
}

/** Two illustrative screens per project: [primary, secondary]. */
export const mockupScreens: Record<ProjectSlug, [ComponentType, ComponentType]> = {
  slms360: [SlmsDashboard, SlmsScan],
  "toddlers-app-staff": [ToddlersClassroom, ToddlersTimetable],
  deenlink: [DeenlinkReader, DeenlinkLibrary],
  "service-square": [ServiceDiscover, ServiceRequest],
};

/** Gallery captions for the mockup screens above, in the same order. */
export const mockupCaptions: Record<ProjectSlug, [string, string]> = {
  slms360: ["Staff dashboard", "QR check-in with location verification"],
  "toddlers-app-staff": ["Classroom attendance and activities", "Weekly timetable"],
  deenlink: ["Reading view with audio", "Library, Tasbeeh and last read"],
  "service-square": ["Service discovery", "Request progress and chat"],
};
