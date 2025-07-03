import { useEffect} from 'react';


const Slider = () => {
  useEffect(() => {

    const container = document.getElementById('logoContainer');

    if (container) {
      // Function to continuously scroll the container
      const scrollContainer = () => {
        container.scrollLeft += 1; // Adjust the scroll speed as needed
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0; // Reset to the beginning when scrolled to the end
        }
      };

      // Call the scrollContainer function in intervals for animation
      const interval = setInterval(scrollContainer, 10); // Adjust the interval for smoother or faster scrolling

      return () => clearInterval(interval); // Clean up the interval on component unmount
    }


  }, []);

    return (
        <>


<div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }} id="logoContainer">
  <img src="https://wso2.cachefly.net/wso2/sites/all/2024/choreo/logo-set1.webp" alt="Logo 1" className="logo ls-is-cached lazyloaded" loading="lazy"/>
  <img src="https://wso2.cachefly.net/wso2/sites/all/2024/choreo/logo-set-9.webp" alt="Choreo customer Logos 9" className="logo ls-is-cached lazyloaded"  loading="lazy"/>
  
  <img src="https://wso2.cachefly.net/wso2/sites/all/2024/choreo/logo-set3-N.webp" alt="Logo 3" className="logo ls-is-cached lazyloaded" loading="lazy"/>
  <img src="https://wso2.cachefly.net/wso2/sites/all/2024/choreo/logo-set4.webp" alt="Choreo customer Logos 4" className="logo ls-is-cached lazyloaded"  loading="lazy"/>
  <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/logo-set2-new-01.webp" alt="Choreo customer Logos 5" className="logo ls-is-cached lazyloaded"  loading="lazy"/>
  <img src="https://wso2.cachefly.net/wso2/sites/all/2024/choreo/logo-set6-N.webp" alt="Choreo customer Logos 6" className="logo ls-is-cached lazyloaded"  loading="lazy"/>
   <img src="https://wso2.cachefly.net/wso2/sites/all/2024/choreo/logo-set7.webp" alt="Choreo customer Logos 7" className="logo ls-is-cached lazyloaded"  loading="lazy"/>
   <img src="https://wso2.cachefly.net/wso2/sites/all/2024/choreo/logo-set-9.webp" alt="Choreo customer Logos 9" className="logo ls-is-cached lazyloaded"  loading="lazy"/>
   <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/logo-set2-new-01.webp" alt="Choreo customer Logos 8" className="logo ls-is-cached lazyloaded"  loading="lazy"/>
   <img src="https://wso2.cachefly.net/wso2/sites/all/2024/choreo/logo-set3-N.webp" alt="Choreo customer Logos 15" className="logo ls-is-cached lazyloaded" loading="lazy"/>
   <img src="https://wso2.cachefly.net/wso2/sites/all/2024/choreo/logo-set7.webp" alt="Choreo customer Logos 9" className="logo ls-is-cached lazyloaded"  loading="lazy"/>
   <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/logo-set2-new-01.webp" alt="Choreo customer Logos 10" className="logo ls-is-cached lazyloaded"  loading="lazy"/>
   <img src="https://wso2.cachefly.net/wso2/sites/all/2024/choreo/logo-set-9.webp" alt="Choreo customer Logos 9" className="logo ls-is-cached lazyloaded"  loading="lazy"/>
   <img src="https://wso2.cachefly.net/wso2/sites/all/2024/choreo/logo-set3-N.webp" alt="Choreo customer Logos 14" className="logo ls-is-cached lazyloaded" loading="lazy"/>
   <img src="https://wso2.cachefly.net/wso2/sites/all/2024/choreo/logo-set3-N.webp" alt="Choreo customer Logos 13" className="logo ls-is-cached lazyloaded" loading="lazy"/>

</div>




        </>
    )
}
export default Slider;






