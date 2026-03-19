"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import ContactModal from "@/components/ContactModal";

interface ModalContextValue {
  openModal: (service?: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue>({
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");

  const openModal = useCallback((s = "") => {
    setService(s);
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ContactModal open={open} onClose={closeModal} defaultService={service} />
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
