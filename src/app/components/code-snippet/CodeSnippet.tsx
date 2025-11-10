import React, { useEffect } from 'react';
import { Codesnippet, StyledPre, Text } from './CodeSnippet.style';
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';

type CodeSnippetProps = {
  isFeatureAppIntegration: boolean;
};
const CodeSnippet: React.FC<CodeSnippetProps> = ({
  isFeatureAppIntegration,
}): React.ReactElement => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const reactNativeCodeExample = `

const App = () => {
  // State to manage loading status of the WebView
  const [loading, setLoading] = useState(true);

  // Reference to the WebView component
  const webViewRef = useRef(null);

  // Function to send a message to the WebView
  const sendMessageToWebView = () => {
    const message = 'Hello from React Native'; // Message to send to the WebView

    // Check if the WebView reference is available
    if (webViewRef.current) {
      console.log('Sending message to WebView:', message);
      
      // Inject JavaScript into the WebView to send the message
      webViewRef.current.injectJavaScript(\`
        window.ReactNativeWebView.postMessage('\${message}');
      \`);
    }
  };

  // Function to handle messages received from the WebView
  const handleMessage = (event) => {
    // Log the message received from the WebView
    console.log('Message from WebView: ', event.nativeEvent.data);
  };

  return (
    <WebView
      ref={webViewRef} // Pass the ref to the WebView
      source={{ uri: 'http://192.168.1.79:3000/' }} // URL of your web app
      style={{ flex: 1 }} // Style to make WebView take up the full screen
      onLoad={() => setLoading(false)} // Handle the load event to stop loading indicator
      onError={() => setLoading(false)} // Handle errors and stop loading indicator
      javaScriptEnabled={true} // Enable JavaScript in the WebView
      onMessage={handleMessage} // Handle messages received from the WebView
    />
  );
};

export default App;
`;

  const featureCodeExample = `
<FeatureAppLoader
  featureAppId='hello:fa-template-federated'
  src={\`\${process.env.PUBLIC_URL}/__feature_hub_feature_app_module_container__.js\`}
  moduleType='federated'
  config={{ data: '', env: '' }}
  onError={(error) => error}
> 
  {({ error, featureAppNode, loading }) => {
    return error ? (<ErrorUi productName={'Product Feature Name' } />) : (
    <div style={{ display: loading ? 'none' : 'block' }}>{featureAppNode}</div>);
  }}
</FeatureAppLoader>
`;

  return (
    <Codesnippet>
      <StyledPre>
        <Text className='language-jsx'>
          {isFeatureAppIntegration ? featureCodeExample : reactNativeCodeExample}
        </Text>
      </StyledPre>
    </Codesnippet>
  );
};

export default CodeSnippet;
