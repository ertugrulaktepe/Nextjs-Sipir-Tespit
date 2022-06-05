import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";

type Props = {
  children: React.ReactNode;
  modal: boolean;
  setModal: (modal: boolean) => void;
  title: string;
};

const Modals = (props: Props) => {
  return (
    <div>
      <Modal centered={true} isOpen={props.modal}>
        <ModalHeader
          close={
            <Button
              close
              onClick={() => {
                props.setModal(false);
              }}
            />
          }
          toggle={() => {
            props.setModal(false);
          }}
        >
          {props.title}
        </ModalHeader>
        <ModalBody>{props.children}</ModalBody>
      </Modal>
    </div>
  );
};

export default Modals;
