@echo off
echo ===================================================
echo   FIXING AI AUTHENTICATION (APPLICATION DEFAULT)
echo ===================================================
echo.
echo This step is REQUIRED for Vertex AI to work.
echo A browser window will open.
echo.
echo 1. Sign in with: guahar@uwo24.com
echo 2. Click ALLOW / CONTINUE
echo.
pause
call gcloud auth application-default login
echo.
echo Authentication complete. You can close this window.
pause
