from flask import redirect, request, render_template, jsonify, Blueprint, session, g, url_for, flash
from models import *
from datetime import datetime

api = Blueprint('movie', __name__, url_prefix='/movies')


@api.route('/<int:movie_id>', methods=['GET', 'POST'])
def movie():
    '''
    parameter : movie_id
    GET : 
    POST : 
    '''
    return


@api.route('/<int:movie_id>/like', methods=['GET', 'POST'])
def likeMovies():
    '''
    parameter : movie_id
    GET : 
    POST : 
    '''
    return


@api.route('/<int:movie_id>/review', methods=['GET', 'POST'])
def create_movieReview():
    '''
    parameter : movie_id
    GET : 
    POST : 
    '''
    return


# @api.route('/<int:movie_id>/review/<int:review_id>', methods=['GET', 'POST'])
# def delete_movieReview():
#     '''
#     parameter : movie_id, review_id
#     GET :
#     POST :
#     '''
#     return
