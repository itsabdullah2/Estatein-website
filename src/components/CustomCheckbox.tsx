import "../index.css";

interface Props {
  id: string;
}

const CustomCheckbox = ({ id }: Props) => {
  return (
    <>
      <input type="checkbox" id={id} className="custom-checkbox" />
    </>
  );
};

export default CustomCheckbox;
