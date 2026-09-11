# SIH 2026 Project

## 1. Project Information

- **Project Title:** NTRO AI-Driven Multi-Vendor Network Security Compliance Auditor
- **PS ID:** SIH26155
- **PS Title:** AI-Driven Multi-Vendor Network Security Compliance Auditor
- **Category:** Software
- **Theme:** Cybersecurity & Blockchain

## 2. Problem Statement

Modern strategic networks managed by organizations like NTRO and NCIIPC run on deeply heterogeneous hardware from dozens of vendors (Cisco, Juniper, Palo Alto, Fortinet, SONiC, etc.). Each device speaks a completely different CLI dialect.

Misconfigurations are the #1 cause of network breaches, yet current auditing tools fail because they rely on:
1. **Manual Checklist Auditing** — Slow, error-prone, and impossible to scale.
2. **Vendor-Locked Enterprise Tools** — Built on thousands of rigid, hard-coded Regular Expressions (Regex) that crash or fail silently when vendor firmware updates or new white-box switches (e.g., SONiC) are introduced.

## 3. Proposed Solution

An **AI-augmented, vendor-agnostic Compliance Engine** that eliminates the hard-coded regex bottleneck. 

It normalizes proprietary CLI syntax from any network vendor into a standardized, vendor-neutral JSON schema (*Security Baseline Model*) using an NLP-driven parser. It then audits configurations against CIS Benchmarks, NIST SP 800-53, DISA STIGs, and ISO 27001 in real time. If unknown CLI syntax is detected, an **Active Learning GUI** allows network admins to map new tokens on the fly without redeploying code.

## 4. Key Features

- **Executive Dashboard:** Real-time compliance scoring across CIS, NIST, DISA STIGs, and ISO 27001 with visual gauges and vendor distribution charts.
- **Active Learning GUI:** Low-code interface to annotate and map unrecognized CLI tokens with AI assistance and zero system redeployment.
- **Unified Ingestion Portal:** Bulk configuration file upload (`.cfg`, `.txt`, `.conf`) with auto-vendor detection and a live AI normalization stream.
- **Multi-Framework Compliance Engine:** Simultaneously evaluates configurations against multiple international security standards.
- **Automated Reporting:** Generates prioritized finding reports with risk severity classifications (Critical/High/Medium) and per-device PDF exports.

## 5. Technology Stack

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Lucide React
- **Backend & AI Engine:** Python, FastAPI, spaCy / HuggingFace Transformers, Pydantic, SQLAlchemy
- **Data Collection:** Netmiko, NAPALM, Paramiko
- **Database & Cache:** PostgreSQL, Redis, Pinecone (Vector Store)
- **Reporting & Deployment:** ReportLab, Docker, Kubernetes

## 6. Architecture

```text
User / Network Admin
        │
        ▼ 
Frontend (Next.js 16 / React 19)
  ├── Executive Dashboard
  ├── Active Learning GUI
  └── Ingestion Portal
        │
        ▼
Backend API & AI Engine (FastAPI / Python)
  ├── NLP Parser (spaCy/HF) ──► Converts CLI to Standard JSON
  ├── Active Learning Engine ──► Heuristic Store (Zero-Redeploy)
  └── Compliance Engine ───────► CIS / NIST / DISA STIG / ISO 27001 Rules
        │
        ▼
Data Layer (PostgreSQL / Vector Store / Redis)
```
## 8. Final Presentation

The technical presentation detailing the project's architecture, methodology, and SIH submission details is tracked in the repository.

See [submission/PRESENTATION.md](submission/PRESENTATION.md) for the presentation details and view links.

## 9. Demo Video

A video demonstration walk-through of the prototype is available:

- **Demo Video:** [Watch 2-Minute Demo Video](https://youtu.be/PtpZAHOmlXg)
- Details are also logged in [submission/DEMO.md](submission/DEMO.md).

## 10. Screenshots / Prototype Photos

Screenshots of the Executive Dashboard, Active Learning GUI, and Ingestion Portal are stored in:

`IN APP SCREENSHOTS/` and `assets/screenshots/`

To render an image in the README:
```markdown
![Dashboard Preview](./IN%20APP%20SCREENSHOTS/dashboard.png)
