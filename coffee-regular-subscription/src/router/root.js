import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import noticeRouter from "./noticeRouter"; // Assuming noticeRouter is a function that returns an array of routes

const Loading = <div>Loading....</div>
const Main = lazy(() => import("../MainPage/MainPage.js"));
const Notice = lazy(() => import("../boardNotice/Notice.js"));
const Detail = lazy(() => import("../boardNotice/detail.js"));


const root = createBrowserRouter([

    {
        path:"",
        element: <Suspense fallback={Loading}><Main /></Suspense>
    },

    {
        path:"notice",
        element: <Suspense fallback={Loading}><Notice /></Suspense>, // Assuming noticeRouter is a function that returns an array of routes
        children: noticeRouter()  // 여기에 담긴 라우터는 부모 컴포넌트의 return과 공유되어 지는 애임
        // 공통된 레이아웃을 적용 시킬 수 있음.
        // 그래서 <Outlet />을 사용함. 만약 다른 페이지로 구성하고 싶으면 밑에처럼 하면됨.
    },
    {
        path:"notice/detail",
        element: <Suspense fallback={Loading}><Detail /></Suspense>
    }

    ])

    export default root;