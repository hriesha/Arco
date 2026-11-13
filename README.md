# Arco

A browser-based instrument-learning prototype focused on foundations before songs.

## Working features
- Six introductory violin milestones with knowledge and listening checks
- Synthesized G3, D4, A4, E5 open-string reference tones using Web Audio
- Randomized two-pitch comparison
- Four-tap rhythm check with measured timing intervals and stored scores
- Gentle tabletop finger-sequencing practice, explicitly recorded as self-reported
- Local progress, daily goal, JSON export, and confirmed reset
- Responsive dashboard, practice studio, curriculum, progress, and proposed school pilot

## Run
Serve `dist/` with any static web server. No dependencies or API keys are required. Google Fonts is optional; system fallbacks apply.

## Scope
This is a functional prototype, not a complete or teacher-validated curriculum. It does not evaluate physical violin technique or guarantee real-instrument transfer. Five additional instruments are explicitly planned, not implemented. School partnerships and free course places are not yet available. Progress stays in the browser's localStorage and is not synced to an account. Web Audio tones are synthesized, not violin samples. Rhythm feedback measures interval consistency at 60 BPM, not latency-calibrated performance.

## Next steps
Validate the curriculum and movement activities with an experienced teacher; conduct real-instrument transfer assessments; add notation and recall depth, spaced review, account-backed storage, and accessibility testing before wider release.

## Deploy on Vercel
Import `hriesha/Arco` into Vercel with the repository root as the project root. The checked-in `vercel.json` selects `dist/` as the static output; no build command, dependencies, or secrets are required. Keep the GitHub integration connected to deploy future changes to `main` automatically.

A Vercel deployment can be available online before a wider launch. Review its deployment protection setting to control who can access it, and add a custom domain when ready. Browser-local learning progress does not migrate automatically between the old Site URL and a new Vercel URL.
