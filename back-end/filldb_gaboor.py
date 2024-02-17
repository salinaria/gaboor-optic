import requests


glass_api='http://localhost:8000/api/glass/'



def add_glass(name,sku_id,brand,price,sex,color):

    glass_body={
        "name":name,    
        "sku_id":sku_id,
        "brand":brand,
        "price":price,
        "sex":sex,
        "color":color,
    }
    response=requests.post(glass_api,json=glass_body)
    return response.status_code


import pandas as pd
import os
import random
from tqdm import tqdm
df=pd.read_excel("glassesSKU.xlsx")

all_images=os.listdir("store/images/")
prices_list=list(set([i for i in range(11,40)])-set([10,20,30,40]))
def fill_glasses():
    all_sent=True
    all_names=[]
    
    for i in tqdm(range(0,len(df))):
        if df["ID"][i]+".jpg" not in all_images:
            continue
        status_code=add_glass(df["Name"][i],df["ID"][i],df["Brand"][i],random.choice(prices_list)/10.0,df["Sex"][i],df["Color"][i])
        if status_code!=201:
            all_sent=False
            break
        # else:
        #     print(f"glass {i+1} added to db")
    print("***************************************")
    if all_sent:
        print("Glasses : OK")
    else:
        print("Glasses : ERROR")
    print("***************************************")

fill_glasses()