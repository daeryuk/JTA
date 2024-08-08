# data.py
class Data_Handler:
    def __init__(self):
        self.subject = ''
        self.question = ''
        self.info = ''
        self.cards = []

    def data_subject(self, data=None):
        if data is None:
            return self.subject
        else:
            self.subject = data

    def data_question(self, data=None):
        if data is None:
            return self.question
        else:
            self.question = data

    def data_info(self, data=None):
        if data is None:
            return self.info
        else:
            self.info = data

    def data_cards(self, data=None):
        if data is None:
            return self.cards
        else:
            self.cards = data
