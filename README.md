<div align="center">

<img src="https://img.shields.io/badge/NTRO-National%20Technical%20Research%20Organisation-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/SIH%202026-Problem%2026155-red?style=for-the-badge" />
<img src="https://img.shields.io/badge/Theme-Cybersecurity-green?style=for-the-badge" />
<img src="https://img.shields.io/badge/Status-Active%20Development-brightgreen?style=for-the-badge" />

# 🛡️ NTRO AI-Driven Multi-Vendor Network Security Compliance Auditor

### *One Engine. Every Vendor. Zero Blind Spots.*

**An AI-augmented, vendor-agnostic compliance engine that audits heterogeneous network infrastructure against CIS Benchmarks, NIST SP 800-53, DISA STIGs, and ISO/IEC 27001 — simultaneously, in real time.**

</div>

---

## 🚨 The Problem We're Solving

Modern strategic networks — especially those managed by organizations like **NTRO and NCIIPC** — are built on a deeply heterogeneous stack of hardware from dozens of vendors:

| Category | Vendors |
|---|---|
| **Firewalls & SASE** | Palo Alto, Fortinet, Cisco Firepower, Check Point, Juniper SRX, AWS/Azure/GCP cloud-native |
| **Routers & Switches** | Cisco Catalyst/Nexus, HPE Aruba, Juniper EX/MX, Arista, NVIDIA Mellanox, Huawei |
| **White-Box / Disaggregated** | SONiC, Cumulus Linux, Dell, Nokia open networking |
| **Hyperscale / AI Infra** | NVIDIA, Arista, Juniper AI-native switching |

Each of these devices speaks a **completely different CLI dialect**. A "secure SSH configuration" on a Cisco IOS switch looks nothing like the same setting on a Juniper SRX firewall or a SONiC white-box switch.

### 🔴 The Core Challenge

> **Misconfigurations are the #1 cause of network security breaches.**

Current auditing approaches fail in two critical ways:

1. **Manual Checklist Auditing** — Slow, error-prone, doesn't scale. A single network with 100+ devices takes weeks to audit manually against frameworks like CIS or DISA STIGs.

2. **Vendor-Locked Enterprise Tools** — Expensive, rigid, and built for homogeneous environments. They rely on **thousands of hard-coded Regular Expressions** that break the moment a vendor pushes a firmware update or a new white-box switch is onboarded.

### 🧩 The Syntactic Diversity Problem

```
Cisco IOS:        service password-encryption
Juniper JunOS:    set system login password format sha256
Palo Alto PAN-OS: set mgt-config users admin phash ...
SONiC OS:         set system custom-timeout 900   ← AI has never seen this before
```

When an organization adds a new SONiC white-box switch, **existing tools crash silently**. The misconfiguration goes undetected. The network is exposed.

---

## 💡 Our Solution

We built an **AI-augmented, vendor-agnostic Compliance Engine** that eliminates the hard-coded regex bottleneck entirely.

