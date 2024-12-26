import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "context/AuthContext";

const rootElement = document.getElementById("root"); // 전용 컨테이너 요소를 선택
if (rootElement) {
  const root = createRoot(rootElement); // 전용 컨테이너를 사용하여 React 앱을 초기화
  root.render(
    <AuthContextProvider>
      <Router>
        <App />
      </Router>
    </AuthContextProvider>
  );
}
