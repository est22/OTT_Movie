from db_connect import db
from datetime import datetime


class Movie(db.Model):
    '''영화 테이블'''
    __tablename__ = 'movie'

    id = db.Column(db.Integer, primary_key=True)
    movie_name = db.Column(db.String(255), nullable=False)  # 영화이름
    release_year = db.Column(db.Date, nullable=False)  # 개봉연도
    award_name = db.Column(db.String(255), nullable=False)  # 상이름
    award_year = db.Column(db.Date, nullable=False)  # 수상연도
    # 러닝타임(상영시간)
    running_time = db.Column(db.String(255), nullable=False)
    summary = db.Column(db.Text, nullable=False)  # 줄거리
    rating = db.Column(db.Integer, nullable=False)  # 별점
    director = db.Column(db.String(255), nullable=False)  # 감독
    img_link = db.Column(db.String(255), nullable=False)  # 포스터(이미지)
    # movie:review = 1:n
    reviews = db.relationship('Review', backref = 'review')

class User(db.Model):
    '''유저 테이블'''
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(20), nullable=False)
    password = db.Column(db.String(255), nullable=False)

    def __init__(self, user_name, password):
        self.user_name = user_name
        self.password = password


class Movie_User(db.Model):
    '''영화-유저 중간자 테이블(favorite)'''
    __tablename__ = 'user_movie'


class Genre(db.Model):
    '''장르 테이블'''
    __tablename__ = 'genre'

    id = db.Column(db.Integer, primary_key=True)
    genre_name = db.Column(db.String(255))


class Movie_Genre(db.Model):
    '''영화-장르 중간자 테이블'''
    __tablename__ = 'user_movie'


class Actor(db.Model):
    '''배우 테이블'''
    __tablename__ = 'keyword'

    id = db.Column(db.Integer, primary_key=True)
    actor_name = db.Column(db.String(255))


class Review(db.Model):
    '''사용자 작성 리뷰 테이블'''
    __tablename__ = 'review'

    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(255), nullable=False)
    content = db.Column(db.Text(), nullable=False)  # 댓글 내용
    write_time = db.Column(db.DateTime, default=datetime.utcnow())  # 작성 시간
    rating = db.Column(db.Integer, nullable=False)  # 평가 별점
    # movie_id = db.relationship('movie.id')
    movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'))

    def __init__(self, user_name, movie_id):
        self.user_name = user_name
        self.movie_id = movie_id


if __name__ == "__main__":
    db.create_all()
