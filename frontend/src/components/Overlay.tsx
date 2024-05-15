type OverlayProps = {
  opacity?: number;
  z_index?: number;
};

const Overlay = ({ opacity, z_index }: OverlayProps) => {
  return <div className={`absolute inset-0 bg-dark bg-opacity-${opacity} ${z_index}`}></div>;
};

export default Overlay;
