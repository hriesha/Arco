# Arco

**One beginning. Many possibilities.**

Learn instrument foundations through guided lessons, interactive practice, and everyday objects—before buying an instrument.

[Try Arco · Version 1](https://arcomusic.vercel.app)

## Why Arco

Cost, space, and a busy schedule can make learning an instrument feel out of reach. Arco gives you a place to begin with your ears, your hands, and things you already have.

The approach is simple: understand a musical idea, try it through a practical exercise, then check what you remember. Songs can follow as the foundations develop.

## What you can explore

- **Violin foundations:** six introductory milestones covering instrument knowledge, rhythm, listening, notation basics, and gentle movement practice.
- **Piano foundations:** four introductory milestones with guided key exploration, persistent key highlighting, note-location recall, paper-keyboard practice, and a short memory check.
- **Practice studio:** synthesized reference tones, pitch comparisons, rhythm exercises with timing feedback, and activities away from the screen.
- **Your learning record:** separate violin and piano progress, a daily practice goal, and progress export and reset.

Choose violin or piano to begin. Guided exercises explain each step; recall checks help you see what stayed.

## Where things stand

Arco is an early working prototype. The curriculum still needs validation with experienced music teachers. Screen and household-object activities can introduce musical ideas and rehearse sequences, but they do not reproduce an instrument’s physical feel or verify playing technique.

Progress is saved in your current browser and does not sync across devices. Sounds are synthesized reference tones, not instrument recordings.

## What’s ahead

Deeper lessons, spaced review, more instruments, and opportunities to test learning on real instruments. A proposed music-school pilot would help learners take that next step; partnerships and free introductory places are not confirmed yet.

## Run locally

No build step, dependencies, or API keys are required. With Python installed, run:

```sh
python3 -m http.server 3210 --directory dist
```

Then open [localhost:3210](http://localhost:3210). Arco is built with HTML, CSS, JavaScript, and the Web Audio API, and is hosted on Vercel.
