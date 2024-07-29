from flask import Flask, jsonify
from flask_cors import CORS
# selenium imports
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
import time

app = Flask(__name__)
CORS(app)

streak_text = -1

@app.route('/api/duolingo-streak')
def get_duolingo_streak():
    try:
        chrome_options = Options()
        chrome_options.add_argument("--headless")  # Run Chrome in headless mode
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument("--disable-gpu")  # Disable GPU acceleration
        chrome_options.add_argument("window-size=1920x1080")  # Optional, can help with rendering

        print("Fetching Duolingo streak...")
        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
        driver.get('https://www.duolingo.com/profile/JojoTheWarrior')
        time.sleep(7)
        streak_element = driver.find_element(By.CSS_SELECTOR, 'h4.-TMd4')
        streak_text = streak_element.text
        driver.quit()
        return jsonify({'streak': streak_text})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':

    host = '127.0.0.1'
    port = 5000
    print(f"Flask app running on http://{host}:{port}")
    app.run(host=host, port=port, debug=True)