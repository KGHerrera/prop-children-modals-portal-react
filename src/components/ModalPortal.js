import ReactDOM from "react-dom";
import "./Modal.css";

export default function ModalPortal({ children, isOpen, closeModal }) {
  const handleModalContainerClick = (e) => {
    e.stopPropagation();
  };
  return ReactDOM.createPortal(
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-conteiner" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          x
        </button>
        {children}
      </div>
    </article>,
    document.getElementById("modal")
  );
}
