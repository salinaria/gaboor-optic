import pandas as pd
import requests
import json
import os
import shutil

df = pd.read_csv('glassesSKU.csv')

counter = 0


for i in df['SKU'][200:]:

    counter += 1
    print(counter)

    url = 'https://glassesdbcached.jeeliz.com/sku/' + i
    response = requests.get(url)
    json_data = json.loads(response.text)
    array = json_data['intrinsic']['mats']

    for j in array:
        response3 = requests.get(
            'https://appstatic.jeeliz.com/jeefit/materials/' + j + '.json')

        json_text = json.loads(response3.text)
        arr = []
        arr.append(json_text['diffuseTexture'])
        arr.append(json_text['normalTexture'])

        for k in arr:
            if '/' in k:
                splited = k.split('/')
                response2 = requests.get(
                    'https://appstatic.jeeliz.com/jeefit/' + k, stream=True)

                if splited[2] != '_textures':
                    with open("./jeefit/materials/_textures/" + splited[2], 'wb') as out_file:
                        shutil.copyfileobj(response2.raw, out_file)
                else:
                    with open("./jeefit/materials/" + splited[2] + '/' + splited[3], 'wb') as out_file:
                        shutil.copyfileobj(response2.raw, out_file)
