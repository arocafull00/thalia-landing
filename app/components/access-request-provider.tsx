"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { AccessRequestModal } from "./access-request-modal";

type AccessRequestContextValue = {
  openAccessModal: () => void;
  closeAccessModal: () => void;
};

const AccessRequestContext = createContext<AccessRequestContextValue | null>(
  null,
);

export function useAccessRequest() {
  const context = useContext(AccessRequestContext);
  if (!context) {
    throw new Error(
      "useAccessRequest must be used within AccessRequestProvider",
    );
  }
  return context;
}

export function AccessRequestProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openAccessModal = useCallback(() => {
    setOpen(true);
  }, []);

  const closeAccessModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <AccessRequestContext.Provider
      value={{ openAccessModal, closeAccessModal }}
    >
      {children}
      <AccessRequestModal open={open} onClose={closeAccessModal} />
    </AccessRequestContext.Provider>
  );
}
