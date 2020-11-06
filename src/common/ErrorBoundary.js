
export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false } 
    };
    
    static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
    };
    
  render() {
    if (this.state.hasError) {
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children; 
  }
}