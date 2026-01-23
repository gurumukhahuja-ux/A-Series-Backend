@echo off
echo ===================================================
echo     FIXING GOOGLE CLOUD LOGIN FOR AI MALL
echo ===================================================
echo.
echo A browser window will open.
echo Please SIGN IN with: guahar@uwo24.com
echo and click ALLOW.
echo.
pause
call gcloud auth login --update-adc
echo.
echo Login process finished. You can now close this window.
pause
