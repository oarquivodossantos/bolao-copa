interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  disabled = false,
}: Props) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="
        w-full
        rounded-2xl
        bg-gradient-to-r
        from-green-600
        to-green-700
        py-4
        text-lg
        font-bold
        text-white
        shadow-lg
        transition-all
        duration-200
        hover:scale-[1.02]
        hover:from-green-700
        hover:to-green-800
        active:scale-95
        disabled:cursor-not-allowed
        disabled:opacity-50
        disabled:hover:scale-100
      "
    >
      {children}
    </button>
  );
}