"use client";

import { useState } from "react";
import { LiquidGlassButton } from "./liquid-glass-button";
import { } from "@/lib/site";

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

  const bottleCost = 59.99;

  return (
    <div className="premium-card border-neural/30 p-8 md:p-10">
      <div className="font-mono-data text-xs uppercase tracking-[2px] text-neural">YOUR FOCUS ROI</div>
      <h3 className="mt-2 font-heading text-3xl font-extrabold text-white">What is 6+ hrs of clean focus worth… to <span className="text-neural">you</span>?</h3>
      <p className="mt-1 text-sm text-white/70">Slide your reality. See the real cost of brain fog for students, professionals, and creators — then the life-changing ROI of one bottle.</p>

      <div className="mt-8 space-y-8">
        {/* Hours lost slider */}
        <div>
          <div className="flex justify-between text-sm mb-2">
            <div>Hours lost to fog or distractions each week (school, work, or life)</div>
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
          <div className="flex justify-between text-sm mb-2">
            <div>What an extra focused hour is worth to your business, career, or goals</div>
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
      <div className="mt-9 rounded-xl border border-neural/20 bg-black/30 p-6">
        <div className="text-xs uppercase tracking-widest text-silver/50">Conservative recovery (we use 65%)</div>

        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3 text-center">
          <div>
            <div className="text-4xl font-extrabold text-white tabular-nums">${weeklyGain}</div>
            <div className="text-xs text-silver/60">extra per week</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-white tabular-nums">${monthlyGain}</div>
            <div className="text-xs text-silver/60">extra per month</div>
          </div>
          <div className="sm:border-l border-border sm:pl-4">
            <div className="text-4xl font-extrabold text-neural tabular-nums">${yearlyGain}</div>
            <div className="text-xs text-neural/80">extra per year (or lost if you do nothing)</div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm">
          One bottle costs <span className="font-bold text-white">${bottleCost}</span>.
          <span className="block text-neural">Payback in &lt; 1 day for most students and professionals.</span>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <LiquidGlassButton href="/shop">
          Stop losing ${weeklyGain} every week — Buy Focus Mode
        </LiquidGlassButton>
      </div>
      <p className="mt-3 text-center text-[10px] text-silver/50">Numbers are illustrative — but the cost of staying foggy is real for students, professionals, and creators alike.</p>
    </div>
  );
}
