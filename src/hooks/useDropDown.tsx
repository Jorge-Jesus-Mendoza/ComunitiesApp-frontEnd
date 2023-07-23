import { useState } from 'react';

const useDropdown = (initialState: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleOpen = () => setIsOpen(prevState => !prevState);

  return { isOpen, toggleOpen };
};

export default useDropdown;
