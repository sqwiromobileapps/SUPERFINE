import React from 'react';
import { ScrollView, Text } from 'react-native';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error, errorInfo) {
    // `name`/`message`/`stack` are non-enumerable, so JSON.stringify(error) drops
    // them and yields "{}" — read them off explicitly instead. The same reason an
    // `Object.keys(error).length` guard never fires for a real Error.
    const details = {
      name: error && error.name,
      message: (error && error.message) || String(error),
      stack: error && error.stack,
      componentStack: errorInfo && errorInfo.componentStack,
    };
    // Log it as well: on a release build this is the only way to read the error
    // off the device (`adb logcat`), since there is no redbox.
    console.error('ErrorBoundary', details.message, details.stack);
    this.setState({ hasError: true, error: details });
  }

  render() {
    if (this.state.hasError) {
      const { name, message, stack, componentStack } = this.state.error || {};
      return (
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          <Text selectable style={{ fontWeight: 'bold', marginBottom: 12 }}>
            {name ? `${name}: ${message}` : message}
          </Text>
          {!!stack && (
            <Text selectable style={{ fontSize: 11, marginBottom: 12 }}>
              {stack}
            </Text>
          )}
          {!!componentStack && (
            <Text selectable style={{ fontSize: 11 }}>
              {componentStack}
            </Text>
          )}
        </ScrollView>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
