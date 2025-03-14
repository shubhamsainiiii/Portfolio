useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true); // Change navbar style when scrolled
        } else {
            setIsScrolled(false); // Reset navbar style
        }
    };

    window.addEventListener("scroll", handleScroll); // Listen for scroll events
    return () => {
        window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
}, []);
