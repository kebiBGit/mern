import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import { useTheme } from "./lib/theme.js";

const App = () => {
  const { theme, switchTheme } = useTheme();
  return (
    <div data-theme={theme}>
      <div className="fixed bottom-4 right-4 z-[1000] flex items-center gap-3 rounded-box bg-base-200 p-3 shadow-lg">
        <span className="text-sm font-medium">Current theme: {theme}</span>
        <button onClick={switchTheme} className="btn btn-primary btn-sm">
          Switch theme
        </button>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
