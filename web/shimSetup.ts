(global as any).requestAnimationFrame = (callback: any) => {
  setTimeout(callback, 0);
};

(global as any).cancelAnimationFrame = (callback: any) => {
  setTimeout(callback, 0);
};
