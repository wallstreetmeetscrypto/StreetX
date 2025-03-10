import React, { createContext, useState, ReactNode } from "react";

// Define the type for your modal context
interface ModalContextType {
  loginModalShow: boolean;
  signupModalShow: boolean;
  forgotPswModalShow: boolean;
  overlayModalShow: boolean;
  cancelPlanModalShow: boolean;
  imageUploadModalShow: boolean;

  openLoginModal: () => void;
  closeLoginModal: () => void;
  openSignupModal: () => void;
  closeSignupModal: () => void;
  openForgotPswModal: () => void;
  closeForgotPswModal: () => void;
  openOverlayModal: () => void;
  closeOverlayModal: () => void;

  openCancelPlanModal: () => void;
  closeCancelPlanModal: () => void;
  openImageUploadModalShowModal: () => void;
  closeImageUploadModalShowModal: () => void;
}

// Create the modal context
export const ModalContext = createContext<ModalContextType>({
  loginModalShow: false,
  signupModalShow: false,
  forgotPswModalShow: false,
  overlayModalShow: false,
  cancelPlanModalShow: false,
  imageUploadModalShow: false,
  openLoginModal: () => {},
  closeLoginModal: () => {},
  openSignupModal: () => {},
  closeSignupModal: () => {},
  openForgotPswModal: () => {},
  closeForgotPswModal: () => {},
  openOverlayModal: () => {},
  closeOverlayModal: () => {},
  openCancelPlanModal: () => {},
  closeCancelPlanModal: () => {},
  openImageUploadModalShowModal: () => {},
  closeImageUploadModalShowModal: () => {},
});

interface ModalProviderProps {
  children: ReactNode;
}

// Define the modal provider component
export function ModalProvider({ children }: ModalProviderProps) {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [signupModalShow, setSignupModalShow] = useState(false);
  const [forgotPswModalShow, setForgotPswModalShow] = useState(false);
  const [overlayModalShow, setOverlayModalShow] = useState(false);
  const [cancelPlanModalShow, setCancelPlanModalShow] = useState(false);
  const [imageUploadModalShow, setImageUploadModalShow] = useState(false);
  const [previewAvatarUrl, setPreviewAvatarUrl] = useState<string | null>(null);

  const openLoginModal = () => {
    setLoginModalShow(true);
  };

  const closeLoginModal = () => {
    setLoginModalShow(false);
  };

  const openSignupModal = () => {
    setSignupModalShow(true);
  };

  const closeSignupModal = () => {
    setSignupModalShow(false);
  };

  const openForgotPswModal = () => {
    setForgotPswModalShow(true);
  };

  const closeForgotPswModal = () => {
    setForgotPswModalShow(false);
  };

  const openOverlayModal = () => {
    setOverlayModalShow(true);
  };

  const closeOverlayModal = () => {
    setOverlayModalShow(false);
  };

  const openCancelPlanModal = () => {
    setCancelPlanModalShow(true);
  };

  const closeCancelPlanModal = () => {
    setCancelPlanModalShow(false);
  };

  const openImageUploadModalShowModal = () => {
    setImageUploadModalShow(true);
  };

  const closeImageUploadModalShowModal = () => {
    setImageUploadModalShow(false);
  };

  const ModalContextValue: ModalContextType = {
    loginModalShow: loginModalShow,
    signupModalShow: signupModalShow,
    forgotPswModalShow: forgotPswModalShow,
    overlayModalShow: overlayModalShow,
    cancelPlanModalShow: cancelPlanModalShow,
    imageUploadModalShow: imageUploadModalShow,

    openLoginModal: openLoginModal,
    closeLoginModal: closeLoginModal,
    openSignupModal: openSignupModal,
    closeSignupModal: closeSignupModal,
    openForgotPswModal: openForgotPswModal,
    closeForgotPswModal: closeForgotPswModal,
    openOverlayModal: openOverlayModal,
    closeOverlayModal: closeOverlayModal,
    openCancelPlanModal: openCancelPlanModal,
    closeCancelPlanModal: closeCancelPlanModal,
    openImageUploadModalShowModal: openImageUploadModalShowModal,
    closeImageUploadModalShowModal: closeImageUploadModalShowModal,
  };

  return (
    <ModalContext.Provider value={ModalContextValue}>
      {children}
    </ModalContext.Provider>
  );
}
