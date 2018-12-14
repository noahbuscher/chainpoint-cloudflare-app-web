# Chainpoint Cloudflare App for Web

This is Chainpoint Client Web for Cloudflare. It's fairly simple in principle:

- Create a container element
- Dynamically add remote CCW client script tag
- Add the chainpoint-client-web div to populate
- Waits for the script tag to load
- Run `window.$ChainpointClient.init()`
