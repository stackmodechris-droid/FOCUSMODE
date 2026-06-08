"use client";

import { trackViewContent } from "@/lib/site";
import { useEffect } from "react";

export function TrackViewContent({
  name,
  value,
  currency = "USD",
  contentIds,
}: {
  name: string;
  value: number;
  currency?: string;
  contentIds?: string[];
}) {
  useEffect(() => {
    trackViewContent({ name, value, currency, contentIds });
  }, [name, value, currency, contentIds]);
  return null;
}
