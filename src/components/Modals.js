import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModalPortal, openModalPortal, closeModalPortal] = useModal(false);

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>modal 1</h3>
        <p>contenido del modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="animals" />
      </Modal>

      <button onClick={openModal2}>modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>modal 2</h3>
        <p>contenido del modal 2</p>
        <img src="https://placeimg.com/400/400/nature" alt="animals" />
      </Modal>

      <button onClick={openModalPortal}>modal portal</button>
      <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
        <h3>modal Portal</h3>
        <p>contenido del modal portal</p>
        <img src="https://placeimg.com/400/400/tech" alt="tech" />
      </ModalPortal>

    </div>
  );
};

export default Modals;
