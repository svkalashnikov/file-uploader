import "./App.css";

import SingleFileUploader from "./components/SingleFileUploader";
import MultipleFileUploader from "./components/MultipleFileUploader";
import UploadcareUploader from "./components/UploadcareUploader";

function App() {
  return (
    <>
      <h1>Загрузка файлов</h1>

      <h2>Вариант 1. Одиночная загрузка файлов</h2>
      <SingleFileUploader />

      <h2>Вариант 2. Множественная загрузка файлов</h2>
      <MultipleFileUploader />

      <h2>VIte-компонент </h2>
      <UploadcareUploader />

      <p className="read-the-docs">This app is built with Vite and React.</p>
    </>
  );
}

export default App;
