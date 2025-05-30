import React from "react";

import useToggle from "./use-toggle.js";
import Modal from "./Modal.jsx";

function App() {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);
  return (
    <>
      {isModalOpen && (
        <Modal handleDismiss={toggleIsModalOpen}>
          This is an example modal! It includes <a href="">several</a>{" "}
          <a href="">different</a> <a href="">links</a>.
        </Modal>
      )}

      <button onClick={toggleIsModalOpen}>Toggle modal</button>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <p>
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        voluptatum magni iusto? Dolorem pariatur totam voluptate deleniti
        aliquam, quos iusto suscipit qui, sapiente quis est nihil enim molestiae
        autem magni.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
        deserunt magnam nulla. Soluta nihil nam aspernatur nisi quibusdam,
        veniam tempora natus dicta adipisci, nobis error, fuga animi pariatur
        quam obcaecati?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        maxime amet mollitia cum rerum dolores minus temporibus. Sunt
        repudiandae quae cupiditate totam adipisci! Accusamus minus iure
        laudantium assumenda veritatis repudiandae!
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <p>
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        voluptatum magni iusto? Dolorem pariatur totam voluptate deleniti
        aliquam, quos iusto suscipit qui, sapiente quis est nihil enim molestiae
        autem magni.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
        deserunt magnam nulla. Soluta nihil nam aspernatur nisi quibusdam,
        veniam tempora natus dicta adipisci, nobis error, fuga animi pariatur
        quam obcaecati?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        maxime amet mollitia cum rerum dolores minus temporibus. Sunt
        repudiandae quae cupiditate totam adipisci! Accusamus minus iure
        laudantium assumenda veritatis repudiandae!
      </p>
      <p>
        <a href="https://www.lipsum.com/">Read more on lipsum.com</a>.
      </p>
    </>
  );
}

export default App;
