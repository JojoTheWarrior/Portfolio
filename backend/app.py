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

        print("Fetching Duolingo stats...")
        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
        driver.get('https://www.duolingo.com/profile/JojoTheWarrior')
        time.sleep(3.5)

        streak_element = driver.find_element(By.CSS_SELECTOR, 'h4.-TMd4')
        streak_text = streak_element.text

        xp_parent_div = driver.find_element(By.XPATH, "//div[@class='_3eRJb' and .//div[@class='_3oUUc' and text()='Total XP']]")
        xp_element = xp_parent_div.find_element(By.XPATH, ".//h4[@class='-TMd4']")
        xp_text = xp_element.text

        driver.quit()
        return jsonify({'streak': streak_text, 'xp': xp_text})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/dmoj')
def get_dmoj():
    try:
        chrome_options = Options()
        chrome_options.add_argument("--headless")  # Run Chrome in headless mode
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument("--disable-gpu")  # Disable GPU acceleration
        chrome_options.add_argument("window-size=1920x1080")  # Optional, can help with rendering

        print("Fetching DMOJ stats...")
        driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
        driver.get('https://dmoj.ca/user/JojoTheWarrior')
        time.sleep(1)

        path_element = driver.find_element(By.CSS_SELECTOR, '.rate-group svg path')
        d_attribute = path_element.get_attribute('d')

        rating_element = driver.find_element(By.CSS_SELECTOR, '.rating')
        rating_value = rating_element.text

        rating_classes = rating_element.get_attribute('class')
        rating_color = "rgba(153,153,153,255)"

        if "rate-master" in rating_classes:
            rating_color = "rgba(250,177,4,255)"
        elif "rate-grandmaster" in rating_classes:
            rating_color = "rgba(230,0,0,255)"

        driver.quit()
        return jsonify({'d_attribute': d_attribute, 'rating_value': rating_value, 'rating_color': rating_color})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':

    host = '127.0.0.1'
    port = 5000
    print(f"Flask app running on http://{host}:{port}")
    app.run(host=host, port=port, debug=True)