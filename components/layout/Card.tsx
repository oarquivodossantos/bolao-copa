import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className="w-full max-w-xl">

      <div className="overflow-hidden rounded-3xl border border-green-200 bg-white shadow-2xl">

        <div className="h-3 bg-gradient-to-r from-green-600 via-yellow-400 to-blue-600" />

        <div className="p-8">

          {children}

        </div>

      </div>

    </div>
  );
}