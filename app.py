# app.py
from flask import Flask
app = Flask(__name__)

from views import main_views,question_views, drawCard, result
app.register_blueprint(main_views.bp)
app.register_blueprint(question_views.bp)
app.register_blueprint(drawCard.bp)
app.register_blueprint(result.bp)


app.run(host="0.0.0.0",port=80)

