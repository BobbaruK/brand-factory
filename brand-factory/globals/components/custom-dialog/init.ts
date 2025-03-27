import { showModal } from "./modal.ts";

export const initModal = () => {
  const modalTrigger = Array.from(
    document.querySelectorAll(".js-modal-trigger")
  ) as HTMLButtonElement[];

  for (let i = 0; i < modalTrigger.length; i++) {
    modalTrigger[i].addEventListener("click", showModal);
  }
};
