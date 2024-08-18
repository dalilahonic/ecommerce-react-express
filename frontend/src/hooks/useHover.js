import { useEffect } from 'react';

function useHover(
  setIsCartWindowOpen,
  cartIsHovered,
  setCartIsHovered
) {
  console.log(cartIsHovered);
  useEffect(() => {
    let time;
    if (!cartIsHovered) {
      time = setTimeout(() => {
        setIsCartWindowOpen(false);
        setCartIsHovered(false);
      }, 3000);
    }
    return clearTimeout(time);
  }, [
    cartIsHovered,
    setIsCartWindowOpen,
    setCartIsHovered,
  ]);
}

export default useHover;
