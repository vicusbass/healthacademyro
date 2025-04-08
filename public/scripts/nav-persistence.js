/**
 * Navigation persistence script
 * Ensures mobile navigation works correctly with Astro's View Transitions
 */

// Initialize Preline components after each page transition
function initPrelineComponents() {
  // Re-initialize HSCollapse for mobile navigation
  if (typeof HSCollapse !== 'undefined') {
    HSCollapse.autoInit();
  }

  // Re-initialize HSOverlay if it exists
  if (typeof HSOverlay !== 'undefined') {
    HSOverlay.autoInit();
  }
}

// Run on initial page load
document.addEventListener('DOMContentLoaded', initPrelineComponents);

// Run after each Astro page transition
document.addEventListener('astro:page-load', initPrelineComponents);

// Run after Astro transitions are complete
document.addEventListener('astro:after-swap', initPrelineComponents);
