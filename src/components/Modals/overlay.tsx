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
            </ModalHeader>
            <ModalBody className=" font-bold">
              <p className="text-center font-bold text-xl">🔥 How it Works 🔥</p>
              <p className="text-center"> 🚀 Mint, Trade & Collect Digital Assets</p>
              <p className="text-center">
                🚀<span className={`${Custom.goldgradient} text-xl`}>StreetX</span> is the first exchange to launch <br /> Initial Collectible Offerings (ICOs)
              </p>
              <p className="text-center">🔥 Be the First to Own a Legendary Digital Collectible!</p>

              <div className="sm:px-8 flex flex-col sm:gap-2 ">
                <div>
                  <p >✅<span className={`${Custom.goldgradient} font-bold`}> Step 1</span>: Pick a Trending Collectible or Mint Your Own in Seconds!</p>
                </div>
                <div>
                  <p >✅<span className={`${Custom.goldgradient} font-bold`}>Step 2</span>: Buy on the Bonding Curve - Prices Rise as More People Buy!</p>
                </div>
                <div>
                  <p >✅<span className={`${Custom.goldgradient} font-bold`}>Step 3</span>: Sell for Profit or Hold Rare Collectibles for Long-Term Gains</p>
                </div>
                <div>
                  <p >✅<span className={`${Custom.goldgradient} font-bold`}>Step 4</span>: Verified Collectibles with AI-Generated Art - Claim yours Now!</p>
                </div>
              </div>

              <div className="flex flex-col px-8 gap-2 sm:gap-4">
                <ActionButton className="flex-1" name="🔥 Mint an ICO Now" onClick={closeOverlayModal} />
                <ActionButton className="flex-1" name="⚡ Trade Collectibles" onClick={closeOverlayModal} />
              </div>
            </ModalBody>
            <ModalFooter className="">
              <div className="flex text-sm items-center divide-x-1 divide-dark-50/50 justify-center w-full">
                <Link href="/privacy" className="px-2 text-xs text-dark-50/50">🔐 Privacy Policy</Link>
                <Link href="/privacy" className="px-2 text-xs text-dark-50/50">📜 Terms of Service</Link>
                <Link href="/privacy" className="px-2 text-xs text-dark-50/50">💰 Fees</Link>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default OverLayModal;
