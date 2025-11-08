declare global {
  /**
   * Shared timeout across Astro page transitions.
   * Use ReturnType<typeof setTimeout> to be compatible with both browser (number)
   * and Node.js (NodeJS.Timeout) environments.
   */
  var loadingTimeout: ReturnType<typeof setTimeout> | null;

  // Optional: also declare on Window for direct window access if needed
  interface Window {
    loadingTimeout?: ReturnType<typeof setTimeout> | null;
  }
}

export { }