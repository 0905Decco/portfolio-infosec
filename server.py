import http.server
import socketserver
import webbrowser
import os
import sys

# Configuration
PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

def main():
    # Change to directory of script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    print("Starting Portfolio Server...")
    
    port = PORT
    httpd = None
    
    # Find available port and create server
    while True:
        try:
            httpd = socketserver.TCPServer(("", port), Handler)
            break
        except OSError:
            print(f"Port {port} is busy, trying {port + 1}...")
            port += 1

    try:
        url = f"http://localhost:{port}/index.html"
        print(f"Serving at {url}")
        
        # Open browser after a slight delay to ensure server is ready
        webbrowser.open(url)
        
        print("Press Ctrl+C to stop the server.")
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
    except Exception as e:
        print(f"An error occurred: {e}")
        input("Press Enter to close...")
    finally:
        if httpd:
            httpd.server_close()

if __name__ == "__main__":
    main()
