import Header from '../../features/header/header';

const Home = (props: { children?: React.ReactNode }) => {
  const { children } = props;
  return <Header>{children}</Header>;
};

export default Home;
