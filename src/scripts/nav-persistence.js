/**
 * Navigation persistence script
 * Ensures mobile navigation works correctly with Astro's View Transitions
 */

// Initialize the mobile navigation
function initMobileNav() {
  // Check if HSCollapse is available (from Preline UI)
  if (typeof HSCollapse !== 'undefined') {
    // Initialize all collapse elements
    document.querySelectorAll('[data-hs-collapse]').forEach(trigger => {
      const target = document.querySelector(trigger.getAttribute('data-hs-collapse'));
      if (target) {
        new HSCollapse(trigger);
      }
    });
  } else {
    // Fallback for when HSCollapse is not available
    document.querySelectorAll('[data-hs-collapse]').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const targetId = trigger.getAttribute('data-hs-collapse');
        const target = document.querySelector(targetId);
        
        if (target) {
          // Toggle classes for the target
          target.classList.toggle('hidden');
          target.classList.toggle('block');
          
          // Toggle the open state on the trigger
          trigger.classList.toggle('hs-collapse-open');
        }
      });
    });
  }
}

// Run on initial page load
document.addEventListener('DOMContentLoaded', initMobileNav);

// Run after each Astro page transition
document.addEventListener('astro:page-load', initMobileNav);

// Run after Astro transitions are complete
document.addEventListener('astro:after-swap', initMobileNav);
