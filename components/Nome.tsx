export default function Nome() {
  return (
    <>
      <label className="font-semibold">
        Nome
      </label>

      <input
        placeholder="Digite seu nome"
        className="w-full mt-2 mb-8 border rounded-xl p-4 text-lg focus:outline-none focus:ring-2 focus:ring-green-600"
      />
    </>
  );
}