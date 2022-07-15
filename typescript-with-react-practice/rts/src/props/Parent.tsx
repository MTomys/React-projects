import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('onClick() called')}>
      asdasdasdasd
    </ChildAsFC>
  );
};

export default Parent;
