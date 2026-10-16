# HAMD Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready bilingual (EN/AR) agency website for HAMD FOREIGN EMPLOYMENT AGENT PLC using Next.js 14.

**Architecture:** Single-page multi-section Next.js 14 App Router site. Language state lives in a client-side React context that also controls the `dir` attribute on `<html>`. All UI strings are centralized in a translations file consumed via a custom hook.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, lucide-react, Google Fonts (Inter + Noto Naskh Arabic)

**Spec:** `docs/superpowers/specs/2026-10-14-hamd-website-design.md`

## Global Constraints

- Next.js version: 14.x (App Router, not Pages Router)
- TypeScript strict mode
- Tailwind CSS with RTL variant enabled
- No external UI libraries except lucide-react for icons
- All hardcoded strings must go through translations/index.ts
- Colors: navy #1a2744, gold #c9a227, white #ffffff, light-gray #f8f9fa
- Font: Inter (Latin), Noto Naskh Arabic (Arabic) via next/font/google
- Mobile-first responsive design

## Review Focus

1. RTL layout flip — Arabic mode must mirror layout, not just swap text
2. Hydration mismatch — dir/lang on html set client-side; suppressHydrationWarning required
3. Mobile hamburger — must close when nav link clicked
4. Contact form — must preventDefault, no page reload
5. Arabic font — must apply only in RTL mode via CSS selector