### How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│                    NTRO COMPLIANCE ENGINE                        │
│                                                                  │
│  [Config File] ──► [NLP Normalization] ──► [Vendor-Neutral JSON] │
│                           │                        │             │
│                    [Semantic Parser]         [Compliance Engine] │
│                           │                        │             │
│                   [Unknown Token?]          [CIS / NIST / STIG] │
│                           │                        │             │
│                   [Active Learning GUI]    [Pass/Fail + Reports] │
└─────────────────────────────────────────────────────────────────┘
```

**Three-Stage Pipeline:**

1. **Normalization** — NLP-driven parser converts any vendor's proprietary CLI syntax into a standardized, vendor-neutral JSON schema (our *Security Baseline Model*)
2. **Deviation Analysis** — Compliance engine evaluates the normalized model against user-selected frameworks, producing granular Pass/Fail results with risk severity scores
3. **Active Learning Loop** — When the AI encounters an unrecognized configuration token, it triggers the Interactive Training Interface where admins annotate and map new syntax — **updating the AI's heuristics instantly, without any backend redeployment**

---

## ✨ Key Features

### 🏠 Executive Dashboard
- Real-time compliance scores across **CIS, NIST SP 800-53, DISA STIGs, ISO 27001** simultaneously
- Visual circular gauges + progress bars for each framework
- Vendor distribution analytics — see your entire network fleet at a glance
- Prioritized critical findings table with severity classification (Critical / High / Medium)
- One-click PDF report export per device

### 🧠 Active Learning GUI *(The Crown Jewel)*
The industry's first **low-code AI training interface** for network compliance:
- Split-screen terminal showing raw, unrecognized CLI syntax highlighted in real time
- AI Normalization Assistant with semantic suggestion engine (confidence-scored)
- Map unknown tokens to security categories (Session Management, ACL, Cryptographic Suite, etc.)
- Bind mappings to specific compliance rules (CIS Rule IDs, NIST controls, STIG V-IDs)
- **Zero redeployment** — trained heuristics apply system-wide instantly
- Full training history audit log

### 📤 Unified Ingestion Portal
- Drag-and-drop bulk configuration file upload
- Auto vendor detection with confidence scoring
- Live AI Normalization Stream — real-time console output as configs are parsed
- Supports `.txt`, `.cfg`, `.conf`, `.log` formats from any vendor
- Graceful fallback to Active Learning for unknown syntax — **nothing is lost**

### 📊 Multi-Framework Compliance Engine
| Framework | Description |
|---|---|
| **CIS Benchmarks** | Center for Internet Security hardening guidelines |
| **NIST SP 800-53** | NIST security & privacy controls for federal systems |
| **DISA STIGs** | Defense Information Systems Agency Security Technical Implementation Guides |
| **ISO/IEC 27001** | International information security management standard |

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│  FRONTEND (Next.js 16 · React 19 · Tailwind CSS · TypeScript)    │
│  ┌─────────────┐  ┌──────────────────┐  ┌──────────────────┐    │
│  │  Executive  │  │  Active Learning │  │    Ingestion     │    │
│  │  Dashboard  │  │      GUI         │  │     Portal       │    │
│  └─────────────┘  └──────────────────┘  └──────────────────┘    │
├──────────────────────────────────────────────────────────────────┤
│  AI ENGINE (Python · FastAPI)                                     │
│  ┌──────────────┐  ┌───────────────┐  ┌─────────────────────┐   │
│  │  NLP Parser  │  │  Compliance   │  │  Active Learning    │   │
│  │  (spaCy/HF)  │  │  Rule Engine  │  │  Heuristic Store    │   │
│  └──────────────┘  └───────────────┘  └─────────────────────┘   │
├──────────────────────────────────────────────────────────────────┤
│  DATA LAYER                                                       │
│  ┌──────────────┐  ┌───────────────┐  ┌─────────────────────┐   │
│  │  PostgreSQL  │  │  Vector Store │  │  Redis (Cache)      │   │
│  │  (Findings)  │  │  (Embeddings) │  │  (Session State)    │   │
│  └──────────────┘  └───────────────┘  └─────────────────────┘   │
└──────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started (Prototype)

This repository contains the **fully functional frontend prototype** with mock data demonstrating all core features.

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-team/ntro-auditor.git
cd ntro-auditor

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the prototype.

### Demo Walkthrough
1. **Executive Dashboard** — View compliance scores, vendor distribution, and critical findings
2. Click **"Teach AI"** on the amber SONiC row → Experience the Active Learning GUI
3. **Ingestion Portal** → Click the upload zone to watch the live AI normalization stream

---

## 🗺️ Full Deployment Roadmap

The current prototype demonstrates the complete UI/UX and interaction model. Full production deployment will include:

| Milestone | Feature | Status |
|---|---|---|
| ✅ **M1** | Interactive frontend prototype with all 3 views | **Complete** |
| 🔄 **M2** | Python FastAPI backend + NLP normalization engine | *In Progress* |
| 🔄 **M3** | CIS / NIST / STIG / ISO compliance rule engine | *In Progress* |
| 📋 **M4** | Real device config ingestion via Netmiko/NAPALM | *Planned* |
| 📋 **M5** | Active Learning heuristic persistence layer | *Planned* |
| 📋 **M6** | PDF report generation (ReportLab) | *Planned* |
| 📋 **M7** | Role-based access control + audit logging | *Planned* |
| 📋 **M8** | Production deployment + NTRO integration | *Planned* |

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Lucide React |
| **AI/ML** | Python, spaCy / HuggingFace Transformers, Custom NLP Pipeline |
| **Backend** | FastAPI, Pydantic, SQLAlchemy |
| **Data Collection** | Netmiko, NAPALM, Paramiko |
| **Database** | PostgreSQL, Redis, Pinecone (Vector Store) |
| **Reporting** | ReportLab, FPDF |
| **Deployment** | Docker, Kubernetes, Nginx |

---

## 👥 Team

Built for **Smart India Hackathon 2026**
Problem Statement: **SIH26155**
Organization: **National Technical Research Organisation (NTRO)**
Theme: **Blockchain & Cybersecurity**

---

## 📄 Deliverables

- [x] Source Code (this repository)
- [x] Working Prototype — `http://localhost:3000`
- [ ] Architecture Document (2 pages) — *coming soon*
- [ ] Demo Video (2 minutes) — *coming soon*
- [ ] Technical Presentation (5 slides) — *coming soon*
- [ ] README with Setup Instructions — **you are here**

---

## 📚 References

- [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks)
- [NIST SP 800-53](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final)
- [DISA STIGs](https://public.cyber.mil/stigs/)
- [ISO/IEC 27001](https://www.iso.org/isoiec-27001-information-security.html)
- [NCIIPC](https://nciipc.gov.in)

---

<div align="center">

**Built with ❤️ for India's Critical Information Infrastructure Protection**

*"Security is not a product, but a process." — Bruce Schneier*

</div>
