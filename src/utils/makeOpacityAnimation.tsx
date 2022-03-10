interface MakeOpacityAnimationProps {
  currentScrollY: number;
  startEffectAtY: number;
  duration: number;
}

const makeOpacityAnimation = ({
  currentScrollY,
  startEffectAtY,
  duration,
}: MakeOpacityAnimationProps) => {
  return ((currentScrollY - startEffectAtY) * 100) / duration / 100;
};

export { makeOpacityAnimation };
