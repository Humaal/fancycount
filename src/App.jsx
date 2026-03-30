import { useState } from "react";

import Title from "./components/Title";
import Reset from "./components/Reset";
import CountButtons from "./components/CountButtons";
import Count from "./components/Count";

export default function App() {

   const [count, setCount] = useState(0);

   return (
      <>
         <main>
            <div className="card">
               <Title />
               <Count count={count} />
               <Reset setCount={setCount} />
               <CountButtons setCount={setCount} />
            </div>
         </main>
      </>
   );
}