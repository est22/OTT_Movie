from flask import redirect, request, render_template, jsonify, Blueprint, session, g, url_for, flash
from models import *
from datetime import datetime

api = Blueprint('main', __name__, url_prefix='/')


@api.route('/', methods=['GET', 'POST'])
def main():
    '''
    parameter : 
    GET : 
    POST : 
    '''
    return "<html><body><h1>hello world</h1></body></html>"
