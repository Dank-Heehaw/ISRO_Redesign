import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis: Lenis | null = null;

/**
 * Hands scroll position to Lenis and keeps ScrollTrigger in step with it.
 * Skipped entirely under reduced-motion so the browser keeps native scrolling.
 */
function initSmoothScroll() {
  if (prefersReducedMotion()) return;

  lenis = new Lenis({
    duration: 1.05,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.6,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/**
 * Declarative reveals. Markup opts in with `data-anim="fade-up" | "fade" |
 * "clip-up" | "split-lines"`, so pages stay free of bespoke animation code.
 */
function initReveals() {
  const targets = gsap.utils.toArray<HTMLElement>('[data-anim]');

  targets.forEach((el) => {
    const kind = el.dataset.anim;
    const delay = Number(el.dataset.animDelay ?? 0);
    const start = el.dataset.animStart ?? 'top 85%';

    const common = {
      scrollTrigger: { trigger: el, start, once: true },
      delay,
      ease: 'expo.out',
    };

    switch (kind) {
      case 'fade':
        gsap.to(el, { ...common, opacity: 1, duration: 1 });
        break;

      case 'fade-up':
        gsap.to(el, { ...common, opacity: 1, y: 0, duration: 1.1 });
        break;

      case 'clip-up':
        gsap.to(el.children, { ...common, yPercent: 0, duration: 1.2, stagger: 0.07 });
        break;

      case 'split-lines': {
        const split = new SplitText(el, { type: 'lines', linesClass: 'split-line' });
        // Each line gets a clipping parent so it can slide out from nothing.
        split.lines.forEach((line) => {
          const wrap = document.createElement('span');
          wrap.className = 'split-line-wrap';
          line.parentNode?.insertBefore(wrap, line);
          wrap.appendChild(line);
        });
        gsap.set(el, { opacity: 1 });
        gsap.from(split.lines, {
          ...common,
          yPercent: 110,
          duration: 1.15,
          stagger: 0.075,
        });
        break;
      }
    }
  });
}

/** Counts `[data-counter]` elements up to their numeric value once in view. */
function initCounters() {
  gsap.utils.toArray<HTMLElement>('[data-counter]').forEach((el) => {
    const target = Number(el.dataset.counter ?? 0);
    const decimals = Number(el.dataset.counterDecimals ?? 0);
    const state = { value: 0 };

    const render = () =>
      (el.textContent = state.value.toLocaleString('en-IN', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }));

    if (prefersReducedMotion()) {
      state.value = target;
      render();
      return;
    }

    gsap.to(state, {
      value: target,
      duration: 2,
      ease: 'power2.out',
      onUpdate: render,
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });
}

/** Translates `[data-parallax]` by a fraction of its own scroll distance. */
function initParallax() {
  if (prefersReducedMotion()) return;

  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const strength = Number(el.dataset.parallax ?? 0.15);
    gsap.fromTo(
      el,
      { yPercent: -strength * 50 },
      {
        yPercent: strength * 50,
        ease: 'none',
        scrollTrigger: { trigger: el.parentElement ?? el, scrub: true },
      }
    );
  });
}

export function initMotion() {
  document.documentElement.classList.add('js');
  initSmoothScroll();
  initReveals();
  initCounters();
  initParallax();

  // Fonts change line-boxes, which invalidates every measured trigger.
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

export { gsap, ScrollTrigger, SplitText, lenis };
