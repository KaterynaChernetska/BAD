import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/homePage';
import { CheckTextPage } from 'pages/CheckTextPage/checkTextPage';
import { Layout } from './navigation/navigation';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="check" element={<CheckTextPage />} />
        </Route>
      </Routes>
    </>
  );
};
