import React from "react";
import { ReactNodeChildren } from "../model/model";

const ClientOnly = ({ children, ...delegated } : ReactNodeChildren) => {

  const [hasMounted, setHasMounted] = React.useState(false);

  const handleScroll = () => { 
    const header = document.getElementById('header')
    if (header?.scrollLeft != null) {
      header.scrollLeft = document.documentElement.scrollLeft
    }
  }

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, true)
    return () => window.removeEventListener('scroll', handleScroll, false)
  }, []);

  if (!hasMounted) return null

  return (
    <React.Fragment {...delegated}>
      {children}
    </React.Fragment>
  );
}

export default ClientOnly