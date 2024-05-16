type OverlayProps = {
  opacity?: number;
  z_index?: number;
  bgColor?: string;
};

const Overlay = ({ opacity, z_index, bgColor }: OverlayProps) => {
  return <div className={`absolute inset-0 ${bgColor} bg-opacity-${opacity} ${z_index}`}></div>;
};

export default Overlay;
