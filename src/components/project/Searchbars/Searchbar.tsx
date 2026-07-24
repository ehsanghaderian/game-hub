import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

interface Props {
  on_submit: (searchText: string) => void;
}
export const Searchbar = ({ on_submit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          on_submit(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input ref={ref} borderRadius={20} placeholder="Search games..." />
      </InputGroup>
    </form>
  );
};
