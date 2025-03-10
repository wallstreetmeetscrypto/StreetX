"use client";

import { ModalContext } from "@/contexts/ModalContext";
import { Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import { FC, useContext, useState } from "react";
import { CgClose } from "react-icons/cg";
import ActionButton from "../Buttons/ActionButton";
import { Custom } from "@/styles/custom";

const OverLayModal: FC = () => {
  const { closeOverlayModal, overlayModalShow } = useContext(ModalContext);

  return (
    <Modal
      backdrop="blur"
      isOpen={overlayModalShow}
      onClose={closeOverlayModal}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      classNames={{

        base: "bg-dark-200",
        body: "bg-dark-200",
        header: "bg-dark-200",
        footer: "bg-dark-200",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 items-center">
              <h2>How it works</h2>
              <h3 className="text-sm">Trade & Collect Digital Assets</h3></ModalHeader>
            <ModalBody>
              <p>
                <span className={`${Custom.goldgradient} font-bold text-3xl`}>StreetX</span> is the first exchange where Memecoins meet Collectibles.
              </p>
              <p>Trade, Collect, and Profit - All on a Bonding Curve.</p>

              <div className="sm:px-8 flex flex-col sm:gap-2">
                <div>
                  <p ><span className={`${Custom.goldgradient} font-bold`}>Step 1</span>: Pick a Token or Mint Your Own</p>
                  <p className="text-dark-50/80">&nbsp;Choose a trending collectible or launch your own i seconds.</p>
                </div>
                <div>
                  <p ><span className={`${Custom.goldgradient} font-bold`}>Step 2</span>: Buy on the Bonding Curve</p>
                  <p className="text-dark-50/80">&nbsp;The more people buy, the higher the price goes - get in early.</p>
                </div>
                <div>
                  <p ><span className={`${Custom.goldgradient} font-bold`}>Step 3</span>: Sell or Hold for Gains</p>
                  <p className="text-dark-50/80">&nbsp;Flip for profit or hold rare collectibles for long-term value</p>
                </div>
                <div>
                  <p ><span className={`${Custom.goldgradient} font-bold`}>Step 4</span>: Verified Collectibles & AI-Generated Art</p>
                  <p className="text-dark-50/80">&nbsp;Celebrities, brands, and cultural icons can claim their collectibles.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row px-8 gap-2 sm:gap-8">
                <ActionButton className="flex-1" name="Mint Now" onClick={closeOverlayModal} />
                <ActionButton className="flex-1" name="Trade Now" onClick={closeOverlayModal} />
              </div>
            </ModalBody>
            <ModalFooter className="">
              <div className="flex text-sm items-center divide-x-1 divide-dark-50/50 justify-center w-full">
                <Link href="/privacy" className="px-2 text-xs text-dark-50/50">Privacy Policy</Link>
                <Link href="/privacy" className="px-2 text-xs text-dark-50/50">Terms of Service</Link>
                <Link href="/privacy" className="px-2 text-xs text-dark-50/50">Fees</Link>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default OverLayModal;
