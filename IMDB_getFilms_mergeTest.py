#!/usr/bin/env python
# coding: utf-8

# In[10]:


import csv
from selenium import webdriver
from bs4 import BeautifulSoup
import requests
import time

driver = webdriver.Chrome("C:\\Users\\kassi\\Desktop\\ott\\chromedriver.exe")
url = 'https://www.imdb.com/oscars/?ref_=nv_ev_acd'
driver.get(url)


# In[11]:


# 년도 선택
year = driver.find_element_by_link_text('2011')  # years딕셔너리는 년도별 링크를 가지고 있다.


# In[12]:


TawardName = []
TawardTitleCode = []  # 상받은영화코드
TawardTitleName = []  # 상받은영화제목
TawardActorCode = []  # 상받은배우코드
TawardActorName = []  # 상받은배우이름
TawardDict = []
titleLink = []


# In[14]:


for x in range(2010, 2022):
    year = driver.find_element_by_link_text(str(x))
    year.click()
    html = driver.page_source
    bs = BeautifulSoup(html, 'html.parser')
    awardName = []  # 상이름
    awardRange = bs.select('div[class="event-widgets__award-category"]')
    awardTitleCode = []  # 상받은영화코드
    awardTitleName = []  # 상받은영화제목
    awardActorCode = []  # 상받은배우코드
    awardActorName = []  # 상받은배우이름
    awardDict = {}  # 상이름-작품 딕셔너리
    for i in bs.select('div[class="event-widgets__award-category-name"]'):
        awardName.append(i.get_text())
    for i in awardRange:
        a = i.select('div[class="event-widgets__award-nomination"]')[0]
        b = a.select('span[class="event-widgets__nominee-name"]')
        for j in b:
            c = j.select('a')
            for k in c:
                e = str(k).split('"')
                # d는 title, nameCode, titleCode, title정보를 모두 가지고 있다. 중요함 #############
                d = str(k).split('/')
                if d[1] == 'title':
                    awardTitleCode.append(d[2])
                    awardTitleName.append(k.get_text())
                    titleLink.append(e[1])
                else:
                    awardActorCode.append(d[2])
                    awardActorName.append(k.get_text())
    if x == 2017:
        awardName.pop(-1)

    for i in range(len(awardName)):
        awardDict[awardName[i]] = awardTitleName[i]
    TawardName.append(awardName)
    TawardTitleCode.append(awardTitleCode)
    TawardTitleName.append(awardTitleName)
    TawardActorCode.append(awardActorCode)
    TawardActorName.append(awardActorName)
    TawardDict.append(awardDict)
    time.sleep(5)


# In[400]:

driver.close()


# In[406]:


# for i in TawardDict:
#     for j in i:
#         print(f"{j} : {i[j]}")
#     print('\n')


# In[455]:


# 리스트, 딕셔너리 -> 엑셀파일로 만들기
# import csv

# f = open("ActorName.csv","w", newline='',encoding='utf-8')

# wr = csv.writer(f)
# wr.writerow(ActorName)
# f.close()


# In[15]:


# In[16]:


# 리스트 엑셀파일로 만들기
# f = open("titleLink.csv","w", newline='',encoding='utf-8')

# wr = csv.writer(f)
# wr.writerow(titleLink)
# f.close()


# In[ ]:
