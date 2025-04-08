/**
 * Custom fade transition that prevents flashing during page transitions
 */
export function noFlashFade({ duration = '0.8s' } = {}) {
  return {
    forwards: {
      old: [
        {
          name: 'fadeOut',
          duration,
          easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
          fillMode: 'both',
        },
      ],
      new: [
        {
          name: 'fadeIn',
          duration,
          easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
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
          easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
          fillMode: 'both',
        },
      ],
      new: [
        {
          name: 'fadeIn',
          duration,
          easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
          fillMode: 'both',
          delay: '0s', // Start immediately to prevent flash
        },
      ],
    },
  };
}
