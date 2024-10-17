import { useDataHook } from './hooks/useDataHook';

function App() {
  const keyToSearch = 'address'; // Specify the key you want to search for
  useDataHook(keyToSearch); // Call the hook with the specified key

  return (
    <section>
      <h1>Check the console for output!</h1>
    </section>
  );
}

export default App;
