# question_view.py
from flask import Blueprint, render_template, request
import data

# 데이터 핸들러 인스턴스 생성
temp_db = data.Data_Handler()

# 블루프린트 설정
bp = Blueprint('question', __name__, url_prefix='/question')

@bp.route('/')
def categori():
    return render_template('question_categori.html')

@bp.route('/info', methods=["GET", "POST"])
def info():
    if request.method == 'POST':
        # 사용자가 입력한 주제와 질문을 가져와서 저장
        subject = request.form['subject']
        question = request.form['question']
        
        temp_db.data_subject(subject)
        temp_db.data_question(question)
        
        return render_template('question_info.html')

@bp.route('/drawCard', methods=["GET", "POST"])
def draw_card():
    if request.method == 'POST':
        # 세부 정보를 가져와서 저장
        detail = request.form['detail']
        temp_db.data_info(detail)
        return render_template('drawCard.html')

@bp.route('/result', methods=["POST"])
def result():
    # 선택된 카드를 가져와서 저장
    selected_cards = request.form.getlist('cards')
    temp_db.data_cards(selected_cards)
    
    # 저장된 데이터를 가져옴
    subject = temp_db.data_subject()
    question = temp_db.data_question()
    detail = temp_db.data_info()
    cards = temp_db.data_cards()
    
    # 데이터를 리스트에 담아서 전달
    result_data = [subject, question, detail, cards]
    
    return render_template('result.html', result_data=result_data)
