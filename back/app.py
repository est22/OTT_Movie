from flask import Flask
from db_connect import db
from models import *
import config


def create_app():
    app = Flask(__name__)
    app.config.from_object(config)

    db.init_app(app)

    # 블루프린트
    from views import main
    app.register_blueprint(main.bp)

    # 시크릿 키 (나중에 수정)
    app.secret_key = "secret_key_for_session"
    # 세션 사용을 위해서
    app.config['SESSION_TYPE'] = 'filesystem'

    with app.app_context():
        db.create_all()

    return app


if __name__ == "__main__":
    create_app().run(debug=True)
