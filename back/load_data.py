import csv
from datetime import date, datetime

from db_connect import db
from models import Movie

session = db.session

with open('test_data.csv', 'r') as f:
    reader = csv.DictReader(f)

    for row in reader:
        # img_link 수정
        img_link = f"/static/img/{row['id']}"
        try:
            open(f'{img_link}.png')
            img_link += '.png'
        except:
            img_link += '.jpg'

        award_year = datetime.strptime(
            row['award_year'], '%Y-%m-%d').date()
        # movie
        movie = Movie(
            id=int(row['id']),
            movie_name=row['movie_name'],
            award_name=row['award_name'],
            award_year=row['award_year'],
        )
        # genre
        genre = Genre(
            id=int(row['id']),
        )
        db.session.add(movie)
    

    db.session.commit()
