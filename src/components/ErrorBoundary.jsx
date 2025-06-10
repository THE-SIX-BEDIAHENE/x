// import React from "react";

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false, error: null, errorInfo: null };
//   }

//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     // Log error details for debugging
//     console.error("Error caught by boundary:", error, errorInfo);
    
//     this.setState({
//       error: error,
//       errorInfo: errorInfo
//     });

//     // You can also log the error to an error reporting service here
//     // logErrorToService(error, errorInfo);
//   }

//   handleRetry = () => {
//     this.setState({ hasError: false, error: null, errorInfo: null });
//     window.location.reload();
//   };

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-600 to-purple-800 text-white font-sans">
//           <div className="text-center p-8 max-w-lg bg-white bg-opacity-10 rounded-xl backdrop-blur-lg border border-white border-opacity-20 shadow-2xl">
//             <div className="text-6xl mb-4">🚨</div>
//             <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
//             <p className="text-lg mb-8 opacity-90">
//               We're sorry, but something unexpected happened.
//             </p>
            
//             <div className="flex gap-4 justify-center mb-8 flex-wrap">
//               <button 
//                 onClick={this.handleRetry} 
//                 className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//               >
//                 Try Again
//               </button>
//               <button 
//                 onClick={() => window.location.href = "/"} 
//                 className="px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold rounded-lg border border-white border-opacity-30 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//               >
//                 Go Home
//               </button>
//             </div>

//             {process.env.NODE_ENV === "development" && (
//               <details className="text-left bg-black bg-opacity-30 p-4 rounded-lg mt-4">
//                 <summary className="cursor-pointer font-semibold mb-2 hover:text-yellow-300 transition-colors">
//                   Error Details (Development)
//                 </summary>
//                 <pre className="text-xs overflow-x-auto text-gray-300 mb-2 whitespace-pre-wrap">
//                   {this.state.error && this.state.error.toString()}
//                 </pre>
//                 <pre className="text-xs overflow-x-auto text-gray-400 whitespace-pre-wrap">
//                   {this.state.errorInfo.componentStack}
//                 </pre>
//               </details>
//             )}
//           </div>
//         </div>
//       );
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;