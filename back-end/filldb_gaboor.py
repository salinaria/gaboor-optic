import requests


movie_api='http://localhost:8000/api/movie/'



def add_movie(name,sku_id,brand,price,sex,color):

    movie_body={
        "name":name,    
        "sku_id":sku_id,
        "brand":brand,
        "price":price,
        "sex":sex,
        "color":color,
    }
    response=requests.post(movie_api,json=movie_body)
    return response.status_code


import pandas as pd
import os
import random
from tqdm import tqdm
df=pd.read_excel("glassesSKU.xlsx")

all_images=os.listdir("store/images/")

def fill_movies():
    all_sent=True
    all_names=[]
    
    for i in tqdm(range(0,len(df))):
        if df["ID"][i]+".jpg" not in all_images:
            continue
        status_code=add_movie(df["Name"][i],df["ID"][i],df["Brand"][i],random.randint(10,40)/10.0,df["Sex"][i],df["Color"][i])
        if status_code!=201:
            all_sent=False
            break
        # else:
        #     print(f"movie {i+1} added to db")
    print("***************************************")
    if all_sent:
        print("Movies : OK")
    else:
        print(df["Name"][i],df["ID"][i],df["Brand"][i],random.randint(10,40)/10.0,df["Sex"][i],df["Color"][i])
        print("Movies : ERROR")
    print("***************************************")

fill_movies()

