import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Verifica se o navegador suporta CSS nativo para animação de rolagem
if (
  !CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)')
) {
  gsap.registerPlugin(ScrollTrigger);

  const items = gsap.utils.toArray('ul li');
  gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) });

  const dimmer = gsap
    .timeline()
    .to(items.slice(1), {
      opacity: 1,
      stagger: 0.5,
    })
    .to(
      items.slice(0, items.length - 1),
      {
        opacity: 0.2,
        stagger: 0.5,
      },
      0
    );

  ScrollTrigger.create({
    trigger: items[0],
    endTrigger: items[items.length - 1],
    start: 'center center',
    end: 'center center',
    animation: dimmer,
    scrub: 0.2,
  });
}
