from __future__ import division, print_function
import sys
import os
import glob
import re



# Flask utils
import flask
from flask import Flask, redirect, url_for, request, render_template


# Define a flask app
app = Flask(__name__)








@app.route('/', methods=['GET'])
def index():
    # Main page
    return render_template('index.html')




    


    #this section is used by gunicorn to serve the app on Heroku
if __name__ == '__main__':

        app.run()
    #uncomment this section to serve the app locally with gevent at:  http://localhost:5000
    # Serve the app with gevent 
        #http_server = WSGIServer(('', 5000), app)
        #http_server.serve_forever()