@echo off
echo Attempting to start Portfolio...

:: Try python
python server.py
if %ERRORLEVEL% EQU 0 goto end

:: Try python3
echo 'python' command not found, trying 'python3'...
python3 server.py
if %ERRORLEVEL% EQU 0 goto end

:: Try py launcher
echo 'python3' command not found, trying 'py'...
py server.py
if %ERRORLEVEL% EQU 0 goto end

echo.
echo ================================================================
echo ERROR: Python was not found on your system.
echo Please install Python from https://www.python.org/downloads/
echo ================================================================
echo.
pause

:end
