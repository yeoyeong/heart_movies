import globalStore from "@src/store/global-store";

function useCloseModal(id: string) {
  const { setAuthInfoToggle } = globalStore();
  const closeHandler = () => {
    switch (id) {
      case "AUTH":
        setAuthInfoToggle(false);
        break;
    }
    document.body.style.overflow = "auto";
  };

  return {
    closeHandler,
  };
}

export default useCloseModal;
