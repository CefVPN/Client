import React, { useState } from "react";
import ModalComponent from "./Modal";
import SwipeableViews from "react-swipeable-views";
import { virtualize } from "react-swipeable-views-utils";
import { mod } from "react-swipeable-views-core";
import EvalProfile from "./EvalProfile";
import ImportProfile from "./ImportProfile";
//import fs from 'fs'

const VirtualViews = virtualize(SwipeableViews);

const ImportModal = ({ modalIsOpen, closeModal }) => {

  const [index, setIndex] = useState(0);
  const [importConfigProfile, setConfigProfile] = useState("OpenVPN Profile");

  async function openFile(callback) {
    const [fileHandle] = await window.showOpenFilePicker({
      types: [
        {
          description: "OpenVPN Profile",
          accept: {
            "*/*": [".ovpn"], //Extensions you want to allow
          },
        },
      ],
      excludeAcceptAllOption: true, // this hides all files option
      multiple: false,
    });
  
    const file = await fileHandle.getFile();
    const content = await file.text();

    if (content != null) {
      window.importProfile("Import.Profile", content, function(profileName) {
        setConfigProfile(profileName);
        callback();
      });
    }
  }

  const handleChangeIndex = (newIndex) => {
    setIndex(newIndex);
  };

  function handleClick() {
    setIndex(1);
  }

  function slideRenderer(params) {
    const { index } = params;
    let component;

    switch (mod(index, 2)) {
      case 0:
        component = <ImportProfile handleFileOpen={() => openFile(handleClick)} />;
        break;
      case 1:
        component = <EvalProfile profileName={importConfigProfile} />;
        break;
      default:
        break;
    }
    return <>{component}</>;
  }

  return (
    <ModalComponent
      isOpen={modalIsOpen}
      closeModal={() => {
        setIndex(0);
        closeModal();
      }}
    >
      <VirtualViews
        index={index}
        slideRenderer={slideRenderer}
        disabled={true}
        onChangeIndex={handleChangeIndex}
        overscanSlideAfter={0}
        overscanSlideBefore={1}
        slideCount={2}
      />
    </ModalComponent>
  );
};

export default ImportModal;
