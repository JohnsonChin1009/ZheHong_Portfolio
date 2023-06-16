export const isInViewport = (element) => {
    
    const rect = element.getBoundingClientRect();
    return !(
      rect.top >= window.innerHeight ||
      rect.left >= window.innerWidth ||
      rect.bottom <= 0 ||
      rect.right <= 0
    );
};