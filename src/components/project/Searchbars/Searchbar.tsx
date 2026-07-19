import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";

interface Props {
  on_submit: (searchText: string) => void;
}
export const Searchbar = ({ on_submit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) on_submit(ref.current.value);
      }}
    >
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input ref={ref} borderRadius={20} placeholder="Search games..." />
      </InputGroup>
    </form>
  );
};
