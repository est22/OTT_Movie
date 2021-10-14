from flask import redirect, request, render_template, jsonify, Blueprint, session, g, url_for, flash
from models import *
from datetime import datetime

api = Blueprint('movie', __name__, url_prefix='/movie')


@api.route('/movie', methods=['GET', 'POST'])
def movie():
    '''
    parameter : 
    GET : 
    POST : 
    '''
    return
