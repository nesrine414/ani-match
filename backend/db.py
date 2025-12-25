import pymysql

def get_db():
    return pymysql.connect(
        host="localhost",
        user="root",
        password="ness150703**",
        database="animatch_db",
        cursorclass=pymysql.cursors.DictCursor
    )
