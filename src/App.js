import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atom/button/PrimaryButton";
import { SecondaryButton } from "./components/atom/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organism/user/UserCard";
import { DefaultLayout } from "./components/templetes/DefaultLayout";
import "./styles.css";

const user = {
  name: "yuuki",
  image: "https://source.unsplash.com/dQ5G0h7sLno",
  email: "1245@example.com",
  phone: "000-9999-8888",
  company: {
    name: "test会社"
  },
  website: "xxxxxx.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト！！</PrimaryButton>
        <SecondaryButton>テスト！！</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
