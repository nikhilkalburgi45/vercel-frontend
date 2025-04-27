import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Helper function to create typing effect
export const createTypingEffect = (
  fullText: string, 
  duration: number = 2000, 
  delay: number = 500
) => {
  return {
    initial: { width: "0%" },
    animate: {
      width: "100%",
      transition: {
        delay,
        duration,
        ease: "steps(40)",
      },
    },
  };
};

// For code highlighting in project cards
export const highlightCode = (code: string): string => {
  return code
    .replace(/const|let|var|function|class|import|export|from|return/g, (match) => 
      `<span class="text-[#ff79c6]">${match}</span>`
    )
    .replace(/\b(app|model|component|useState|useEffect)\b/g, (match) => 
      `<span class="text-[#1e90ff]">${match}</span>`
    )
    .replace(/"([^"]*)"/g, (match) => 
      `<span class="text-[#0f0]">${match}</span>`
    );
};

// Format date for footer copyright
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
