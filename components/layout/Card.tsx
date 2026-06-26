import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
      {children}
    </div>
  );
}