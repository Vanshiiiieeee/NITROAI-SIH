What Was Built
A fully interactive, dark-theme SOC dashboard prototype for SIH 2026 Problem Statement 26155 — AI-Driven Multi-Vendor Network Security Compliance Auditor (NTRO).

Stack: Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · Lucide React · TypeScript

Views & Features
1. 🏠 Executive Dashboard
4 KPI cards — Total Devices (117), Critical Findings (2), Needs AI Training (1), Compliant Checks (1,284)
Circular gauge charts for all 4 frameworks with animated progress bars:
CIS Benchmarks: 72% (emerald)
NIST SP 800-53: 88% (blue)
DISA STIGs: 61% (orange)
ISO/IEC 27001: 79% (purple)
Vendor Distribution bar chart — Cisco (45), Palo Alto (30), Fortinet (15), Juniper (10), Arista (7), SONiC (5), AWS (5)
Device Health mini-grid — 84 Healthy / 23 Warnings / 10 Critical
Top Critical Findings table with 8 mock findings:
Framework filter tabs (All / CIS / NIST / STIG / ISO / AI)
Amber-highlighted SONiC row with "Teach AI" button → navigates to Active Learning GUI
Remediate buttons for standard FAIL rows
Severity badges: Critical (red) / High (orange) / Medium (amber) / Unknown (amber)
2. 🧠 Active Learning GUI (Crown Jewel)
Split-screen interface demonstrating the core SIH innovation:

Left Pane — Raw CLI Syntax:

Styled terminal window showing SONiC OS 202405 config
set system custom-timeout 900 highlighted in amber with "Unmapped Semantic Token" label
Second unrecognized token also flagged
Right Pane — AI Normalization Assistant:

Dropdown 1: Mapping Target (Session Management / ACL / Cryptographic Suite / Audit Logging / Routing Protocol Security)
Dropdown 2: Category Definition (exec-timeout / idle-timeout / session-limit / keepalive-interval)
Two compliance checkboxes: CIS Rule 4.2 (shows 900s ❌ violation) + NIST AC-12
"Train Model" button → animated progress bar → green success message: "Heuristics updated for SONiC OS. New parsing logic applied system-wide."
Training History table — 3 past training entries with token → mapping → framework

3. 📤 Unified Ingestion Portal
Supported formats grid — 8 vendor families shown as chips
Drag-and-drop upload zone — drag state + click-to-simulate interaction
AI Normalization Stream terminal — live streaming log simulation with color-coded output:
[System] — slate · [AI] — blue · [Check] success — emerald · [Warning] — amber · [Error] — red
15 log entries streaming over ~7 seconds
Ingestion Summary — 3-card grid showing per-file results after simulation
Navigation
Persistent sidebar with NTRO branding, AI Engine Online status pill, nav links, framework score mini-dashboard
Sticky top bar — breadcrumb, search bar, notification bell, user avatar
Tab switching is instant with fade-in animation
To Keep the Server Running
The dev server runs as a background daemon. To restart manually:

npm run dev
Recommended: Set C:\Users\Vansh Bagga\.gemini\antigravity\scratch\ntro-auditor as your active workspace in the IDE.
