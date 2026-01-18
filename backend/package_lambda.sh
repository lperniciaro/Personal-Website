#!/bin/bash
set -e

# Script to package Lambda function with dependencies
# Run this before terraform apply

cd "$(dirname "$0")"

# Clean previous package
rm -rf lambda_package
rm -f lambda_function.zip

# Create package directory
mkdir -p lambda_package

# Install dependencies
pip install -r lambda_requirements.txt -t lambda_package/ --upgrade

# Copy handler
cp lambda_handler.py lambda_package/

echo "Lambda package created successfully in lambda_package/"
