# AI-Powered College Search Platform

Welcome to the AI-Powered College Search Platform, an advanced tool designed to help users search for colleges using AI.

## Overview

This platform allows users to input search criteria and receive personalized college search results, leveraging OpenAI's API for natural language processing.

## Prerequisites

- **OpenAI API Key**: [Sign up here](https://platform.openai.com/signup/).

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ShiraGuez/AI-College-Search.git
   cd AI-College-Search
   ```

2. **Set up environment variables**:
   Create a `.env` file with your OpenAI API key:
   ```bash
   OPENAI_API_KEY=<your_openai_key>
   ```

3. **Install backend requirements**:
   ```bash
   pip install -r backend/backend_requirements.txt
   ```

4. **Run the app**:
   ```bash
   docker-compose -f docker-compose-college.yml up
   ```

5. Open the app in your browser at:
   ```sh
   http://localhost:3000
   ```

## Features

- AI-Powered Search
- User-Friendly Interface
- Personalized Results

## Contact

For inquiries, contact us at [your_email@example.com](mailto:your_email@example.com).
