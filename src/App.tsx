import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Intro from "./Intro";
import Skeleton from "./skeleton";

function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        // 페이지 이동시마다 스크롤 맨위로 가보자고
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/skeleton" element={<Skeleton />} />
        </Routes>
    );
}

export default App;
