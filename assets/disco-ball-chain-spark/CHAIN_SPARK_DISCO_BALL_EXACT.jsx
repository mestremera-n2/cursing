import React from 'react'

export function ChainSparkDiscoBallIcon({
  color = '#E5ECFF',
  accent = '#E2E71A',
  sparkle = '#FFFFFF',
  size = 28
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" aria-hidden="true" role="img">
      <path d="M14 2 v7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="11" y="8.6" width="6" height="3.4" rx="1.2" fill={color} opacity="0.85" />
      <circle cx="14" cy="18" r="7.8" fill="none" stroke={color} strokeWidth="2" />
      <path d="M14 12.5 v11 M8.5 18 h11" stroke={color} strokeWidth="1.4" opacity="0.55" />
      <path d="M20.5 8.1 v4.2 M18.4 10.2 h4.2" stroke={sparkle} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="20.5" cy="10.2" r="0.9" fill={accent} />
    </svg>
  )
}

export const CHAIN_SPARK_DISCO_BALL_TOKENS = {
  color: '#E5ECFF',
  accent: '#E2E71A',
  sparkle: '#FFFFFF',
  size: 28
}
