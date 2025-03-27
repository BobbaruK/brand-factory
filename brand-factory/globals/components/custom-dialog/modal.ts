export const showModal = (e?: MouseEvent) => {
  e?.preventDefault();
  const modal = document.querySelector(".js-modal") as HTMLDivElement;

  const closeModal = (e: MouseEvent) => {
    if (e.target === modal) {
      modal.dataset.state = "closed";
      modal.style.display = "none";
    }
  };

  if (modal.dataset.state === "closed") {
    modal.addEventListener("click", (e) => closeModal(e));

    modal.dataset.state = "open";
    modal.style.display = "block";

    return;
  }

  modal.dataset.state = "closed";
  modal.style.display = "none";
  modal.removeEventListener("click", closeModal);
};
