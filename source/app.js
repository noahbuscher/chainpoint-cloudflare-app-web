function init() {
  let options = INSTALL_OPTIONS;
  let container;

  function updateElement() {
    // Init parent container
    container = INSTALL.createElement(options.location, container);
    container.setAttribute('app', 'chainpoint-cloudflare-app-web');

    // Dynamically add CCW script
    const script = document.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.setAttribute('src', 'https://cdn.jsdelivr.net/gh/noahbuscher/chainpoint-client-web@3a882f5/dist/bundle.js');
    document.getElementsByTagName('body')[0].appendChild(script);

    // Add CCW instance
    const cp = document.createElement('div');
    cp.setAttribute('id', 'chainpoint-client-web');
    container.appendChild(cp);

    // Make sure container hasn't been overwritten
    if (!document.getElementById('chainpoint-client-web')) return;

    // Initialize CCW when script loaded
    if (script.readyState) { // Internet Explorer
      script.onreadystatechange = function() {
        if (script.readyState === 'complete') {
          window.$ChainpointClient.init();
          script.onreadystatechange = null;
        }
      };
    } else { // Other browsers
      script.onload = function() {
        window.$ChainpointClient.init();
      }
    }
  }

  window.INSTALL_SCOPE = {
    setOptions(nextOptions) {
      options = nextOptions

      updateElement()
    },
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement);
  } else {
    updateElement()
  }
}

init();
