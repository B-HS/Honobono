// island/counter.tsx
import { useState } from "react";
import { jsxDEV } from "react/jsx-dev-runtime";
var Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  return /* @__PURE__ */ jsxDEV("div", {
    children: [
      /* @__PURE__ */ jsxDEV("button", {
        onClick: () => setCount(count + 1),
        children: "Click me"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV("p", {
        children: [
          "Count: ",
          count
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
export {
  Counter
};

//# debugId=EE431E8B89124F6364756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vaXNsYW5kL2NvdW50ZXIudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBDb3VudGVyID0gKHsgaW5pdGlhbENvdW50ID0gMCB9OiB7IGluaXRpYWxDb3VudD86IG51bWJlciB9KSA9PiB7XG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShpbml0aWFsQ291bnQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudChjb3VudCArIDEpfT5DbGljayBtZTwvYnV0dG9uPlxuICAgICAgICAgICAgPHA+Q291bnQ6IHtjb3VudH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUFBO0FBRU8sSUFBTSxVQUFVLEdBQUcsZUFBZSxRQUFtQztBQUFBLEVBQ3hFLE9BQU8sT0FBTyxZQUFZLFNBQVMsWUFBWTtBQUFBLEVBRS9DLHVCQUNJLE9BR0UsT0FIRjtBQUFBLGNBR0U7QUFBQSxzQkFGRSxPQUFzRCxVQUF0RDtBQUFBLFFBQVEsU0FBUyxNQUFNLFNBQVMsUUFBUSxDQUFDO0FBQUEsUUFBekM7QUFBQSwwQ0FBc0Q7QUFBQSxzQkFDdEQsT0FBbUIsS0FBbkI7QUFBQSxrQkFBbUI7QUFBQSxVQUFuQjtBQUFBLFVBQVc7QUFBQTtBQUFBLFNBQVgsZ0NBQW1CO0FBQUE7QUFBQSxLQUZ2QixnQ0FHRTtBQUFBOyIsCiAgImRlYnVnSWQiOiAiRUU0MzFFOEI4OTEyNEY2MzY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
