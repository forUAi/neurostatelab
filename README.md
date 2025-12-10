# NeuroState Lab 🧠

**NeuroState Lab** is my personal space for exploring **computational neuroscience** and **neurotechnology** – starting with AI-assisted EEG tools to help neurologists detect brain issues earlier and support healthier minds.

This repo will hold:

- Experiments in EEG signal processing and brain state modeling  
- Full projects like **AbsenceLens** (AI-assisted pre-screening for absence epilepsy in children)  
- Reusable utilities for working with neuro data (EEG pipelines, feature extractors, model training scripts)  
- Notes, docs, and write-ups as I learn and iterate

---

## 🌍 Vision

I want to use brain tech to help **real patients and real people**, not just build cool demos.

**Long-term goals:**

- Help neurologists and neurosurgeons **see brain patterns more clearly** (epilepsy, ICU brain monitoring, med/surgery planning).  
- Reduce **misdiagnosis and missed events**, starting with kids who look “distracted” or “daydreaming” but may have absence seizures.  
- Eventually build **brain-aware tools** that support mental health and healthy behavior – for clinics and for health-focused product companies.

I am *not* here to build:

- surveillance systems,  
- mental state scoring for hiring/insurance, or  
- manipulative engagement/attention hacks.

---

## 🧪 Current Main Project – AbsenceLens

> **AbsenceLens** – AI-assisted EEG pre-screening for children with possible absence epilepsy.

**Motivation:**  
Many kids with brief “staring spells” are seen as lazy, inattentive, or ADHD. In some of them, those spells are actually **absence seizures** (a form of generalized epilepsy). Early, accurate detection can change their whole life.

**High-level idea:**

- Input: pediatric EEG recordings (with standard protocols like hyperventilation).
- Pipeline:
  - Preprocess EEG (filtering, artifact handling)
  - Segment into short epochs
  - Extract features (bandpower, time–frequency stats, maybe raw CNN features)
  - Train models to flag “absence-like” patterns (e.g. generalized spike-and-wave bursts)
- Output:
  - A per-recording summary (low / medium / high suspicion)
  - Highlighted time windows for the neurologist to review
  - Simple visualizations to support, not replace, clinical judgment

**Goal for v1:**

- A working end-to-end pipeline in Python  
- Clean, documented code  
- A small report on performance, limitations, and how this could fit into real workflows

---

## 🧱 Tech Stack

This repo will evolve, but initial stack is:

- **Language:** Python  
- **EEG / Signal Processing:**  
  - [`mne`](https://mne.tools/)  
  - NumPy, SciPy  
- **Machine Learning / Modeling:**  
  - scikit-learn  
  - PyTorch (for deep models, later stages)  
- **Data / Experiments:**  
  - Jupyter / IPython notebooks  
  - Scripts in `src/` for reproducible pipelines  
- **Docs / Notes:**  
  - Markdown notebooks and blog-style write-ups

---

## 📂 Repo Structure (planned)

```bash
neurostatelab/
├─ README.md
├─ pyproject.toml / requirements.txt
├─ src/
│  ├─ absence_lens/
│  │  ├─ data_loading.py
│  │  ├─ preprocessing.py
│  │  ├─ features.py
│  │  ├─ models.py
│  │  └─ evaluation.py
│  ├─ utils/
│  │  ├─ plotting.py
│  │  └─ eeg_helpers.py
├─ notebooks/
│  ├─ 01_explore_raw_eeg.ipynb
│  ├─ 02_feature_experiments.ipynb
│  └─ 03_absence_lens_baseline.ipynb
├─ data/            # (ignored in git, use placeholders / README)
│  └─ README_DATA.md
├─ reports/
│  ├─ absence_lens_v0_results.md
│  └─ figures/
└─ docs/
   ├─ roadmap.md
   └─ notes_on_epilepsy_and_eeg.md
