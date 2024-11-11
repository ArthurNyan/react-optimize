import { useState } from "react";
import { HomeButton } from "./HomeButton";
import { UnoptimizedSlowList } from "./SlowList";

export default function Unoptimized() {
  const [text, setText] = useState("");
  return (
    <div>
      <HomeButton />
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <UnoptimizedSlowList text={text} />
    </div>
  );
}
