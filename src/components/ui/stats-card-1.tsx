"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useSpring, type Variants } from "motion/react";
import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const MotionCard = motion.create(Card);

type ChartDataItem = { name: string; value: number; color?: string };

export interface StatsCardProps {
  title: string;
  currentValue: number;
  valuePrefix?: string;
  valuePostfix?: string;
  description: React.ReactNode;
  chartData: ChartDataItem[];
  className?: string;
}

const AnimatedValue = ({ value, prefix = "", postfix = "" }: { value: number; prefix?: string; postfix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { damping: 30, stiffness: 100, mass: 1 });

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [spring, isInView, value]);

  useEffect(() => {
    const unsub = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Intl.NumberFormat("en-US").format(Number(latest.toFixed(0)))}${postfix}`;
      }
    });
    return () => unsub();
  }, [prefix, postfix, spring]);

  return <span ref={ref} />;
};

export function StatsCard({ title, currentValue, valuePrefix, valuePostfix, description, chartData, className }: StatsCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.4 });
  const controls = useAnimation();

  const barVariants: Variants = {
    hidden: { height: "0%" },
    visible: { height: "var(--bar-height, 0%)", transition: { type: "spring", damping: 15, stiffness: 100 } },
  };

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <MotionCard
      className={cn("w-full max-w-sm overflow-hidden premium-card p-6", className)}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex flex-row items-center justify-between pb-2">
        <h3 className="font-mono-data text-[10px] tracking-[1.6px] text-silver/60">{title}</h3>
        <TrendingUp className="h-4 w-4 text-bolt" />
      </div>
      <div>
        <div ref={cardRef} className="flex flex-col gap-4">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white">
              <AnimatedValue value={currentValue} prefix={valuePrefix} postfix={valuePostfix} />
            </h2>
            <p className="text-sm text-silver/60">{description}</p>
          </div>

          <motion.div
            className="flex h-24 w-full items-end gap-2"
            initial="hidden"
            animate={controls}
            transition={{ staggerChildren: 0.1 }}
          >
            {chartData.map((item, index) => (
              <div key={item.name} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
                <motion.div
                  className={cn(
                    "w-full",
                    item.color ? item.color : index === chartData.length - 1 ? "bg-bolt glow-bolt" : "bg-neural/30"
                  )}
                  variants={barVariants}
                  style={{ "--bar-height": `${item.value}%` } as React.CSSProperties}
                />
                <span className="font-mono-data text-[10px] text-silver/50">{item.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </MotionCard>
  );
}
