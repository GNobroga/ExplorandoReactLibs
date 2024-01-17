import React from "react";
import './styles.scss';

interface IProps extends React.ComponentProps<'div'> {
  content: string;
  background: string;
  color?: string;
  type: React.ComponentProps<'button'>['type'];
}

export default function Button({
  content,
  background,
  color,
  onClick,
  type = 'button',
}: IProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);


  return (
    <div
      className="button"
      ref={ref}
      style={{ backgroundColor: background, color }}
      onClick={(e) => {
        if (!onClick) return;
        ref.current?.classList.add("clicked");
        setTimeout(() => ref.current?.classList.remove("clicked"), 50);
        onClick(e);
      }}
    >
      <button type={type}>{content}</button>
    </div>
  );
}
