import Button from './Button';

interface IHeaderProps {
  title: string;
  onAdd: React.MouseEventHandler;
  showAdd: boolean;
}

const Header = ({ title, onAdd, showAdd }: IHeaderProps) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      ></Button>
    </header>
  );
};

export default Header;
