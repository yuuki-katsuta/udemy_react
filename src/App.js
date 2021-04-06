import { PrimaryButton } from "./components/Atom/button/PrimaryButton";
import { SecondaryButton } from "./components/Atom/button/SecondaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト！！</PrimaryButton>
      <SecondaryButton>テスト！！</SecondaryButton>
    </div>
  );
}
