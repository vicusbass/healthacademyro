/**
 * Custom fade transition that prevents flashing during page transitions
 */
export function noFlashFade({ duration = '0.4s' } = {}) {
  return {
    forwards: {
      old: [
        {
          name: 'fadeOut',
          duration,
          easing: 'ease-out',
          fillMode: 'both',
        },
      ],
      new: [
        {
          name: 'fadeIn',
          duration,
          easing: 'ease-in',
          fillMode: 'both',
          delay: '0s', // Start immediately to prevent flash
        },
      ],
    },
    backwards: {
      old: [
        {
          name: 'fadeOut',
          duration,
          easing: 'ease-out',
          fillMode: 'both',
        },
      ],
      new: [
        {
          name: 'fadeIn',
          duration,
          easing: 'ease-in',
          fillMode: 'both',
          delay: '0s', // Start immediately to prevent flash
        },
      ],
    },
  };
}

// Define the CSS animations
document.addEventListener('astro:page-load', () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
});
