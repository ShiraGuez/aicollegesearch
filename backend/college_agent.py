import openai
import os

class CollegeAgent:
    def __init__(self):
        openai.api_key = os.getenv('OPENAI_API_KEY')

    def run(self, criteria: str):
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=f"Find colleges based on {criteria}",
            max_tokens=200
        )
        return response.choices[0].text
