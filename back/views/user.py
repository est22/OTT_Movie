from flask import redirect, request, render_template, jsonify, Blueprint, session, g, url_for, flash
from models import *
from datetime import datetime

api = Blueprint('user', __name__, url_prefix='/user')


@api.route('/favorites', methods=['GET', 'POST'])
def favorites():
    '''
    parameter : 
    GET : 
    POST : 
    '''
    return


@api.route('/reviews', methods=['GET', 'POST'])
def reviews():
    '''
    parameter : user_id
    GET : 
    POST : 
    '''
    return
