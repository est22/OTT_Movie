from db_connect import db
from datetime import datetime


class Movie(db.Model):
    '''영화 테이블'''
    __tablename__ = 'movie'

    id = db.Column(db.Integer, primary_key=True)
    movie_name = db.Column(db.String(255), nullable=False)  # 영화이름
    ranking = db.Column(db.Integer, nullable=False)  # 영화의 순위
    award_year = db.Column(db.Date, nullable=False)  # 수상연도
    award_name = db.Column(db.String(255), nullable=False)  # 수상이름
    release_year = db.Column(db.Date, nullable=False)  # 개봉연도
    running_time = db.Column(db.String(255), nullable=False)  # 러닝타임(상영시간)
    storyline = db.Column(db.Text, nullable=False)  # 영화의 줄거리
    user_rating = db.Column(db.Integer, nullable=False)  # 유저평점
    critic_rating = db.Column(db.Integer)  # 전문가평점
    img = db.Column(db.String(255), nullable=False)  # 포스터(이미지)
    review_summary = db.Column(db.Text)  # imdb리뷰요약

    # movie:review = 1:n
    reviews = db.relationship('Review', backref='movie')
    # movie:user = n:n connect
    user_data = db.relationship('User', secondary=movie_user,
                             backref='movie')  # backref : 역참조
    # movie:genre = n:n connect
    genre_data = db.relationship('Genre', secondary=movie_genre, backref='movie')


class User(db.Model):
    '''유저 테이블'''
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(20), nullable=False)
    password = db.Column(db.String(255), nullable=False)

    def __init__(self, user_name, password):
        self.user_name = user_name
        self.password = password


'''영화-유저 연결테이블(favorite)'''
movie_user = db.Table('movie_user',
                      db.Column('movie_id', db.Integer, db.ForeignKey(
                          'movie.id'), primary_key=True),
                      db.Column('user_id', db.Integer, db.ForeignKey(
                          'user.id'), primary_key=True)
                      )


class Genre(db.Model):
    '''장르 테이블'''
    __tablename__ = 'genre'

    id = db.Column(db.Integer, primary_key=True)
    genre_name = db.Column(db.String(255))

    movie = db.relationship(
        'Movie', secondary=movie_genre, backref="movie_genre")


'''영화-장르 연결테이블'''
movie_genre = db.Table('movie_genre',
    db.Column('movie_id', db.Integer, db.ForeignKey('movie.id'), primary_key=True),
    db.Column('genre_id', db.Integer, db.ForeignKey('genre.id'), primary_key=True),
                       )


class Review(db.Model):
    '''사용자 작성 리뷰 테이블'''
    __tablename__ = 'review'

    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(255), nullable=False)
    write_time = db.Column(db.DateTime, default=datetime.utcnow(), nullable=False)  # 작성 시간
    content = db.Column(db.Text(), nullable=False)  # 댓글 내용
    rating = db.Column(db.Integer, nullable=False)  # 평가 별점

    # movie:review = 1:n (fk)
    movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'), nullable=False)

    def __init__(self, user_name, write_time, content, rating, movie_id):
        self.user_name = user_name
        self.write_time = write_time
        self.content = content
        self.rating = rating
        self.movie_id = movie_id


if __name__ == "__main__":
    db.create_all()
