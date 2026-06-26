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
      disabled={disabled}
      onClick={onClick}
      className="w-full rounded-xl bg-green-600 p-4 text-lg font-semibold text-white hover:bg-green-700 disabled:bg-gray-400"
    >
      {children}
    </button>
  );
}