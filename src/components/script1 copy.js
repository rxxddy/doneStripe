import { useEffect } from 'react';

const useScript2 = 'https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/js/webflow.353aee397.js' => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/js/webflow.353aee397.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, ['https://uploads-ssl.webflow.com/622210ec2e3d3a1a0c62e591/js/webflow.353aee397.js']);
};

export default useScript2;