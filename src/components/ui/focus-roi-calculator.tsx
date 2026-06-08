"use client";

import { } from "@/lib/site";
import { useState } from "react";
import { LiquidGlassButton } from "./liquid-glass-button";

/**
 * Fun, interactive ROI calculator.
 * Makes the abstract "focus" painfully concrete in $ terms.
 * Highest-converting pages always do this: turn benefit into personal math.
 * Gender neutral, exciting language.
 */
export function FocusRoiCalculator() {
  const [hoursLost, setHoursLost] = useState(9); // per week
  const [hourlyValue, setHourlyValue] = useState(85);

  const weeklyGain = Math.round(hoursLost * 0.65 * hourlyValue); // conservative 65% recovery
  const monthlyGain = weeklyGain * 4;
  const yearlyGain = monthlyGain * 12;

  const bottleCost = 39.99;

  return (
    <div className="premium-card border-neural/30 p-8 md:p-10">
      <div className="font-mono-data text-xs uppercase tracking-[2px] text-neural">YOUR FOCUS ROI</div>
      <h3 className="mt-2 font-heading text-3xl font-extrabold text-white">What is 6+ hrs of clean focus worth… to <span className="text-neural">you</span>?</h3>
      <p className="mt-1 text-sm text-white/70">Slide your reality. See the real cost of brain fog for students, professionals, and creators — then the life-changing ROI of one bottle.</p>

      <div className="mt-8 space-y-8">
        {/* Hours lost slider */}
        <div>
          <div className="flex flex-wrap justify-between gap-x-3 gap-y-1 text-sm mb-2">
            <div className="min-w-[60%]">Hours lost to fog or distractions each week</div>
            <div className="font-mono-data text-neural font-bold tabular-nums">{hoursLost} hrs</div>
          </div>
          <input
            type="range"
            min={2}
            max={22}
            step={1}
            value={hoursLost}
            onChange={e => setHoursLost(parseInt(e.target.value))}
            className="w-full accent-neural"
          />
          <div className="flex justify-between text-[10px] text-silver/50 mt-1">
            <div>Light load</div><div>High performer</div>
          </div>
        </div>

        {/* Hourly value */}
        <div>
          <div className="flex flex-wrap justify-between gap-x-3 gap-y-1 text-sm mb-2">
            <div className="min-w-[60%]">What an extra focused hour is worth to you</div>
            <div className="font-mono-data text-neural font-bold tabular-nums">${hourlyValue}</div>
          </div>
          <input
            type="range"
            min={25}
            max={280}
            step={5}
            value={hourlyValue}
            onChange={e => setHourlyValue(parseInt(e.target.value))}
            className="w-full accent-neural"
          />
          <div className="flex justify-between text-[10px] text-silver/50 mt-1">
            <div>Student / early career</div><div>Executive / founder</div>
          </div>
        </div>
      </div>

      {/* Results - big and emotional */}
      <div className="mt-9 rounded-xl border border-neural/20 bg-linear-to-br from-[#f0f9fc] via-white to-[#f6fbfd] p-6 relative overflow-hidden">
        {/* Soft neural glow accent for premium depth */}
        <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-neural/10 blur-[50px]" />
        <div aria-hidden className="pointer-events-none absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-bolt/10 blur-[40px]" />

        <div className="relative z-10 text-xs uppercase tracking-widest text-gray-500">Conservative recovery (we use 65%)</div>

        <div className="relative z-10 mt-4 grid grid-cols-1 gap-5 sm:grid-cols-3 text-center">
          <div className="rounded-lg bg-white/60 p-3">
            <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 tabular-nums">${weeklyGain}</div>
            <div className="mt-1 text-xs text-gray-500">extra per week</div>
          </div>
          <div className="rounded-lg bg-white/60 p-3">
            <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 tabular-nums">${monthlyGain}</div>
            <div className="mt-1 text-xs text-gray-500">extra per month</div>
          </div>
          <div className="rounded-lg bg-linear-to-br from-neural/5 to-white p-3 sm:border-l border-gray-200 sm:pl-5">
            <div className="text-3xl sm:text-4xl font-extrabold text-neural tabular-nums">${yearlyGain}</div>
            <div className="mt-1 text-xs text-neural/70">extra per year (or lost if you do nothing)</div>
          </div>
        </div>

        <div className="relative z-10 mt-6 text-center text-sm text-gray-700">
          One bottle costs <span className="font-bold text-gray-900">${bottleCost}</span>.
          <span className="block text-neural font-medium mt-0.5">Payback in &lt; 1 day for most students and professionals.</span>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <LiquidGlassButton href="/focus-mode">
          Stop losing ${weeklyGain} every week — Buy Focus Mode
        </LiquidGlassButton>
      </div>
      <p className="mt-3 text-center text-[10px] text-silver/50">Numbers are illustrative — but the cost of staying foggy is real for students, professionals, and creators alike.</p>
    </div>
  );
}
