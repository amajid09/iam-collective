// eslint-disable-next-line
const reportWebVitals = (onPerfEntry?: any): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals')
      .then(({ onCLS, onFCP, onLCP, onTTFB }) => {
        onCLS(onPerfEntry);
        onFCP(onPerfEntry);
        onLCP(onPerfEntry);
        onTTFB(onPerfEntry);
      })
      .catch(console.error);
  }
};
export default reportWebVitals;
