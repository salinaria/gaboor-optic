import PIL
from PIL import Image
import numpy as np
import cv2
import matplotlib.pyplot as plt

import os
directory = './'

for file in os.listdir(directory):
    if file != 'resize.py':    
        image = Image.open(file)
        width = image.width
        height = image.height
        if not (width == 900 and height == 540):
            width_new = int(width * 540 / image.height)
            new_image = image.resize((width_new, 540))
            if width_new < 900:
                new_image=np.asarray( new_image, dtype="uint8" )
                im = np.zeros((540, 900,3), dtype='uint8')
                for j in range(540):
                    hi = 0
                    for i in range(0,int((900 - width_new)/2)):
                        im[j][i] = (255,255,255)
                    for i in range(int((900 - width_new)/2), int((900 + width_new)/2)):
                        im[j][i] = new_image[j][hi]
                        hi = hi + 1
                    for i in range(int((900 + width_new)/2),900):
                        im[j][i] = (255,255,255)
                im = Image.fromarray(im)
                im.save(file)
            else:
                height_new = int(height * 900 / image.width)
                new_image = image.resize((900, height_new))
                new_image=np.asarray( new_image, dtype="uint8" )
                im = np.zeros((540, 900,3), dtype='uint8')
                for j in range(900):
                    hi = 0
                    for i in range(0,int((540 - height_new)/2)):
                        im[i][j] = (255,255,255)
                    for i in range(int((540 - height_new)/2), int((540 + height_new)/2)):
                        im[i][j] = new_image[hi][j]
                        hi = hi + 1
                    for i in range(int((540 + height_new)/2),540):
                        im[i][j] = (255,255,255)
                im = Image.fromarray(im)
                im.save(file)