import Accordion from "./components/Accordion";

function App() {

const items = [
  {
    id: "knnnn",
    label: "Can I use react on a project?",
    content: "you can use react on any project"
  },
  {
    id: "ffff",
    label: "Can I use JS on a project?",
    content: "you can use JS on any project"
  },
  {
    id: "grrd",
    label: "Can I use CSS on a project?",
    content: "you can use CSS on any project"
  },
]

  return <Accordion items = {items}/>
}

export default App;