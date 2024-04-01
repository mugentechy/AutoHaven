import { useState, useEffect } from 'react';


function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const middleOfPage = window.innerHeight / 2;
      setShowButton(scrollTop > middleOfPage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="car-top" style={{ position: 'fixed', bottom: '20px', right: '20px', transition: 'all 0.3s', opacity: showButton ? '1' : '0', pointerEvents: showButton ? 'auto' : 'none' }}>
      <a href="#btn-back-to-top" onClick={scrollToTop}>
        <img src="/img/back-to-top.png" width="74" height="114" alt="Back to top" />
      </a>
    </div>
  );
}

export default ScrollToTop;
