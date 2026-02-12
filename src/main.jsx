// In the no-build environment, React and ReactDOM are global variables
const App = window.App; // We will define App in a way that it's accessible or import it if we use modules. 
// Actually, let's just import App from the file if we use modules, but with Babel standalone, imports can be tricky without a server.
// A simpler way for a local file:// portfolio (if they open it directly) is strictly one file or globals.
// BUT, ES modules don't work well with file:// protocol due to CORS.
// Since the user is likely running this locally by double-clicking index.html or using a simple server, we should be careful.
// Let's assume they might use the "Live Server" or "Django Server" they mentioned.
// If they open index.html directly, modules will fail.
// Strategy: Concatenate or use globals.
// Let's try to keep it modular but valid.

// We need to wait for the App component to be defined.
// To make this robust for file:// usage, it's safer to not use ES modules for local file access.
// We will define components in global scope for simplicity in this specific "no-node" constraint.

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
    // Initialize Lucide icons after render
    setTimeout(() => {
        lucide.createIcons();
    }, 100);
});
