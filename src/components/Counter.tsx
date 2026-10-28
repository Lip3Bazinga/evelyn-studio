/** Número de destaque. */
export default function Counter({ valor, prefixo = "", sufixo = "" }: { valor: number; prefixo?: string; sufixo?: string }) {
  return (
    <>
      {prefixo}
      {valor}
      {sufixo}
    </>
  );
}
