#!/bin/bash

# Set the GCP project to "fiyalo"
sudo gcloud config set project fiberxinnovations

# Deploy the app to Google Cloud Run
sudo gcloud run deploy
