# Planner (bismillah)
Single-file mobile planner: plans with offline prayer times (MWL angles 18°/17°, standard Asr), special-day picker for 2026-27, and a travel-ideas feed from `ideas.json` (append items, bump `updated`). Prayer times also link to Boran4Law's [Prayer Scroll · Europe](https://mrbugimposter3-ship-it.github.io/prayer-scroll-europe/). Geocoding: Open-Meteo (cached in localStorage).

Shared plans live in `plans.json` (an array of plan objects). On load they merge into this device's `localStorage` plans by `id`: new ids are added, existing plans are never overwritten or deleted, and ids already merged are remembered under `plansMerged` so a deleted shared plan stays deleted. Backup → Import JSON merges by id as well (matching ids update from the file; other saved plans stay).
