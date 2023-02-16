const refreshCanvas = function (
  ctx: CanvasRenderingContext2D,
  options: {
    width: number;
    height: number;
  },
  afterRefresh: () => void
) {
  ctx.clearRect(0, 0, options.width, options.height);
  afterRefresh();
  return requestAnimationFrame(() => {
    refreshCanvas(ctx, options, afterRefresh);
  });
};
export default refreshCanvas;
