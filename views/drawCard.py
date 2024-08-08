# drawCard.py
from flask import Blueprint, render_template

bp = Blueprint('drawCard', __name__, url_prefix='/drawCard')

@bp.route('/')
def drawCard():
    return render_template('drawCard.html')
