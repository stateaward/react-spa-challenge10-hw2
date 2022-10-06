// useRouter 생성
const useRouter = () => {
    const push = (path: string) => {
      history.pushState(null, "", path);
      // PopStateEvent : HTML DOM API
      const popStateEvent = new PopStateEvent("popstate", { state: path });
      dispatchEvent(popStateEvent);     // 사용자가 생성한 이벤트를 전달
    };

    return { push };
};

export default useRouter;