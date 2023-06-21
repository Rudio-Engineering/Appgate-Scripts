REM Helps identify the Chasis of the devices, between laptop or desktop

@echo off

systeminfo | findstr /C:"Model:" | findstr /C:"Laptop" > nul
if %errorlevel% == 0 (
    echo laptop.
) else (
    echo desktop.
)
