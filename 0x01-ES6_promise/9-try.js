export default function mathFunction(guardrail) {
  const queue = [];
  try {
    const x = guardrail();
    queue.push(x);
  } catch (err) {
    queue.push(`${err.name}: ${err.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
