# result.py
from flask import Blueprint, render_template

bp = Blueprint('result', __name__, url_prefix='/result')

@bp.route('/')
def result():
    return render_template('result.html')
