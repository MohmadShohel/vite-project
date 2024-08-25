import "./App.css";
import { FormComponent } from "./component/form";
import OutputDisplay from "./component/outdisplay";
function App() {
  return (
    <>
      <FormComponent />
      <h2>API Link:</h2>
      <a href="https://pewegetqyt.ap-south-1.awsapprunner.com/bfhl">
        Deployed on AWS
      </a>
    </>
  );
}

export default App;
