import Toast from 'react-native-toast-message';

const Toaste = props => {
  console.log(props, 'props');

  return <Toast position="bottom" bottomOffset={20} />;
};

export default Toaste;
