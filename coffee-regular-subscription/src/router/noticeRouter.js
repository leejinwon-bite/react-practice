import { Suspense, lazy } from "react";

const Loading = <div>Loading....</div>
const BoardSave = lazy(() => import("../boardNotice/BoardSave.js"))

const noticeRouter  = () => {
  return [
    {
        path: "save",
        element: <Suspense fallback={Loading}><BoardSave /></Suspense>
    },
  ]

}

export default noticeRouter;