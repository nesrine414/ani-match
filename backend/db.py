import mysql.connector

def get_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="ness150703**",  # بدّلها
        database="animatch"         # اسم الداتابيز متاعك
    )
