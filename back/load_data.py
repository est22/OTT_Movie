# DB에 주어진 csv데이터를 넣는 python 또는 sql을 실행
import csv
from datetime import date, datetime

from db_connect import db
from models import Movie

session = db.session

with open('db/imdb_oscar_award_data.csv', 'r') as f:
    reader = csv.DictReader(f)

    for row in reader:
        movie = Movie(
            id=int(row['id']),
            movie_name=row['movie_name'],
            ranking=row['ranking'],
            award_year=int(row['award_year']),
            award_name=row['award_name'],
            release_year=int(row['release_year']),
            running_time=row['running_time'],
            storyline=row['storyline'],
            user_rating=float(row['user_rating']),
            critic_rating=float(row['critic_rating']),
            img_url=row['img_url'],
            review_summary=row['review_summary'],
            genre1=row['genre1'],
            genre2=row['genre2'],
            genre3=row['genre3'],
            genre4=row['genre4'],
        )
        db.session.add(movie)
    db.session.commit()
