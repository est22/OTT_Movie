import os
# 폴더 구조가 달라져도, 현재 폴더를 가져와서 사용할 수 있도록 설정
BASE_DIR = os.path.dirname(__file__)

# uri = mysql+pymysql://mysql_id/mysql_pw/localhost:3306/사용할 db 이름
SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:1124@localhost:3306/award_project'
# 메모리 사용량을 위해서 꺼둠
SQLALCHEMY_TRACK_MODIFICATIONS = False
