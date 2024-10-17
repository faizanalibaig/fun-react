import { useRef, useEffect } from 'react';

function App() {
  const ref = useRef(null);

  useEffect(() => {
    // Log the actual DOM element after the component has rendered
    console.log(ref.current); // This will log the <h1> element
  }, []); // Empty dependency array ensures it runs only once after the component mounts

  return (
    <section>
      <h1 ref={ref}>Hello, useRef</h1>
      {/* <Network /> */}
      {/* <InputHook /> */}
    </section>
  );
}

export default App;
