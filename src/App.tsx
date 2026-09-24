import MainPage from './components/pages/MainPage/MainPage';
type AppProps = {
  offersCount: number;
};
export const App = ({ offersCount }: AppProps) => (
  <MainPage offersCount={offersCount} />
);
