@echo off
REM Script to package Lambda function with dependencies for Windows
REM Run this before terraform apply

cd /d "%~dp0"

REM Clean previous package
if exist lambda_package rmdir /s /q lambda_package
if exist lambda_function.zip del /f lambda_function.zip

REM Create package directory
mkdir lambda_package

REM Install dependencies
pip install -r lambda_requirements.txt -t lambda_package\ --upgrade

REM Copy handler
copy lambda_handler.py lambda_package\

echo Lambda package created successfully in lambda_package\
