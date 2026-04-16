// import { useEffect, useRef, ReactNode } from "react";

// type Props = {
//   children: ReactNode;
//   className?: string;
//   delay?: number;
//   direction?: "up" | "left" | "right" | "none";
// };

// export default function ScrollReveal({
//   children,
//   className = "",
//   delay = 0,
//   direction = "up",
// }: Props) {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setTimeout(() => {
//             el.classList.add("revealed");
//           }, delay);
//           observer.unobserve(el);
//         }
//       },
//       { threshold: 0.1 },
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [delay]);

//   const dirClass = {
//     up: "reveal-up",
//     left: "reveal-left",
//     right: "reveal-right",
//     none: "reveal-none",
//   }[direction];

//   return (
//     <div ref={ref} className={`reveal ${dirClass} ${className}`}>
//       {children}
//     </div>
//   );
// }

// //////
import { useEffect, useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // ensure starting state ALWAYS applied
    el.classList.add("reveal");
    el.classList.add(`reveal-${direction}`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("revealed");
          }, delay);

          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
